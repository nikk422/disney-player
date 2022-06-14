import {useHistory} from "../../Context/Features-page/History-context";
import {Link} from "react-router-dom";

const VideoCard = ({data}) => {
    const {getHistoryVideo}=useHistory();

    const {id,img, title,creator, views , release} = data;
  return (
      <div>
    <div className="videos-detail padding-4px gap-8p flex-column positon-relative">
      <Link to={`/singleVideo/${id}`}>
        <div onClick={() => getHistoryVideo(data)}>
          <img
            className="video-img"
            src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
            alt="vido"
          />
        </div>
      </Link>
      <div className="about-video positon-relative flex justify-evenly">
        <img src={img} className="badge-img" alt="img" />

        <div className="video-detail">
          <h4>{title}</h4>
          <p>{creator}</p>
          <p>
            {views} views . <span>{release}</span>
          </p>
        </div>
      </div>
    </div>

      {/* })} */}
    </div>
  );
};
export default VideoCard;
