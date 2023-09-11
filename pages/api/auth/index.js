import { executeQuery } from "../../../conn/conn";
import catchError from "../../../middelware/catchError";
import cookie from "cookie";
import bcrypt from "bcryptjs";
import { token, verifyToken } from "../../../middelware/token";

export default async function handler(req, res) {
  const { method } = req;
  switch (method) {
    case "POST":
      changePassword(req, res);
      break;
    case "PUT":
      await verifyToken(req, res);
      await logOut(req, res);
      break;
    case "PATCH":
      await login(req, res);
      break;
    case "GET":
      await verifyToken(req, res);
      await getUser(req, res);
      break;
    default:
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
}

export const login = catchError(async (req, res) => {
  const { email,password } = req.body;
  const data = await executeQuery(
    "SELECT code FROM pg_owners WHERE email = '" + email + "' ",
    "pg_app"
  );

  if (data.length == 1) {
    const code = data[0].code;
    const stafflogin = await executeQuery(
      "SELECT password, id From pg_staff WHERE email = '" + email + "'",
      `pg_${code}`
    );
    if (stafflogin.length == 1) {
      const pass = stafflogin[0].password;
      const matchPassword = bcrypt.compareSync(password, pass);
      if (matchPassword) {
        const id = `${stafflogin[0].id}&${code}`;
        res.setHeader(
          "Set-Cookie",
          cookie.serialize(String(`pg_owner`), { expires: Date.now() })
        );
        token(id, 200, res);
      } else {
        return res.status(206).json({ message: "Password Not matched" });
      }
    } else {
      return res
        .status(206)
        .json({ success: false, message: "Email Not Found" });
    }
  } else {
    return res
      .status(206)
      .json({ success: false, message: "Company Not Registered" });
  }
});

export const getUser = catchError(async (req, res, next) => {
  const { code, userid } = req.id;

  const query = `
    SELECT 
      id as id, 
      firstname,
      facebook,
      linkedin,
      phonenumber,
      skype,
      profile_image,
      name
    FROM pg_staff 
    JOIN tblroles ON role = roleid
    WHERE id = ${userid}
  `;

  const data = await executeQuery(query, `pg_${code}`);

  if (data.length === 1) {
    return res.status(200).json(data); // Return the first item as we expect only one result
  } else {
    return res.status(206).json("Try again");
  }

 
});


export const changePassword = catchError(async (req, res) => {
  const { contactPhone, password, confirmPassword, company } = req.body;
  if (
    password !== undefined &&
    confirmPassword !== undefined &&
    company !== undefined
  ) {
    if (password === confirmPassword) {
      const finalPassword = bcrypt.hashSync(String(password), 8);
      if (!finalPassword) {
        return res
          .status(206)
          .json({ success: false, message: "Password Error" });
      } else {
        const sql = await executeQuery(
          "SELECT code from  pg_owners WHERE  name='" + company + "'",
          "pg_app"
        );
        if (sql) {
          const Companycode = sql[0].code;
          const updatePassword = await executeQuery(
            "Update pg_staff SET password = '" +
              finalPassword +
              "', last_password_change = CURRENT_TIMESTAMP WHERE phonenumber = " +
              contactPhone +
              "",
            `pg_${Companycode}`
          );
          if (updatePassword) {
            const id = await executeQuery(
              "SELECT id FROM pg_staff  WHERE phonenumber = " +
                contactPhone +
                "",
              `pg_${Companycode}`
            );
            const logindata = `${id[0].id}&${Companycode}`;
            res.setHeader(
              "Set-Cookie",
              cookie.serialize(String(`pg_owner`), { expires: Date.now() })
            );
            token(logindata, 200, res);
          }
        }
      }
    } else {
      return res
        .status(206)
        .json({ success: false, message: "Your Password Not Matched" });
    }
  } else {
    return res.status(206).json({ success: false, message: "Empty Field" });
  }
});

export const logOut = catchError(async (req, res, next) => {
  const { code, userid } = req.id;
  const { id } = req.body;

  if (userid == id) {
    const updateDatabse = await executeQuery(
      "Update pg_staff SET last_activity = CURRENT_TIMESTAMP, last_login = CURRENT_TIMESTAMP WHERE id = " +
        id +
        " ",
      `pg_${code}`
    );
    if (updateDatabse) {
      const option = {
        path: "/",
        httpOnly: true,
        expires: new Date(0),
        httpOnly: false,
        sameSite: "strict",
      };

      const logoutData = `${userid}&${code}`;
      return res
        .status(200)
        .setHeader(
          "Set-Cookie",
          cookie.serialize(
            String(logoutData),
            "thisismysecretejsonWebToken",
            option
          )
        )
        .json({
          success: true,
          message: "User Logout SuccessFully",
        });
    } else {
      return res.status(206).json({ message: "User Not Found" });
    }
  } else {
    return res.status(206).json({ message: "User Not Found" });
  }
});
