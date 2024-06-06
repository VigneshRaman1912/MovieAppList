import './index.css';
import { AppActions } from "../../store/redux";
import { useDispatch , useSelector } from "react-redux";

const MovieGenreFilter = () => {
    const dispatch = useDispatch()
    const selectedGenreId = useSelector(
      (state) => state.appStore.selectedGenre?.payload
    );
    const Genre = [
      { id: 1, name: "All" },
      { id: 2, name: "Action" },
      { id: 3, name: "Comedy" },
      { id: 4, name: "Horror" },
      { id: 5, name: "Drama" },
      { id: 6, name: "Sci-Fi" },
    ];

    const handleFilterGenre = (id) => {
        dispatch(AppActions.selectedGenre(id))
    }
    return (
      <div className="buttonDiv">
        {Genre?.map((ele) => (
          <button
            key={ele.id}
            className={
              selectedGenreId === ele.id
                ? "buttons-Selected"
                : "buttons-notSelected"
            }
            onClick={() => handleFilterGenre(ele.id)}
          >
            {ele.name}
          </button>
        ))}
      </div>
    );
}

export default MovieGenreFilter;