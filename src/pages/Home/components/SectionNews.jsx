import { useState } from "react";

const SectionNews = ({ listNews }) => {
  const [pagination, setPagination] = useState(5);
  const [page, setPage] = useState(1);

  if (listNews.isLoading) return;

  console.log(listNews);

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

  const getNew = (id) => {
    return (
      <div class="p-4 md:w-1/3">
        <div class="h-full rounded-xl shadow-cla-violate bg-gradient-to-r from-pink-50 to-red-50 overflow-hidden">
          <img
            class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
            src={listNews.news[id].main_image}
            alt={listNews.news[id].title}
          />
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-2">
              <span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                Noticia
              </span>
            </h2>
            <h1 class="title-font text-lg font-medium text-gray-600 mb-3">
              {listNews.news[id].title}
            </h1>
            <p class="leading-relaxed mb-3 h-32 overflow-hidden">
              {listNews.news[id].short_description}
            </p>
            <div class="flex items-center flex-wrap ">
              <button
                class="bg-gradient-to-r from-orange-300 to-amber-400 hover:scale-105 drop-shadow-md shadow-cla-violate px-4 py-1 rounded-lg"
                onClick={() => {
                  window.open(listNews.news[id].article_url, "_blank");
                }}
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div class="flex mb-4">
      <div class="w-3/4 bg-gray-300 flex flex-wrap text-gray-600">
        <h1 class="text-[30px] lg:text-[25px] xl:text-[30px] font-bold leading-tight mt-5 text-center py-5 sm:mt-0 underline w-full">
          Noticias
        </h1>
        {getNew(pagination)}
        {getNew(pagination - 1)}
        {getNew(pagination - 2)}
        {getNew(pagination - 3)}
        {getNew(pagination - 4)}
        {getNew(pagination - 5)}
        <div class="flex items-center justify-center my-4 w-full">
          <div class="flex justify-center items-center ">
            <div
              class="border rounded-md bg-gray-100 px-2 py-1 text-3xl leading-6 text-slate-400 transition hover:bg-gray-200 hover:text-slate-500 cursor-pointer shadow-sm"
              onClick={() => onChangePagination("left")}
            >
              &#60;
            </div>
            <div class="text-slate-500">
              {page} / {Math.trunc(listNews.news.length / 6)}
            </div>
            <div
              class="border rounded-md bg-gray-100 px-2 py-1 text-3xl leading-6 text-slate-400 transition hover:bg-gray-200 hover:text-slate-500 cursor-pointer shadow-sm"
              onClick={() => onChangePagination("right")}
            >
              &#62;
            </div>
          </div>
        </div>
      </div>
      <div class="w-1/4 bg-gray-400/10">
        <div class="p-1 md:w-full h-1/3">
          <div class="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
            <img
              class="lg:h-40 md:h-30 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
              src="https://images.unsplash.com/photo-1624628639856-100bf817fd35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8M2QlMjBpbWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
              alt="hola"
            />
            <div class="p-6">
              <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                genre
              </h2>
              <h1 class="title-font text-lg font-medium text-gray-600 mb-3">
                title
              </h1>
              <p class="leading-relaxed mb-3 h-28 overflow-hidden">
                description
              </p>
            </div>
          </div>
        </div>
        <div class="p-1 md:w-full h-1/3">
          <div class="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
            <img
              class="lg:h-40 md:h-30 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
              src="https://images.unsplash.com/photo-1624628639856-100bf817fd35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8M2QlMjBpbWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
              alt="hola"
            />
            <div class="p-6">
              <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                genre
              </h2>
              <h1 class="title-font text-lg font-medium text-gray-600 mb-3">
                title
              </h1>
              <p class="leading-relaxed mb-3 h-28 overflow-hidden">
                description
              </p>
            </div>
          </div>
        </div>
        <div class="p-1 md:w-full h-1/3">
          <div class="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
            <img
              class="lg:h-40 md:h-30 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
              src="https://images.unsplash.com/photo-1624628639856-100bf817fd35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8M2QlMjBpbWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
              alt="hola"
            />
            <div class="p-6">
              <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                genre
              </h2>
              <h1 class="title-font text-lg font-medium text-gray-600 mb-3">
                title
              </h1>
              <p class="leading-relaxed mb-3 h-28 overflow-hidden">
                description
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionNews;
