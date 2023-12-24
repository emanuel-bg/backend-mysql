const sql = `
SELECT
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
    date > 
`

export default function sqlByDate(searchParam){
    return sql+searchParam
}
