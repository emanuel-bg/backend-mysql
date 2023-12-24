import db from "./../mysql/db.js"
import sqlModelById from "./sqlModelById.js";
export default function modelById(columns,table,name) {
  return async function (req,res,next) {
    const modelId = req.params?.id;
    if (!modelId||isNaN(modelId)) {
      return next({ message: `${name} not found`, status: 404 });
    }
    const sql=sqlModelById(columns,table,modelId)
    if(!sql){
      next({ message: `Serverside Error`, status: 404 })
    }
    const data = await db.query(sql);
    res.locals[name] = data[0];
    next();
  };
}
