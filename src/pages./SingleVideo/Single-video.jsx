import "./single.css";
import { useParams } from "react-router-dom";
import { useVideos } from "../../Context/Videos-Context";
import Sidebar from "../../Componant/SideBar/SideBar";
import Videos from "../Videos./Videos";
import Navbar from "../../Componant/Navbar/Navbar";

const SingleVideo = () => {
  const { VideoId } = useParams();
  const { video } = useVideos();

  const playVideo = video.find((play) => play.id === VideoId);

  return (
    <div>
      <Navbar />
      <div className="single-video-container gap-18p">
        <div>
          <Sidebar />
        </div>
        <div className="iframe-container margin-top-22p">
          <iframe
            width="950px"
            height="534px"
            src={`https://www.youtube.com/embed/${VideoId}?autoplay=1`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          ></iframe>
          <h2 className="titleName margin-1r">{playVideo.title}</h2>
          <div className="video-detail-container margin-22p font-18p flex-justify-between">
            <p>
              {playVideo.views} views. <span> {playVideo.release}</span>
            </p>
            <div className="single-video-detail font-18p flex gap-3r">
              <i className="fa fa-thumbs-up likesicon" aria-hidden="true"> Likes
              </i>
              <i class="fas fa-clock watch-later-btn font-18p"> Watch later</i>

              <i className="fas fa-folder-plus"> Add to Playlist</i>
            </div>
          </div>
          <hr></hr>
          <div className="img-creator margin-1r gap-8p flex">
            <div>
              <img src={playVideo.img} className="badge-img" alt="img" />
            </div>
            <div>
              <h3>{playVideo.creator}</h3>
              <p className="description font-18p">
                Description : - {playVideo.description}
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="Suggestions-heading text-align margin-8p ">Suggestions Video</h2>
          {video.map((item) =>
            playVideo.genre === item.genre ? <Videos data={item} /> : ""
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleVideo;
