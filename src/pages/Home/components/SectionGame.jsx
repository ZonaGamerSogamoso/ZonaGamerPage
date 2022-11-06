import { useState } from "react";

export const SectionGame = ({ listGames }) => {
  const [pagination, setPagination] = useState(5);

  const onChangePagination = (option) => {
    if (pagination + 6 > listGames.games.length && option === "right") {
      setPagination(5);
      return;
    }

    if (pagination - 6 < 5 && option === "left") {
      setPagination(listGames.games.length - 1);
      return;
    }
    console.log(listGames.games.length);
    if (option === "right") {
      setPagination(pagination + 6);
    }

    if (option === "left") {
      setPagination(pagination - 6);
    }
  };

  if (listGames.isloading) return;
  console.log(listGames.games);
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-15 mx-auto">
        <h1 class="text-[30px] lg:text-[25px] xl:text-[30px] font-bold leading-tight mt-5 text-center pb-10 sm:mt-0 underline">
          Videojuegos
        </h1>
        <div class="flex flex-wrap -m-4">
          <div class="p-4 md:w-1/3">
            <div class="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
              <img
                class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                src={listGames.games[pagination].thumbnail}
                alt={listGames.games[pagination].title}
              />
              <div class="p-6">
                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  {listGames.games[pagination].genre}
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-600 mb-3">
                  {listGames.games[pagination].title}
                </h1>
                <p class="leading-relaxed mb-3 h-32 overflow-hidden">
                  {listGames.games[pagination].short_description}
                </p>
                <div class="flex items-center flex-wrap ">
                  <button class="bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="p-4 md:w-1/3">
            <div class="h-full rounded-xl shadow-cla-violate bg-gradient-to-r from-pink-50 to-red-50 overflow-hidden">
              <img
                class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                src={listGames.games[pagination - 1].thumbnail}
                alt={listGames.games[pagination - 1].title}
              />
              <div class="p-6">
                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  {listGames.games[pagination - 1].genre}
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-600 mb-3">
                  {listGames.games[pagination - 1].title}
                </h1>
                <p class="leading-relaxed mb-3 h-32 overflow-hidden">
                  {listGames.games[pagination - 1].short_description}
                </p>
                <div class="flex items-center flex-wrap ">
                  <button class="bg-gradient-to-r from-orange-300 to-amber-400 hover:scale-105 drop-shadow-md shadow-cla-violate px-4 py-1 rounded-lg">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="p-4 md:w-1/3">
            <div class="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
              <img
                class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                src={listGames.games[pagination - 2].thumbnail}
                alt={listGames.games[pagination - 2].title}
              />
              <div class="p-6">
                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  {listGames.games[pagination - 2].genre}
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-600 mb-3">
                  {listGames.games[pagination - 2].title}
                </h1>
                <p class="leading-relaxed mb-3 h-32 overflow-hidden">
                  {listGames.games[pagination - 2].short_description}
                </p>
                <div class="flex items-center flex-wrap ">
                  <button class="bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="p-4 md:w-1/3">
            <div class="h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
              <img
                class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                src={listGames.games[pagination - 3].thumbnail}
                alt={listGames.games[pagination - 3].title}
              />
              <div class="p-6">
                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  {listGames.games[pagination - 3].genre}
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-600 mb-3">
                  {listGames.games[pagination - 3].title}
                </h1>
                <p class="leading-relaxed mb-3 h-32 overflow-hidden">
                  {listGames.games[pagination - 3].short_description}
                </p>
                <div class="flex items-center flex-wrap ">
                  <button class="bg-gradient-to-r from-fuchsia-300 to-pink-400 hover:scale-105  shadow-cla-blue px-4 py-1 rounded-lg">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="p-4 md:w-1/3">
            <div class="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
              <img
                class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                src={listGames.games[pagination - 4].thumbnail}
                alt={listGames.games[pagination - 4].title}
              />
              <div class="p-6">
                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  {listGames.games[pagination - 4].genre}
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-600 mb-3">
                  {listGames.games[pagination - 4].title}
                </h1>
                <p class="leading-relaxed mb-3 h-32 overflow-hidden">
                  {listGames.games[pagination - 4].short_description}
                </p>
                <div class="flex items-center flex-wrap ">
                  <button class="bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="p-4 md:w-1/3">
            <div class="h-full rounded-xl shadow-cla-violate bg-gradient-to-r from-pink-50 to-red-50 overflow-hidden">
              <img
                class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                src={listGames.games[pagination - 5].thumbnail}
                alt={listGames.games[pagination - 5].title}
              />
              <div class="p-6">
                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  {listGames.games[pagination - 5].genre}
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-600 mb-3">
                  {listGames.games[pagination - 5].title}
                </h1>
                <p class="leading-relaxed mb-3 h-32 overflow-hidden">
                  {listGames.games[pagination - 5].short_description}
                </p>
                <div class="flex items-center flex-wrap ">
                  <button class="bg-gradient-to-r from-orange-300 to-amber-400 hover:scale-105 drop-shadow-md shadow-cla-violate px-4 py-1 rounded-lg">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            class="button w-16 h-16 bg-blue-500 rounded-full cursor-pointer select-none
            active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
            active:border-b-[0px]
            transition-all duration-150 [box-shadow:0_8px_0_0_#1b6ff8,0_13px_0_0_#1b70f841]
            border-[1px] border-blue-400
             "
          >
            <span
              class="flex flex-col justify-center items-center h-full text-white font-bold text-lg"
              onClick={() => onChangePagination("left")}
            >
              &#60;
            </span>
          </div>
          <div
            class="button w-16 h-16 bg-blue-500 rounded-full cursor-pointer select-none
            active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
            active:border-b-[0px]
            transition-all duration-150 [box-shadow:0_8px_0_0_#1b6ff8,0_13px_0_0_#1b70f841]
            border-[1px] border-blue-400
            "
          >
            <span
              class="flex flex-col justify-center items-center h-full text-white font-bold text-lg"
              onClick={() => onChangePagination("right")}
            >
              &#62;
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
