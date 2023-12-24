const sql = `SELECT
CAST(id AS CHAR) AS id,
amount,
date,
measuredby,
userid,
imageName,
created_at,
updated_at
FROM
Measurements
WHERE
amount > `

export default function sqlByAmount(searchParam){
    return sql+searchParam
}
