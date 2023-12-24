export default function sqlModelById(columns, table, id) {
  if (!Array.isArray(columns) || columns.length === 0 || !table) {
    return ""
  }
  let columnNames=""
  columnNames = columns.join(", ");
  if(columns.length<1){
  columnNames = columns[0];
  }
  const sqlQuery = `SELECT ${columnNames} FROM ${table} WHERE id=${id}`;
  return sqlQuery;
}
