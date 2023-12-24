const sql = `select count(*) as count FROM Measurements;`;

export default function sqlListCount() {
  return sql;
}
