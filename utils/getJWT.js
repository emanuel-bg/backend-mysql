import "dotenv/config";
import jwt from "jsonwebtoken";

export default function getJWT(data) {
  return jwt.sign(
    {
     data: data,
       exp: Math.floor(Date.now() / 1000) + (60 * 60) //Math.floor(Date.now() / 1000) + 30//30 segundos 
    },
    process.env.SECRET_KEY,
  );
}
