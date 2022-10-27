import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => {
  return axios("http://localhost:4000/superheroes");
};

const SuperHeroesIIIPage = () => {
  const {
    data: superHeroesIIIArr,
    isLoading,
    isError,
    error,
  } = useQuery("super-heroes-iii", fetchSuperHeroes, {
    select: (heroes) => {
      return heroes?.data.map(({ name }) => name);
    },
  });

  if (isLoading) {
    return <>Loading...</>;
  }

  if (isError) {
    return <>{error.message}</>;
  }

  return (
    <>
      <h3>Hello from SuperHeroes 3 Page</h3>
      {superHeroesIIIArr?.map((heroName) => (
        <div>{heroName}</div>
      ))}
    </>
  );
};

export default SuperHeroesIIIPage;
