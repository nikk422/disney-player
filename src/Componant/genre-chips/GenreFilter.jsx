import "./genreFilter.css";
import { useFilter } from "../../Context/Filter-context";

const GenreFilter = () => {
  const { VideoDispatch } = useFilter();

  const filters = ["ALL", "LOFI", "ROMANTIC", "SAD", "EVERGREEN", "POP"];
  return (
    <div className="genreChips-container position-sticky-6r padding-4px z-index-1">
      <ul className="genre-list flex">
        {filters.map((item) => (
          <div>
            <button
              className="genre-btn padding-8p margin-8p"
              onClick={() =>
                VideoDispatch({ type: "FILTER_BY_GENRE", payload: item })
              }
            >
              {item}
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default GenreFilter;
