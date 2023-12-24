const sql = `
SELECT
    count(*) AS count
FROM
    Measurements
WHERE
    amount > $ 
`

export default function sqlByAmountCount(searchParam){
    return sql+searchParam
}
