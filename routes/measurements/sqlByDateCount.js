const sql = `
SELECT
    count(*) AS count
FROM
    Measurements
WHERE
    date >`

export default function (searchParam){
    return sql+searchParam
}
