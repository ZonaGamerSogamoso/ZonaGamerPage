import { SectionCards } from "../components/SectionCards";
import { Header } from "../components/Header";
import { useEffect, useState } from "react";
import { SectionGame } from "../components/SectionGame";
import { options } from "../../../api/mmoApi";
import axios from "axios";
import SectionNews from "../components/SectionNews";

export const HomePage = () => {

  const [listGames, setListGames] = useState({
    isLoading: true,
    games: [],
  });
  const [listNews, setListNews] = useState({
    isLoading: true,
    news:[],
  })
  const [listGiveaways, setListGiveaways] = useState({
    isLoading: true,
    giveaways:[],
  })

  const getGames = () => {
    axios
      .request(options('games'))
      .then(function (response) {
        setListGames({
          isLoading: false,
          games: response.data,
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const getNews = () =>{
    axios
      .request(options('latestnews'))
      .then(function (response) {
        setListNews({
          isLoading: false,
          news: response.data,
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  const getGiveaways = () =>{
    axios
      .request(options('giveaways'))
      .then(function (response) {
        setListGiveaways({
          isLoading: false,
          giveaways: response.data,
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  useEffect(() => {
    getGames();
    getNews();
    getGiveaways();
  }, []);

  return (
    <>
      <main>
        <Header />
        <section className="pb-20 bg-gray-200 -mt-24">
          <div className="container mx-auto px-4 lg:px-20">
            <SectionCards />
            <SectionGame listGames={listGames}/>
            <SectionNews listNews={listNews} listGiveaways={listGiveaways}/>
          </div>
        </section>
      </main>
    </>
  );
};
