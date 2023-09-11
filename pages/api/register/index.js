import { executeQuery } from "../../../conn/conn";
import catchError from "../../../middelware/catchError";
import bcryptjs from "bcryptjs";
import { mysql_real_escape_string, token } from "../../../middelware/token";
import cookie from 'cookie'
const request = require("request");
export default async function handler(req, res) {
  const method = req.method; switch (method) {
    case "POST": registerComapny(req, res); break;
    case 'GET':  addUser(req, res); break;
    case "PATCH": phoneOTp(req, res); break;
    case "PUT": verifyOtp(req, res); break;
  }
}
export const phoneOTp = catchError(async (req, res) => {
  const { phone } = req.body;
  const data = await executeQuery(
    "SELECT id FROM pg_owners WHERE phonenumber = " + phone + " & pg_name = null",
    "pg_app"
  );
  await executeQuery("DELETE FROM pg_owners WHERE phonenumber = " + phone + "", "pg_app")
  if (data.length >= 0) {
    let otp = Math.floor(1000 + Math.random() * 9000);

    request(
      {
        url: "https://api.msg91.com/api/sendhttp.php",
        method: "POST",
        form: {
          authkey: "280862A8xB5Zeo9OK45d020be9",
          mobiles: phone,
          message: `${otp} is your one-time OTP for login into the Gohoardings account.`,
          sender: "GOHOOH",
          route: "4",
          DLT_TE_ID: "1307165770131175060",
        },
      },
      async function (error, response, body) {
        if (error) {
          res.status(400).json({ message: error.message });
        } else {
          const sql = await executeQuery(
            "INSERT into pg_owners (phonenumber, otp) VALUES  ( " +
              phone +
              "," +
              otp +
              " )",
            "pg_app"
          );
          if (sql) {
            return res
              .status(200)
              .json({ success: true, message: "Mobile OTP Send" });
          }
        }
      }
    );
  } else {
    return res.status(206).json({ message: "This number already exists" });
  }
});

export const verifyOtp = catchError(async (req, res) => {
  const { otp } = req.body;
  const data = await executeQuery("SELECT id FROM pg_owners WHERE otp = " + otp + " ", "pg_app");
  if (data.length != 0) { 
    return res.status(200).json({ message: "You can countinue" });
   } else { 
    return res.status(206).json({ message: "Wrong OTP" }); 
  }
});

