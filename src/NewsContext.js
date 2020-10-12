import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "2394aedcb50e4f378e03b445c067d34d";

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=2394aedcb50e4f378e03b445c067d34d`
      )
      .then((response) => setData(response.data))
      .catch((error) => alert('Retry...'))
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};