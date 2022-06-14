import "./single.css";
import {useEffect} from "react";
import { useParams } from "react-router-dom";
import { useVideos } from "../../Context/Videos-Context";
import Sidebar from "../../Componant/SideBar/SideBar";
import Navbar from "../../Componant/Navbar/Navbar";
import VideoCard from "../../Componant/Video-Card/VideoCard";
import { useWatchlater } from "../../Context/Features-page/WatchLater-context";
import { useLikes } from "../../Context/Features-page/Likes-context";
import {usePlaylist} from "../../Context/Features-page/Playlist-context";
import PlaylistModel from "../../Componant/Playlsit-model/Playlist-Model";


const SingleVideo = () => {
  const { VideoId } = useParams();
  const { video,getVideos } = useVideos();

  
  const { removeWatchVideo, WatchLaterVideos, getWatchLaterVideo } =
    useWatchlater();

  const { getLikedVideo, removeLikeVideo, LikeVideos } = useLikes();
  const { showModel, setShowModel  } = usePlaylist();

  const playVideo = video.find((play) => play.id === VideoId);

  
  useEffect(() => {
    getVideos()
  },[])


  return (
    <main>
      <Navbar />
      <div className="single-video-container gap-18p">
        <aside>
          <Sidebar />
        </aside>
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
              {LikeVideos.some((data) => data.id === playVideo.id) ? (
                <i
                  onClick={() => {
                    removeLikeVideo(playVideo.id);
                  }}
                  style={{ color: "red" }}
                  className="fa fa-thumbs-up "
                  aria-hidden="true"
                >
                  DisLike
                </i>
              ) : (
                <i
                  onClick={() => getLikedVideo(playVideo)}
                  className="fa fa-thumbs-up likesicon"
                  aria-hidden="true"
                >
                  Likes
                </i>
              )}
              {WatchLaterVideos.some((data) => data.id === playVideo.id) ? (
                <i
                  onClick={() => removeWatchVideo(playVideo.id)}
                  style={{ color: "red" }}
                  class="fas fa-clock watch-later-btn"
                >
                  Remove from Watch Later
                </i>
              ) : (
                <i
                  onClick={() => getWatchLaterVideo(playVideo)}
                  class="fas fa-clock watch-later-btn font-18p"
                >
                  {" "}
                  Watch later
                </i>
              )}
              <i
                onClick={() => setShowModel(!showModel)}
                className="fas fa-folder-plus"
              >
                {" "}
                Add to Playlist
              </i>
            </div>
          </div>
          <hr></hr>
          <section className="img-creator margin-1r gap-8p flex">
            <section>
              <img src={playVideo.img} className="badge-img" alt="img" />
            </section>
            <section>
              <h3>{playVideo.creator}</h3>
              <p className="description font-18p">
                Description : - {playVideo.description}
              </p>
            </section>
          </section>
        </div>
        <section>
          <h2 className="Suggestions-heading text-align margin-8p ">
            Suggestions Video
          </h2>
          {video.map((item) =>
            playVideo.genre === item.genre ? <VideoCard data={item} /> : ""
          )}
        </section>
      </div>
      {showModel && <PlaylistModel data={playVideo} />}

    </main>
  );
};

export default SingleVideo;
