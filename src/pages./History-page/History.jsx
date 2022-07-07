import Sidebar from "../../Componant/SideBar/SideBar";
import "./history.css";
import Navbar from "../../Componant/Navbar/Navbar";
import { useHistory } from "../../Context/Features-page/History-context";
import VideoCard from "../../Componant/Video-Card/VideoCard";

const History = () => {
  const { historyVideos, removeHistory, clearAllHistory } = useHistory();
  return (
    <main>
      <Navbar />
      <section className="history-container gap-5p">
        <div>
          <Sidebar />
        </div>
        <section>
          {historyVideos.length !== 0 ? (
            <div>
              <section className="clearBtn-history flex-justify-between font-16p margin-2r">
                <h3 className="history-heading">Watch history</h3>
                <button
                  className="clearBtn font-16p padding-2px"
                  onClick={() => clearAllHistory()}
                >
                  Clear all history
                </button>
              </section>
              <section className="history-video-contain gap-8p margin-top-32p">
                {historyVideos.map((historyVideo) => (
                  <div className="positon-relative">
                    <VideoCard data={historyVideo} />
                    <i
                      onClick={() => removeHistory(historyVideo.id)}
                      className="fas fa-trash solid trash-icon-play font-18p"
                    ></i>
                  </div>
                ))}
              </section>
            </div>
          ) : (
            <h2 className="history-heading text-align margin-top-16p">
              {" "}
              History is Empty
            </h2>
          )}
        </section>
      </section>
    </main>
  );
};
export default History;
