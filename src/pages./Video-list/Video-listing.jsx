import Sidebar from "../../Componant/SideBar/SideBar";
import Videos from "../../pages./Videos./Videos";
import GenreFilter from "../../Componant/genre-chips/GenreFilter";
import { useVideos } from "../../Context/Videos-Context";
import "./videos.css";
import Navbar from "../../Componant/Navbar/Navbar";

const VideoListing = () => {
  const { loader } = useVideos();

  return (
    <div>
      <Navbar />
      <div className="video-container">
        <div>
          <Sidebar />
        </div>
        {loader && <h2 className="loader"></h2>}
        <div>
          <GenreFilter />
          <div className="All-videos">
            <Videos />
          </div>
        </div>
      </div>
    </div>
  );
};
export default VideoListing;
