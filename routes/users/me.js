import db from "../../mysql/db.js";
import SQLSessionByToken from "./SQLsessionByToken.js";
import SQLUserById from "./SQLUserById.js";



export default async function me(_req, res) {
  try {

    const userToken = res.locals.token;
    const sessionByToken=SQLSessionByToken()
    const values = [userToken];
    const session =await db.query(sessionByToken,values)
    if (!session) {
      return res.status(200);
    }
    const UserById=SQLUserById(session[0].userId)
    const user =await db.query(UserById)
    if(!user){
        return res.status(200);
    }
    res.status(200).json({ data: user[0] });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server side error" });
  }
}
