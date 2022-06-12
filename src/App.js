import "./App.css";
import "./styless/utility.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages./Home";
import VideoListing from "./pages./Video-list/Video-listing";
import Videos from "./pages./Videos./Videos";
import SingleVideo from "./pages./SingleVideo/Single-video";
import NotFound from "./pages./404-page/not-found-page";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/videoListing" element={<VideoListing />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/singleVideo/:VideoId" element={<SingleVideo />} />
        <Route path="*" element={<NotFound/>}/>


      </Routes>
    </div>
  );
}

export default App;
