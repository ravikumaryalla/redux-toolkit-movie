import React, { useEffect } from "react";
import movieApi from "../../common/apis/Movieapi";

export const Home = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  console.log(apiKey);

  useEffect(() => {
    const searchKey = "pirates";

    const getData = async () => {
      try {
        const moviesdata = await movieApi.get(
          `?apikey=${import.meta.env.VITE_API_KEY}&s=${searchKey}`
        );
        console.log(`movies Data`, moviesdata);
      } catch (error) {
        console.log(`Failed to fetch data`, error);
      }
    };

    getData();

  }, []);

  return <div>Home</div>;
};
