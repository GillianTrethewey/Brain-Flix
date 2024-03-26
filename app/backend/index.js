const express = require("express");
const cors = require("cors");

const app = express();
require("dotenv").config();
const videosRouter = require("./routes/videos");

const PORT = process.env.PORT || 9000;

app.set("trust proxy", 1);
app.use(cors());
app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.static("public"));

app.use((req, _res, next) => {
  console.log(`${req.method} request to ${req.path}`);
  next();
});

app.use(express.json());
app.use("/videos", videosRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
