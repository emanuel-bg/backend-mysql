import db from "../../mysql/db.js";
import sqldeleteSessionByToken from "./SQLdeleteSessionByToken.js"

export default async function Logout(_req, res) {
    try {
        const userToken = res.locals.token;
        const values=[userToken]
        const session = await db.query(sqldeleteSessionByToken(),values)
        if (!session) {
            console.log(session)
        }
        return res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        return res.status(200).json({ message: "An error occurred while logging out" });
    }
}