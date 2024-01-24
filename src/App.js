import "./App.scss";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import Header from "./components/Header/Header.js";
import { HomePage } from "./pages/HomePage/HomePage.js";
import { UploadPage } from "./pages/UploadPage/UploadPage.js";
import { Error404Page } from "./pages/Error404Page/Error404Page.js";


function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/videos" element={<HomePage />} />
          <Route path="/videos/:videoId" element={<HomePage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="*" element={<Error404Page />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
