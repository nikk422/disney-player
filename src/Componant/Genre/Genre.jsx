import { useGenre } from "../../Context/GenreContext";
import "./genre.css";
import { useFilter } from "../../Context/Filter-context";
import { Link } from "react-router-dom";

const Genre = () => {
  const { genre } = useGenre();
  const { VideoDispatch } = useFilter();

  return (
    <main className="genre-container flex-justify-between flex-wrap gap-1r margin-1r">
    
      {genre.map((item) => (
        <section className="genre-contain flex-column align-center gap-8p padding-4px ">
          <Link to="videoListing">
            <button
              onClick={() =>
                VideoDispatch({ type: "FILTER_BY_GENRE", payload: item.genre })
              }
            >
              <img className="cateImg" src={item.catImg} alt="/" />
            </button>
          </Link>
          <h2>{item.genre}</h2>
        </section>
      ))}
    </main>
  );
};
export default Genre;
