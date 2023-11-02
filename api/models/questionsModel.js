import { pool } from "../utils/databaseConnection.js";

export async function getQuestionsByWeek(week) {
  const queryText = "SELECT * FROM weekly_questions WHERE week = $1";
  const result = await pool.query(queryText, [week]);
  return result.rows || null;
}
