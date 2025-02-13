// Create a Materialized View in PostgreSQL
// Run this SQL in your database to create a Materialized View that stores row numbers for gm_scheduler records:


// CREATE MATERIALIZED VIEW gm_scheduler_pagination AS
// SELECT gst_id, customer_id, 
//        ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY gst_id DESC) AS row_num
// FROM gm_scheduler;

const { Pool } = require("pg");

// PostgreSQL connection
const pool = new Pool({
    user: "postgres",
  host: "localhost",
  database: "terotam-sandbox",
  password: "1234",
  port: 5432, // Default PostgreSQL port
});

// Function to fetch paginated results
async function getPaginatedResults(customerId, page, limit) {
  const offset = (page - 1) * limit;
  
  const query = `
    SELECT gst_id,* FROM gm_scheduler_pagination 
    WHERE customer_id = $1 
    AND row_num BETWEEN $2 AND $3
    ORDER BY gst_id DESC;
  `;

  try {
    const result = await pool.query(query, [customerId, offset + 1, offset + limit]);
    return result.rows;
  } catch (err) {
    console.error("Error executing query", err);
    return [];
  }
}

// Example usage
(async () => {
  const customerId = 1441;
  const page = 15128; // Jump to page 15127
  const limit = 10;   // 10 records per page
  
  const data = await getPaginatedResults(customerId, page, limit);
  console.log(data);
})();


// Refresh Materialized View Automatically
// Since materialized views don’t update automatically, schedule a refresh:

// sql->  REFRESH MATERIALIZED VIEW gm_scheduler_pagination;

// Or, run it in Node.js:

// await pool.query("REFRESH MATERIALIZED VIEW gm_scheduler_pagination;");

