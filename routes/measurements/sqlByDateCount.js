const sql = `
SELECT
    count(*) AS count
FROM
    Measurements
WHERE
    date >`

export default function sqlByDateCount(searchParam){
    return sql+searchParam
}
