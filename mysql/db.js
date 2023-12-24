import mysql from "mysql2/promise";
import config from "./config.js";

async function query(sql, params) {
  const connection = await mysql.createConnection(config.db);

  try {
    const [results] = await connection.execute(sql, params);
    return results;
  } finally {
    await connection.end();
  }
}

export default {
  query,
};
