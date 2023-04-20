import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDataFromApi } from "./utils/api";
import { getApiConfiguration } from "./store/homeSlice";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details"
import SearchResult from "./pages/searchResult/SearchResult";
import Explore from "./pages/explore/Explore"; 
import PageNotFounf from "./pages/404/PageNotFound";

function App() {
  const dispatch = useDispatch();

  const { url } = useSelector((state) => state.home);
  console.log(url);

  const apiTesting = async () => {
    let data = await fetchDataFromApi("/movie/popular");
    dispatch(getApiConfiguration(data));
  };

  useEffect(() => {
    apiTesting();
  }, []);

  return <div className="App">{url?.total_pages}</div>;
}

export default App;
