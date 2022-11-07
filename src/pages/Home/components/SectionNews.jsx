import { useState } from "react";

const SectionNews = ({ listNews, listGiveaways }) => {
  const [pagination, setPagination] = useState(5);
  const [page, setPage] = useState(1);

  if (listNews.isLoading) return;
  if (listGiveaways.isLoading) return;

  const onChangePagination = (option) => {
    if (pagination + 6 > listNews.news.length - 1 && option === "right") {
      setPagination(5);
      setPage(1);
      return;
    }

    if (pagination - 6 < 5 && option === "left") {
      setPagination(listNews.news.length - 1);
      setPage(Math.trunc(listNews.news.length / 6));
      return;
    }
    console.log(listNews.news.length);
    if (option === "right") {
      setPagination(pagination + 6);
      setPage(page + 1);
    }

    if (option === "left") {
      setPagination(pagination - 6);
      setPage(page - 1);
    }
  };


  const getGiveaway = (id) => {
    return (
      <div className="p-1 md:w-full h-1/3">
        <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
          <img
            className="lg:h-30 md:h-30 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-105 cursor-pointer"
            onClick={() => {
                window.open(listGiveaways.giveaways[id].giveaway_url, "_blank");
              }}
            src={listGiveaways.giveaways[id].main_image}
            alt={listGiveaways.giveaways[id].title}
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              <span className="bg-purple-100 text-purple-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900">
                Regalo
              </span>
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-600 mb-3">
              {listGiveaways.giveaways[id].title}
            </h1>
            <p className="leading-relaxed mb-3 h-28 overflow-hidden">
              {listGiveaways.giveaways[id].short_description}
            </p>
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            {listGiveaways.giveaways[id].keys_left}
            </h2>
          </div>
        </div>
      </div>
    );
  };

  const getNew = (id) => {
    return (
      <div className="p-4 md:w-1/3">
        <div className="h-full rounded-xl shadow-cla-violate bg-gradient-to-r from-pink-50 to-red-50 overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
            src={listNews.news[id].main_image}
            alt={listNews.news[id].title}
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-2">
              <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                Noticia
              </span>
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-600 mb-3">
              {listNews.news[id].title}
            </h1>
            <p className="leading-relaxed mb-3 h-32 overflow-hidden">
              {listNews.news[id].short_description}
            </p>
            <div className="flex items-center flex-wrap ">
              <button
                className="bg-gradient-to-r from-orange-300 to-amber-400 hover:scale-105 drop-shadow-md shadow-cla-violate px-4 py-1 rounded-lg"
                onClick={() => {
                  window.open(listNews.news[id].article_url, "_blank");
                }}
              >
                Ver mas
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex mb-4">
      <div className="w-3/4 bg-gray-300 flex flex-wrap text-gray-600">
        <h1 className="text-[30px] lg:text-[25px] xl:text-[30px] font-bold leading-tight mt-15 text-center py-5 sm:mt-0 underline w-full">
          Noticias
        </h1>
        {getNew(pagination)}
        {getNew(pagination - 1)}
        {getNew(pagination - 2)}
        {getNew(pagination - 3)}
        {getNew(pagination - 4)}
        {getNew(pagination - 5)}
        <div className="flex items-center justify-center my-4 w-full">
          <div className="flex justify-center items-center ">
            <div
              className="border rounded-md bg-gray-100 px-2 py-1 text-3xl leading-6 text-slate-400 transition hover:bg-gray-200 hover:text-slate-500 cursor-pointer shadow-sm"
              onClick={() => onChangePagination("left")}
            >
              &#60;
            </div>
            <div className="text-slate-500">
              {page} / {Math.trunc(listNews.news.length / 6)}
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
      <div className="w-1/4 bg-gray-400/10">
        {getGiveaway(0)}
        {getGiveaway(1)}
        {getGiveaway(2)}
      </div>
    </div>
  );
};

export default SectionNews;
