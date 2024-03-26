const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

router.get("/", (_req, res) => {
  console.log("GET request received for /videos");
  try {
    const data = fs.readFileSync(path.join(__dirname, "../data/videos.json"));
    const videos = JSON.parse(data).map((video) => {
      return {
        id: video.id,
        title: video.title,
        channel: video.channel,
        image: video.image,
      };
    });
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: { error } });
  }
});

// HERO VIDEO ROUTE
router.get("/:videoId", (req, res) => {
  try {
    const filePath = path.join(__dirname, "../data/video-details.json");
    const data = fs.readFileSync(filePath, "utf8");
    const videoData = JSON.parse(data);
    const selectedVideo = videoData.find(
      (video) => video.id === req.params.videoId
    );
    if (!selectedVideo) {
      return res.status(404).json({ message: "No video with that id" });
    }
    res.json(selectedVideo);
  } catch (error) {
    res.status(500).json({ message: { error } });
  }
});

//UPLOAD VIDEO ROUTE
router.post("/", (req, res) => {
  try {
    const filePathPost = path.join(__dirname, "../data/video-details.json");
    const dataDetails = fs.readFileSync(filePathPost, "utf8");
    const videoDataDetails = JSON.parse(dataDetails);
    const newVideoDetails = {
      id: uuidv4(),
      title: req.body.title,
      channel: "New Channel",
      image: "upload-video-preview.jpg",
      description: req.body.description,
      views: "0",
      likes: "0",
      duration: "4:20",
      video: "https://project-2-api.herokuapp.com/stream",
      timestamp: Date.now(),
      comments: [],
    };
    videoDataDetails.push(newVideoDetails);
    const filePathDetails = path.join(__dirname, "../data/video-details.json");
    fs.writeFileSync(
      filePathDetails,
      JSON.stringify(videoDataDetails, null, 2)
    );

    res.status(201).json(newVideoDetails);
  } catch (error) {
    res.status(500).json({ message: { error } });
  }
});

module.exports = router;
