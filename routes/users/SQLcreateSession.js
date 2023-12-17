const sql = `
INSERT INTO projectx.UserSessions (userId, created_at, updated_at, token) VALUES (?, ?, ?, ?);
`;

export default function SQLcreateSession() {
    return sql
}
