import { SectionCards } from "../components/SectionCards";
import { Header } from "../components/Header";
import { useEffect, useState } from "react";
import { SectionGame } from "../components/SectionGame";
import { options } from "../../../api/mmoApi";
import axios from "axios";

export const HomePage = () => {
  const [listGames, setListGames] = useState({
    isloading: true,
    games: [],
  });

  const getGames = () => {
    axios
      .request(options)
      .then(function (response) {
        setListGames({
          isloading: false,
          games: response.data,
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    getGames();
  }, []);

  return (
    <>
      <main>
        <Header />
        <section className="pb-20 bg-gray-200 -mt-24">
          <div className="container mx-auto px-4 lg:px-20">
            <SectionCards />
            <SectionGame listGames={listGames}/>
          </div>
        </section>
      </main>
    </>
  );
};
