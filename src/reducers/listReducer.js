import { FAV_ADD, FAV_DELETE } from "../actions/action";

const initialFavMovies = {
  favMovies: JSON.parse(localStorage.getItem("favMovies")) || [],
};

export function reducer(state = initialFavMovies, action) {
  switch (action.type) {
    case FAV_ADD: {
      return {
        ...state,
        favMovies: [...state.favMovies, action.payload],
      };
    }
    case FAV_DELETE: {
      return {
        ...state,
        favMovies: state.favMovies.filter((item) => item.id !== action.payload),
      };
    }
    default:
      return state;
  }
}
