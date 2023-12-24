import db from "../mysql/db.js";
import SQLSessionByToken from "../routes/users/SQLsessionByToken.js";
import SQLUserById from "../routes/users/SQLUserById.js"

export default async function currentUser(_req,res,next){
    try{  

    const userToken = res.locals.token;
    const token=[userToken]
    const sqlSession=SQLSessionByToken()
    const session = await db.query(sqlSession,token)
    if (!session.length) {
      next({message:"Session not found", status:400})
    }

    const sqlUser=SQLUserById(session[0].userId)
    const user = await db.query(sqlUser)
    
    if(!user){
        return res.status(200);
    }
    
    res.locals.currentUser=user[0]
    next()
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server side error" });
  }

}