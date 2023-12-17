import User from "../routes/users/userModel.js"
import Session from "../routes/users/sessionModel.js";


export default async function currentUser(_req,res,next){
    try{  
    const userToken = res.locals.token;
    const session = await Session.findOne({ token: userToken });
    if (!session) {
      next({message:"Session not found", status:400})
    }
    const user = await User.findOne({ _id: session.userId });
    
    if(!user){
        return res.status(200);
    }
    
    res.locals.user=user.public()
    next()
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server side error" });
  }

}