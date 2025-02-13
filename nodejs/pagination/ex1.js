const { Pool } = require("pg"); 
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "terotam-sandbox",
  password: "1234",
  port: 5432,
});

const pageSize = 10; 
const pageNumber = 15128;

async function fetchPage(pageNumber, pageSize) {
  try {
    const startingRow = (pageNumber - 1) * pageSize;

    // Find the min and max `updated_date` range
    const { rows: range } = await pool.query(`
      SELECT MIN(updated_date) AS min_date, MAX(updated_at) AS max_date
      FROM gm_scheduler
      WHERE customer_id = 1441;
    `);

    const minDate = range[0].min_date;
    const maxDate = range[0].max_date;

    if (!minDate || !maxDate) {
      throw new Error("Invalid data range.");
    }

    console.log("minDate:", minDate, "maxDate:", maxDate, "startingRow:", startingRow);

    // Find the cursor position using binary search on `updated_date`
    const targetCursor = await binarySearchCursor(minDate, maxDate, startingRow);

    console.log("targetCursor (updated_date):", targetCursor);

    // Fetch paginated results based on `updated_date`
    const { rows: pageData } = await pool.query(`
      SELECT gst_id, updated_date
      FROM gm_scheduler
      WHERE customer_id = 1441 AND updated_at <= $1
      ORDER BY updated_date DESC
      LIMIT $2;
    `, [targetCursor, pageSize]);

    return pageData;

  } catch (error) {
    console.error("Error fetching page:", error.message);
    throw error;
  }
}

async function binarySearchCursor(minDate, maxDate, startingRow) {
  let low = minDate;
  let high = maxDate;
  let cursor = null;

  while (new Date(low) <= new Date(high)) {
    const mid = new Date((new Date(low).getTime() + new Date(high).getTime()) / 2).toISOString();

    console.log("mid (updated_date):", mid);

    const { rows } = await pool.query(`
      SELECT COUNT(*) AS row_count
      FROM gm_scheduler
      WHERE customer_id = 1441 AND updated_at > $1;
    `, [mid]);

    const rowCount = parseInt(rows[0].row_count, 10);

    if (rowCount > startingRow) {
      low = mid;
    } else {
      cursor = mid;
      high = mid;
    }
  }

  return cursor;
}

// Run pagination query
fetchPage(pageNumber, pageSize)
  .then((data) => {
    console.log("Page Data:", data);
  })
  .catch((err) => {
    console.error("Error:", err.message);
  });
