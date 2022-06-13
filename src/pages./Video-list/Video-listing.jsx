import Sidebar from "../../Componant/SideBar/SideBar";
import Videos from "../../pages./Videos./Videos";
import GenreFilter from "../../Componant/genre-chips/GenreFilter";
import { useVideos } from "../../Context/Videos-Context";
import "./videos.css";
import Navbar from "../../Componant/Navbar/Navbar";

const VideoListing = () => {
  const { loader } = useVideos();

  return (
    <main>
      <Navbar />
      <section className="video-container">
        <aside>
          <Sidebar />
        </aside>
        {loader && <h2 className="loader"></h2>}
        <section>
          <GenreFilter />
          <div className="All-videos">
            <Videos />
          </div>
        </section>
      </section>
    </main>
  );
};
export default VideoListing;
