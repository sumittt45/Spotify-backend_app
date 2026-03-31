
# Spotify Backend APP 🎵

A backend clone of Spotify built using **Node.js, Express.js, MongoDB, and JWT Authentication**.

This project provides REST APIs for music upload, album creation, and fetching music data.

---

## 🚀 Features

* User & Artist Authentication
* JWT-based Authorization
* Upload Music API
* Create Album API
* Fetch All Songs
* Fetch All Albums
* Fetch Album by ID
* MongoDB population using `populate()`
* Middleware-based role protection

---

## 🛠 Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB, Mongoose
* **Authentication:** JWT
* **File Upload:** Multer

---

## 📌 API Endpoints

### Upload Music

`POST /api/music/upload`

### Create Album

`POST /api/music/album`

### Get All Music

`GET /api/music`

### Get All Albums

`GET /api/music/albums`

### Get Album By ID

`GET /api/music/album/:id`

---

## ▶️ Run Locally

```bash
npm install
npm run dev
```

---

## 🌟 Future Improvements

* React frontend
* Playlist APIs
* Search functionality
* Music streaming
* Like/Save songs
