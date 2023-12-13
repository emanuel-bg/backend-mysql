const sql = `
SELECT
    count(*) AS count
FROM
    Measurements
WHERE
    amount > $ 
`

export default function (searchParam){
    return sql+searchParam
}
