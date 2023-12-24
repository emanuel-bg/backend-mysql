const sql = `
select CAST(id AS CHAR) as id,amount,date,measuredby,userid as userId,imageName,created_at,updated_at from Measurements where id= `;

export default function sqlById(measureId) {
  return sql+measureId
}