export const registerComapny = catchError(async (req, res) => { 
  const { name, email, phone, password } = req.body.value; 
  const promises = []
  console.log(req.body);
  const nameParts = name.split(' ');
  const firstName = nameParts[0] || name;
  const lastFourDigits = phone.slice(-4);
  const code = firstName + lastFourDigits;
  promises.push(new Promise(async (resolve, reject) => {
    const already = await executeQuery("SELECT id FROM pg_owners WHERE code = '" + code + "' || email = '" + email + "'", "pg_app")    
    resolve(resolve)    
    if (already.length == 0) {
      const newpassword = bcryptjs.hashSync(String(password), 8);                                                                                                                                           

            const sql = await executeQuery("UPDATE pg_owners SET pg_name = '" + code +"', code = '" + code + "', name = '" + name + "', email = '" + email + "', password = '" + newpassword + "' WHERE phonenumber = '" +phone + "'","pg_app");      
            resolve(sql)      
            if (sql) {        
              const createDtabase = await executeQuery(`CREATE DATABASE pg_${code}`);        
              if (createDtabase) {          
                const data = await executeQuery("SHOW TABLES", "pg_genral");          
                resolve(data)          
                if (data) {            
                  data.forEach(async (table) => {              
                    const createTableQuery = `CREATE TABLE IF NOT EXISTS pg_${code}.${table.Tables_in_pg_genral} LIKE pg_genral.${table.Tables_in_pg_genral}`;              
                    const insertDataQuery = `INSERT INTO pg_${code}.${table.Tables_in_pg_genral} SELECT * FROM pg_genral.${table.Tables_in_pg_genral}`;              
                    const value = await executeQuery(createTableQuery, `pg_${code}`);             
                     resolve(value)             
                      if (value) {                
                        await executeQuery(insertDataQuery, `pg_${code}`);
                      }            
                      });
                      const insertTableData = "INSERT INTO pg_staff (pg_name, code, name, email, password, phonenumber) VALUES ('"+code+"', '"+code+"', '"+name+"', '"+email+"', '"+newpassword+"', "+phone+")";               
                      await executeQuery(insertTableData, `pg_${code}`);         
                      return res.status(200).json({message : "Register Success"})          
                    }        
                  } else {
                    return res.status(206).json({ message: "DataBase not Created" });        
                  }       
                } else { 
                  return res.status(206).json({ message: "No User Found" });      
                }      
              }else{      
                return res.status(206).json({ message: "Company Already Registered" });     
              }
    }))
});
export const addUser = catchError(async (req, res) => {
  const userData = await executeQuery("SELECT code,email, name, password, phonenumber FROM pg_owners WHERE id = (SELECT Max(id) FROM pg_owners)", "pg_app")
  if (userData) {
    const code = userData[0].code
    const data = await executeQuery("INSERT into pg_staff SET code = '" + userData[0].code + "', email = '" + userData[0].email + "', name = '" + userData[0].name + "', phonenumber = " + userData[0].phonenumber + ", password ='" + userData[0].password + "'", `pg_${code}`)
    if (data) { const getStaff = await executeQuery("SELECT id from pg_staff WHERE id = (SELECT Max(id) FROM pg_staff)", `pg_${code}`) 
    if (getStaff) { const id = `${getStaff[0].staffid}&${code}`   
    res.setHeader("Set-Cookie", cookie.serialize(String(`pg_owner`), { expires: Date.now() }))  
    token(id, 200, res); } else { return res.status(200).json({ message: "Something wrong" }) } } else {
      return res.status(200).json({ message: "Something wrong" })
    }
  } else {
    return res.status(200).json({ message: "Something wrong" })
  }

})

export const testing_data = catchError(async (req, res) => {
const datestta = [{
  "name" : "uday",
  "gender" : "male",
  "floors" : [{
    "floor1" : [{
      "private_room" : "3",
      "bed_available" : "1"
    },{
      "double_sharing" : "2",
      "bed_available" : "1"
    },{
      "Triple_sharing" : "4",
      "bed_available" : "3"
    }],
    "floor2" : [{
      "private_room" : "3",
      "bed_available" : "2"
    },{
      "double_sharing" : "3",
      "bed_available" : "1"
    },{
      "Triple_sharing" : "4",
      "bed_available" : "2"
    }],
    "floor3" : [{
      "private_room" : "3",
      "bed_available" : "2"
    },{
      "double_sharing" : "4",
      "bed_available" : "1"
    },{
      "Triple_sharing" : "5",
      "bed_available" : "3"
    }]
   }]
}]
try {
  for (const entry of datestta) {
    const { name, gender, floors } = entry;

    const detailsInsertQuery = `INSERT INTO details (name, gender) VALUES ("${name}", "${gender}")`;
    const detailsInsertResult = await executeQuery(detailsInsertQuery, "test");

    const detailId = detailsInsertResult.insertId;

    for (const floor of floors) {
      const floorName = Object.keys(floor)[0];
      const roomTypes = floor[floorName];

      for (const room of roomTypes) {
        const roomType = Object.keys(room)[0];
        const bedAvailable = room['bed_available'];

        const floorsInsertQuery = `INSERT INTO floors (detail_id, floor_name, room_type, bed_available) VALUES (${detailId}, "${floorName}", "${roomType}", ${bedAvailable})`;
        await executeQuery(floorsInsertQuery, "test");
      }
    }
  }

  res.status(200).json({ message: 'Data insertion successful.' });
} catch (error) {
  res.status(500).json({ error: 'An error occurred while inserting data.' });
}
})
