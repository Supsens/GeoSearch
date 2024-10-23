import { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import fetchData from "./utils/fetch";
import Cards from "./components/Cards";
import React from "react";
import {Route,Routes} from 'react-router-dom'
import Single from "./components/Single";
export default function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = React.useState("");

  useEffect(() => {
    fetchData(setData);
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<>
          <SearchBar setQuery={setQuery} />
          <Cards data={data} query={query}/>
        </>}/>
          <Route path="/country/:name" element={<Single/>}/>
        <Route path="/:region" element={<>
          <SearchBar setQuery={setQuery} />
          <Cards data={data} query={query}/>
        </>}/>
      </Routes>
    </>
  );
}
