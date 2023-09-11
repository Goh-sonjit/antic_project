import { executeQuery } from "../../../conn/conn";
import catchError from "../../../middelware/catchError";
const request = require("request");
export default async function handler(req, res) {
  const method = req.method;
  switch (method) {
    case "POST":
      forgetOtp(req, res);
      break;
    case "GET":
      matchOtp(req, res);
      break;
  }
}

export const forgetOtp = catchError(async (req, res) => {
  const { phonenumber } = req.body;

  const data = await executeQuery(
    "SELECT code From pg_owners WHERE phonenumber = '" + phonenumber + "'",
    "pg_app"
  );
  if (data.length == 1) {
    const companycode = data[0].code;

    if (phonenumber) {
      let otp = Math.floor(100000 + Math.random() * 900000);

      request(
        {
          url: "https://api.msg91.com/api/sendhttp.php",
          method: "POST",
          form: {
            authkey: "280862A8xB5Zeo9OK45d020be9",
            mobiles: phonenumber,
            message: `${otp} is your one-time OTP for login into the pg account.`,
            sender: "GOHOOH",
            route: "4",
            DLT_TE_ID: "1307165770131175060",
          },
        },
        async function (error, response, body) {
          if (error) {
            res.status(400).json({ message: error.message });
          } else {
            const sql = await executeQuery("Update pg_staff SET otp = " + otp + "  WHERE phonenumber = " + phonenumber + "",`pg_${companycode}`);
            if (sql) {
              return res
                .status(200)
                .json({ success: true, message: "Mobile OTP Send" });
            }
          }
        }
      );
    } else {
      return res.status(206).json({ message: "Wrong Number" });
    }
  } else {
    return res.status(206).json({ message: "Compnay Not Registered" });
  }
});

export const matchOtp = catchError(async (req, res) => {
  const { phonenumber, otp } = req.body;

  const data = await executeQuery(
    "SELECT code From pg_owners WHERE phonenumber = '" + phonenumber + "'",
    "pg_app"
  );
  if (data.length == 1) {
    const companycode = data[0].code;
    const phonenumber = await executeQuery(
      "SELECT id From pg_staff WHERE otp = " + otp + "",
      `pg_${companycode}`
    );
    if (phonenumber.length == 1) {
      return res
        .status(200)
        .json({ success: true, message: "Your can countinue" });
    } else {
      return res.status(206).json({ message: "Otp not matched" });
    }
  }
});

