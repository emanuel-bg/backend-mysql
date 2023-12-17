const sql = `DELETE FROM UserSessions WHERE token= ?`;

export default function SQLdeleteSessionByToken() {
    return sql
}
