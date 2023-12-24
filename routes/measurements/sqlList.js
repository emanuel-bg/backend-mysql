const sql = `
select CAST(id AS CHAR) as id,amount,date,measuredby,userid,imageName,created_at,updated_at from Measurements`;

export default function sqlList() {
  return sql;
}
