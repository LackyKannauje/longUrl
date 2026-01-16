🚀 Shorty — Smart URL Shortener
<div align="center">








🔗 Turn long links into short, trackable, and shareable URLs in seconds.

👉 Live Demo: https://long-url-nu.vercel.app/signup

</div>
✨ Features

✅ Lightning-fast URL shortening
✅ Custom short URLs (/my-link)
✅ Click analytics & tracking
✅ User authentication (Login / Signup)
✅ QR code generation
✅ Link expiration
✅ Password-protected links
✅ Dashboard for analytics
✅ REST API support
✅ Mobile-friendly UI

🛠 Tech Stack

Backend

Node.js

Express.js

MongoDB + Mongoose

Others

📸 Screenshots
Signup/Login Screen
<img width="724" height="630" alt="image" src="https://github.com/user-attachments/assets/1accea00-e085-47ff-9a00-288a733e8219" />


Home	Dashboard	Analytics
<img width="1891" height="874" alt="image" src="https://github.com/user-attachments/assets/0d828a2e-0f52-414c-a8f9-4804970c6bdd" />


🚀 Installation & Setup
1️⃣ Clone the repo
git clone https://github.com/LackyKannauje/longUrl
cd url-shortener

2️⃣ Install dependencies
# Backend
cd backend
npm install

3️⃣ Create .env file (backend)
PORT=5000
MONGO_URI=mongodb+srv://your_db_url

4️⃣ Start the server
# Backend
npm run dev

🔗 API Endpoints
Shorten URL
POST /api/shorten
Body:
{
  "longUrl": "https://very-long-url.com"
}

Redirect
GET /:shortId

Get Analytics
GET /api/analytics/:shortId

📊 Example Response
{
  "shortUrl": "https://shorty.com/abc123",
  "createdAt": "2025-01-16T10:00:00Z"
}

🧠 How It Works

User enters a long URL

Server generates a unique short ID

Stores mapping in MongoDB

Redirects users when visiting short link

Tracks clicks & analytics

🔐 Security

Sanitized user inputs

Secure environment variables
