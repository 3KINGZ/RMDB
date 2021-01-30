import { useReducer, useEffect } from "react";
import _axios from "../api/_axios";

const initialState = {
  loading: false,
  data: {},
  error: "",
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_REQUEST":
    case "SEARCH_REQUEST":
      return { ...state, loading: true, error: "" };
    case "GET_SUCCESS":
    case "SEARCH_SUCCESS":
      return { ...state, loading: false, data: payload, error: "" };
    case "GET_FAILURE":
    case "SEARCH_FAILURE":
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};

export default useResult = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => getCharacters(), []);

  const getCharacters = () => {
    dispatch({ type: "GET_REQUEST" });
    _axios
      .get("/character")
      .then((response) => {
        dispatch({ type: "GET_SUCCESS", payload: response.data.results });
      })
      .catch((err) => {
        dispatch({ type: "GET_FAILURE", payload: err });
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

  return [state, getCharacters, searchCharacters];
};
