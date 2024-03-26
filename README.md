# BrainFlix

## Overview

The BrainFlix React app renders a featured video from a list of videos using urls from an external website. The associated details and comments for the featured video are also rendered.

In addition, a new video with its data can be added to the list. The video data is accessed via an api call to the backend Express server.

The Express server includes routes to get all of the videos from the list, the hero video using a specific video id, and a post request which allows users to add new videos to the list.

Data is persistently stored in a JSON file. CORS requirements are handled with middleware. The app is currently locally deployed.

## Dependencies

### Client

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

#### Server

![Node](https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

## Local Deployment

1. Ensure you have the dependencies installed.
2. Navigate to the frontend root directory in terminal.
3. Install the node modules in the frontend.

```bash
npm install
```

4. Start the server.

```bash
npm run start
```

5. Navigate to http://localhost:3000 in your browser.

## Start the Server

1. Navigate to the root directory of the backend in terminal.
2. Install the node modules in the backend.

```bash
npm install
```

3. Start the server using the terminal.

```bash
node index.js
```

4. Navigate to http://localhost:8080 in your browser.
