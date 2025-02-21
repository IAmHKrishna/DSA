const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");

const app = express();
const PORT = 3031;

// Middleware
app.use(cookieParser());
app.set("view engine", "hbs"); // Set Handlebars as view engine
app.set("views", path.join(__dirname, "views")); // Define views folder

// ✅ Home Route (Set Cookie)
app.get("/", (req, res) => {
  res.cookie("username", "JohnDoe", { maxAge: 60000, httpOnly: true });
  res.render("home", { message: "Cookie has been set!" });
});

// ✅ Dashboard Route (Read Cookie)
app.get("/dashboard", (req, res) => {
  const username = req.cookies.username;

  if (!username) {
    return res.render("home", { message: "No cookies found, please set one!" });
  }

  res.render("dashboard", { username });
});

// ✅ Delete Cookie
app.get("/logout", (req, res) => {
  res.clearCookie("username");
  res.render("home", { message: "Logged out! Cookie deleted." });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
