// SuperHeroesPage
import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => {
  return axios("http://localhost:4000/superheroes");
};

const SuperHeroesPage = () => {

  const onSuccess = (data) => {
    console.log("Perform side effect after fetching data", data);
  };
  const onError = (error) => {
    console.log("Perform side effect after encountering an error", error);
  };

  const {
    isLoading: isHeroesDataLoading,
    isFetching: isHeroesDataFetching,
    data: heroesData,
    isError: heroesErrorStatus,
    error: heroesError,
    refetch,
  } = useQuery("get-rq-super-heroes", fetchSuperHeroes, {
    enabled: false,
    onSuccess,
    onError,
  });

  if (isHeroesDataLoading || isHeroesDataFetching) {
    return <>Loading...</>;
  }
  if (heroesErrorStatus) {
    return <>{heroesError.message}</>;
  }
  return (
    <>
      <h3>Super Heroes Page</h3>
      <button onClick={refetch}>Fetch heroes List</button>
      {heroesData?.data.map((hero) => (
        <div key={hero.name}>{hero.name}</div>
      ))}
    </>
  );
};

export default SuperHeroesPage;
