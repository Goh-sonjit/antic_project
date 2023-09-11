import { executeQuery } from "../../../conn/conn";
import catchError from "../../../middelware/catchError";
import { verifyToken } from "../../../middelware/token";

export default async function handler(req, res) {
  const method = req.method;
  switch (method) {
    case "POST":
      await verifyToken(req, res);
      await createLead(req, res);
      break;
    default:
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
}


export const createLead = catchError(async (req, res) => {
  const databse = req.id.code;
  const { userid } = req.id;
  if (databse) {
    const { value } = req.body;
    const {
      name,
      company,
      country,
      zip,
      city,
      state,
      address,
      assigned,
      status,
      source,
      email,
      website,
      phone,
    } = value;
    const defaultCountry = country ? country : "India";
    const query =
      "INSERT into tblleads SET name = '" +
      name +
      "',  company = '" +
      company +
      "', country = (SELECT Max(country_id) FROM odoads_general_tbl.tblcountries WHERE short_name = '" +
      defaultCountry +
      "'), zip = " +
      zip +
      ", city = (SELECT MAx(id) FROM odoads_general_tbl.tblcities WHERE name = '" +
      city +
      "'), state = (SELECT Max(id) FROM odoads_general_tbl.tblstates WHERE name = '" +
      state +
      "'), address  ='" +
      address +
      "', assigned = (SELECT staffid from pg_" +
      databse +
      ".pg_staff WHERE firstname = '" +
      assigned +
      "'), status = ( SELECT statusorder FROM odoads_general_tbl.tblleadsstatus WHERE name = '" +
      status +
      "'), source = (SELECT id FROM odoads_general_tbl.tblleadssources WHERE name='" +
      source +
      "'), email = '" +
      email +
      "', website ='" +
      website +
      "', phonenumber = " +
      phone +
      ", is_public = 1, dateadded = CURRENT_TIMESTAMP, addedfrom =  " +
      userid +
      "";
    const result = await executeQuery(query, `pg_${databse}`);
    if (result) {
      return res.send(result);
    } else {
      return res.status(206).json({ message: "Faild" });
    }
  } else {
    return res.status(206).json({ message: "Faild" });
  }
});
