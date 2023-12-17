const sql = `SELECT * from Users WHERE id=`;

export default function SQLUserById(id) {
    return sql+id
}
