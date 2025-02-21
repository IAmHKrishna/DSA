const express = require("express");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());
app.use(cookieParser());

const SECRET = "your_secret_key"; // Replace with a strong secret

// ✅ Login Route - Set JWT Token in HTTP-Only Cookie
app.get("/login", (req, res) => {
  const user = { id: 1, name: "JohnDoe" };
  const token = jwt.sign(user, SECRET, { expiresIn: "1h" });

  res.cookie("auth_token", token, {
    httpOnly: true, // Prevent XSS
    secure: true, // Use HTTPS
    sameSite: "Strict", // Prevent CSRF
    maxAge: 3600000, // 1 hour
  });

  res.json({ message: "Logged in!" });
});

// ✅ Protected Route - Read Cookie
app.get("/profile", (req, res) => {
  const token = req.cookies.auth_token;
  console.log(token);
  if (!token) return res.status(401).json({ error: "Unauthorized" });

  try {
    const user = jwt.verify(token, SECRET);
    res.json({ message: "Welcome to your profile", user });
  } catch (err) {
    res.status(403).json({ error: "Invalid token" });
  }
});

// ✅ Logout - Clear the Cookie
app.post("/logout", (req, res) => {
  res.clearCookie("auth_token");
  res.json({ message: "Logged out successfully" });
});

app.listen(3030, () => console.log("Server running on port 3030"));
