const sql = `SELECT * from UserSessions WHERE token= ?`;

export default function SQLSessionByToken() {
    return sql
}
