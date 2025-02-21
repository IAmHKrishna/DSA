const express = require("express");
const crypto = require("crypto");
const redis = require("redis");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const client = redis.createClient(); // Redis for OTP storage
client.connect();

// MongoDB Schema (Track User Auth)
const userSchema = new mongoose.Schema({
  email: String,
  sessions: [{ platform: String, status: Boolean, timestamp: Date }]
});

const User = mongoose.model("User", userSchema);

mongoose.connect("mongodb://localhost:27017/authDB");

const SECRET_KEY = "your_secret_key"; // Use environment variables in production

// Generate OTP & Store in Redis
app.post("/generate-otp", async (req, res) => {
  const { email, platform } = req.body;
  if (!email || !platform) return res.status(400).json({ message: "Email & platform required" });

  const otp = crypto.randomInt(100000, 999999);
  await client.setEx(`${email}:${platform}`, 300, otp.toString()); // OTP expires in 5 min

  console.log(`OTP for ${email} on ${platform}: ${otp}`); // Simulate sending OTP
  res.json({ message: "OTP sent successfully" });
});

// Verify OTP & Track Auth Status
app.post("/verify-otp", async (req, res) => {
  const { email, platform, otp } = req.body;
  if (!email || !platform || !otp) return res.status(400).json({ message: "Email, platform & OTP required" });

  const storedOTP = await client.get(`${email}:${platform}`);
  if (!storedOTP) return res.status(400).json({ message: "OTP expired or invalid" });

  if (storedOTP !== otp) return res.status(401).json({ message: "Invalid OTP" });

  // Remove OTP from Redis after successful login
  await client.del(`${email}:${platform}`);

  // Update session tracking in MongoDB
  let user = await User.findOne({ email });
  if (!user) user = new User({ email, sessions: [] });

  const sessionIndex = user.sessions.findIndex(s => s.platform === platform);
  if (sessionIndex > -1) {
    user.sessions[sessionIndex] = { platform, status: true, timestamp: new Date() };
  } else {
    user.sessions.push({ platform, status: true, timestamp: new Date() });
  }

  await user.save();

  // Generate JWT Token
  const token = jwt.sign({ email, platform }, SECRET_KEY, { expiresIn: "1h" });

  res.json({ message: "OTP verified successfully", token });
});

// Get Authentication Status for a User
app.get("/auth-status/:email", async (req, res) => {
  const { email } = req.params;
  const user = await User.findOne({ email });
  if (!user) return res.json({ message: "No active sessions", sessions: [] });

  res.json({ message: "User Authenticated Sessions", sessions: user.sessions });
});

app.listen(3000, () => console.log("Server running on port 3000"));
