const { Pool } = require("pg"); // PostgreSQL connection pool
const pool = new Pool({
  user: "your_username",
  host: "your_host",
  database: "your_database",
  password: "your_password",
  port: 5432,
});

// Configuration
const pageSize = 50; // Number of rows per page
const pageNumber = 10; // Target page

// Main function to fetch data for the target page
async function fetchPage(pageNumber, pageSize) {
  try {
    // Step 1: Calculate the starting row index for the target page
    const startingRow = (pageNumber - 1) * pageSize;

    // Step 2: Find the min and max `gst_id`
    const { rows: range } = await pool.query(`
      SELECT MIN(gst_id) AS min_gst_id, MAX(gst_id) AS max_gst_id
      FROM gm_scheduler
      WHERE customer_id = 515;
    `);

    const minGstId = parseInt(range[0].min_gst_id, 10);
    const maxGstId = parseInt(range[0].max_gst_id, 10);

    if (!minGstId || !maxGstId) {
      throw new Error("Invalid data range.");
    }

    // Step 3: Perform binary search to find the cursor for the target page
    const targetCursor = await binarySearchCursor(minGstId, maxGstId, startingRow);

    // Step 4: Fetch the page data using the cursor
    const { rows: pageData } = await pool.query(`
      SELECT *
      FROM gm_scheduler
      WHERE gst_id <= $1
      ORDER BY gst_id DESC
      LIMIT $2;
    `, [targetCursor, pageSize]);

    return pageData;

  } catch (error) {
    console.error("Error fetching page:", error.message);
    throw error;
  }
}

// Binary search implementation
async function binarySearchCursor(minGstId, maxGstId, startingRow) {
  let low = minGstId;
  let high = maxGstId;
  let cursor = null;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    // Count rows greater than the midpoint
    const { rows } = await pool.query(`
      SELECT COUNT(*) AS row_count
      FROM gm_scheduler
      WHERE gst_id > $1;
    `, [mid]);

    const rowCount = parseInt(rows[0].row_count, 10);

    if (rowCount > startingRow) {
      // Move the cursor down
      low = mid + 1;
    } else {
      // Move the cursor up
      cursor = mid; // Potential candidate for the cursor
      high = mid - 1;
    }
  }

  return cursor;
}

// Execute the function to fetch the page
fetchPage(pageNumber, pageSize)
  .then((data) => {
    console.log("Page Data:", data);
  })
  .catch((err) => {
    console.error("Error:", err.message);
  });
