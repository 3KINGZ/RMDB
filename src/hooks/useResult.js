import { useReducer, useEffect } from "react";
import _axios from "../api/_axios";

const initialState = {
  loading: false,
  data: [],
  filteredData: [],
  error: "",
  pages: 0,
  page: 1,
  loadMore: false,
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_ALL_REQUEST":
    case "SEARCH_REQUEST":
      return { ...state, loading: true, error: "" };
    case "GET_ALL_SUCCESS":
      return {
        ...state,
        loading: false,
        data: [...state.data, ...payload.results],
        filteredData: [],
        pages: payload?.info?.pages,
        error: "",
      };
    case "SEARCH_SUCCESS":
      return {
        ...state,
        loading: false,
        filteredData: payload,
        data: [],
        error: "",
      };
    case "GET_ALL_FAILURE":
    case "SEARCH_FAILURE":
      return { ...state, loading: false, error: payload };
    case "LOAD_MORE":
      return { ...state, loadMore: true, page: state.page + 1 };
    default:
      return state;
  }
};

export default useResult = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => getAllCharacters(state.page), [state.page]);

  const getAllCharacters = (page = 1) => {
    dispatch({ type: "GET_ALL_REQUEST" });
    _axios
      .get(`/character/?page=${page}`)
      .then((response) => {
        dispatch({ type: "GET_ALL_SUCCESS", payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: "GET_ALL_FAILURE", payload: err });
      });
  };

  const searchCharacters = (name) => {
    dispatch({ type: "SEARCH_REQUEST" });
    _axios
      .get(`/character/?name=${name}`)
      .then((response) => {
        dispatch({ type: "SEARCH_SUCCESS", payload: response.data.results });
      })
      .catch((err) => {
        dispatch({ type: "SEARCH_FAILURE", payload: "No Character Found" });
      });
  };

  const loadMore = () => {
    if (state.pages > 1 && state.pages !== state.page && !state.loading)
      dispatch({ type: "LOAD_MORE" });
  };

  return [state, getAllCharacters, searchCharacters, loadMore];
};
