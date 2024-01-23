import "./App.scss";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header/Header.js";


function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/videos" element={<HomePage />} />
          <Route path="/videos/:id" element={<HomePage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="*" element={<Error404Page />} />
        </Routes>
      </div>
    </BrowserRouter>

    // <div className="App">
    //   <Header />
    //   <main>
    //     {currentVideo && <HeroVideo currentVideo={currentVideo} />}

    //     <div className="main__contents">
    //       <section className="desc-comments__container">
    //         {currentVideoDetails && (
    //           <VideoDesc currentVideoDetails={currentVideoDetails} />
    //         )}

    //         {currentVideoDetails && (
    //           <Comments comments={currentVideoDetails.comments} />
    //         )}
    //       </section>

    //       <section className="flex-video__container">
    //         {videoData && currentVideo && (
    //           <VideoList
    //             updateVideo={updateVideo}
    //             videoData={videoData}
    //             currentVideo={currentVideo}
    //           />
    //         )}
    //       </section>
    //     </div>
    //   </main>
    //   <footer></footer>
    // </div>
  );
}

export default App;
