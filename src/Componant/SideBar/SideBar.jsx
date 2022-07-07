import "./sidebar.css";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaCompass,
  FaFolder,
  FaFilm,
  FaHeart,
  FaHistory,
} from "react-icons/fa";

const Sidebar = () => {
  const sidebarPages = [
    {
      page: "Home",
      icon: <FaHome />,
      link: "/",
    },
    {
      page: "Explore",
      icon: <FaCompass />,
      link: "/videoListing",
    },
    {
      page: "Playlist",
      icon: <FaFolder />,
      link: "/playlist",
    },
    {
      page: "Watch later",
      icon: <FaFilm />,
      link: "/watchLater",
    },
    {
      page: "Liked videos",
      icon: <FaHeart />,
      link: "/likes",
    },
    {
      page: "History",
      icon: <FaHistory />,
      link: "/history",
    },
  ];
  return (
    <div className="sidebar-container flex padding-22px position-sticky-6r z-index-1">
      <aside className="lib-sidebar font-18p">
        <ul className="icon-list">
          {sidebarPages.map(({ page, icon, link }) => (
            <Link to={`${link}`}>
              <li className="hoverText">
                <i className="sidebar-icon">{icon}</i>
                <span>{page}</span>
              </li>
            </Link>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
