import app from "./app.js";
import express from "express";
import cloudinary from "cloudinary";
import dotenv from "dotenv";
import path from "path";
dotenv.config();

const _dirname = path.resolve();

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
  api_key: process.env.CLOUDINARY_CLIENT_API,
  api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});

app.use(express.static(path.join(_dirname, "/frontend/dist")));
app.get('*', (req, res) => {
  res.sendFile (path.resolve(_dirname, "frontend","dist","index.html"));
});

app.listen(process.env.PORT, () => {
  console.log(`Server running at port ${process.env.PORT}`);
});
