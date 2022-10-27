import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

const RQSuperHeroesPage = () => {
  const { isLoading: isRQHeroesDataLoading, data: rqHeroesData } = useQuery(
    "get-rq-super-heroes",
    () => {
      return axios("http://localhost:4000/superheroes");
    }
  );

  if (isRQHeroesDataLoading) {
    return <>Loading...</>;
  }

  return (
    <>
      <h2>RQ Super Heroes </h2>
      {rqHeroesData?.data.map((hero) => (
        <div>
          <h3>{hero.name}</h3>
        </div>
      ))}
    </>
  );
};

export default RQSuperHeroesPage;
