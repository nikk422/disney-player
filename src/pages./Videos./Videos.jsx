import { useVideos } from "../../Context/Videos-Context";
import { useFilter } from "../../Context/Filter-context";
import { Link } from "react-router-dom";
import "./videos.css";
import { FaEllipsisV } from 'react-icons/fa';


const Videos = ({ data }) => {
  const { video, loader } = useVideos();

  const {
    VideoState: { videosFilter },
  } = useFilter();

  let filteredArray = video.filter((item) => item.genre === videosFilter);

  if (videosFilter === "ALL") {
    filteredArray = video;
  }
  if (data !== undefined) {
    filteredArray = [data];
  }

  return (
    <div>
      <div className="videolist-contain flex gap-10px flex-wrap positon-relative">
        {loader && <h2>loading....</h2>}
        {filteredArray.map((item) => (
          <div className="videos-detail padding-4px gap-8p flex-column positon-relative">
            <Link to={`/singleVideo/${item.id}`}>
              <div>
                <img
                  className="video-img"
                  src={`https://img.youtube.com/vi/${item.id}/mqdefault.jpg`}
                  alt="vido"
                />
              </div>
            </Link>
            <div className="about-video flex-justify-between positon-relative">
              <img src={item.img} className="badge-img" alt="img" />

              <div className="video-detail">
                <h4>{item.title}</h4>
                <p>{item.creator}</p>
                <p>
                  {item.views} views . <span>{item.release}</span>
                </p>
              </div>

              <div>
                <i><FaEllipsisV/></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Videos;
