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

    const { rows: range } = await pool.query(`
      SELECT MIN(gst_id) AS min_gst_id, MAX(gst_id) AS max_gst_id
      FROM gm_scheduler
      WHERE customer_id =1441;
    `);  //1068

    const minGstId = parseInt(range[0].min_gst_id, 10);
    const maxGstId = parseInt(range[0].max_gst_id, 10);

    if (!minGstId || !maxGstId) {
      throw new Error("Invalid data range.");
    }
console.log("minGstId", minGstId,maxGstId,startingRow);
    const targetCursor = await binarySearchCursor(minGstId, maxGstId, startingRow);
console.log("targetCursor", targetCursor);
    const { rows: pageData } = await pool.query(`
      SELECT gst_id
      FROM gm_scheduler
      WHERE  customer_id = 1441 and gst_id <= $1
      ORDER BY gst_id DESC
      LIMIT $2;
    `, [targetCursor, pageSize]);

    return pageData;

  } catch (error) {
    console.error("Error fetching page:", error.message);
    throw error;
  }
}

async function binarySearchCursor(minGstId, maxGstId, startingRow) {
  let low = minGstId;
  let high = maxGstId;
  let cursor = null;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
console.log("mid", mid);
    const { rows } = await pool.query(`
      SELECT COUNT(*) AS row_count
      FROM gm_scheduler
      WHERE customer_id = 1441 and gst_id > $1
      ORDER BY updated_at DESC ;
    `, [mid]);

    const rowCount = parseInt(rows[0].row_count, 10);

    if (rowCount > startingRow) {
      low = mid + 1;
    } else {
      cursor = mid; 
      high = mid - 1;
    }
  }

  return cursor;
}

fetchPage(pageNumber, pageSize)
  .then((data) => {
    console.log("Page Data:", data);
  })
  .catch((err) => {
    console.error("Error:", err.message);
  });
