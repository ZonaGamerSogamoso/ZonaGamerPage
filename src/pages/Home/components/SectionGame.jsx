import { useState } from "react";

export const SectionGame = ({ listGames }) => {
  const [pagination, setPagination] = useState(5);
  const [page, setPage] = useState(1);

  const onChangePagination = (option) => {
    if (pagination + 6 > listGames.games.length - 1 && option === "right") {
      setPagination(5);
      setPage(1);
      return;
    }

    if (pagination - 6 < 5 && option === "left") {
      setPagination(listGames.games.length - 1);
      setPage(Math.trunc(listGames.games.length / 6));
      return;
    }
    console.log(listGames.games.length);
    if (option === "right") {
      setPagination(pagination + 6);
      setPage(page + 1);
    }

    if (option === "left") {
      setPagination(pagination - 6);
      setPage(page - 1);
    }
  };

  const getGame = (id) => {
    return (
      <div className="p-4 md:w-1/3 sm:w-1/2">
        <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
            src={listGames.games[id].thumbnail}
            alt={listGames.games[id].title}
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              {listGames.games[id].genre}
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-600 mb-3">
              {listGames.games[id].title}
            </h1>
            <p className="leading-relaxed mb-3 h-32 overflow-hidden">
              {listGames.games[id].short_description}
            </p>
            <div className="flex items-center flex-wrap ">
              <button
                className="bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg"
                onClick={() => {
                  window.open(listGames.games[id].game_url, "_blank");
                }}
              >
                Ver m??s
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (listGames.isLoading) return;
  return (
    <section className="text-gray-600 body-font bg-gray-300/30">
      <div className="container px-5 py-7 mx-auto">
        <h1 className="text-[30px] lg:text-[25px] xl:text-[30px] font-bold leading-tight mt-5 text-center pb-10 sm:mt-0 underline">
          Videojuegos Disponibles
        </h1>
        <div className="flex flex-wrap -m-4">
          {getGame(pagination)}
          {getGame(pagination - 1)}
          {getGame(pagination - 2)}
          {getGame(pagination - 3)}
          {getGame(pagination - 4)}
          {getGame(pagination - 5)}
        </div>
        <div className="flex items-center justify-center my-4">
          <div className="flex justify-center items-center ">
            <div
              className="border rounded-md bg-gray-100 px-2 py-1 text-3xl leading-6 text-slate-400 transition hover:bg-gray-200 hover:text-slate-500 cursor-pointer shadow-sm"
              onClick={() => onChangePagination("left")}
            >
              &#60;
            </div>
            <div className="text-slate-500">
              {page} / {Math.trunc(listGames.games.length / 6)}
            </div>
            <div
              className="border rounded-md bg-gray-100 px-2 py-1 text-3xl leading-6 text-slate-400 transition hover:bg-gray-200 hover:text-slate-500 cursor-pointer shadow-sm"
              onClick={() => onChangePagination("right")}
            >
              &#62;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
