import jwt from "jsonwebtoken";
import "dotenv/config";

export default function verifyToken(req, res, next) {

  const token = req.header("Authorization")?.split(" ")[1];

  try {
    if (!token) {
      return next({ message: "Token not found", status: 401 });
    }

    const decoded = jwt.decode(token, process.env.SECRET_KEY);
    if (!decoded) {
      return next({ message: "Invalid token", status: 401 });
    }

    res.locals.token = token;

    jwt.verify(token, process.env.SECRET_KEY, (err) => {
      if (err) {
        if (err.name === "TokenExpiredError") {
          return next({ message: "Session is expired", status: 401 });
        }
        return next(err);
      }
    });

    next();
  } catch (error) {
    next(error);
  }
}
