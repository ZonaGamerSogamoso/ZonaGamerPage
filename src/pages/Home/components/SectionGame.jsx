export const SectionGame = () => {
  return (
    <div className="flex flex-wrap items-center mt-32">
      <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
        <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
          <i className="fas fa-gamepad text-xl"></i>
        </div>
        <h3 className="text-3xl mb-2 font-semibold leading-normal">
          Gran Variedad de Videojuegos
        </h3>
        <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
          Reprehenderit commodo mollit irure cupidatat. Consectetur voluptate
          proident dolore non ipsum Lorem mollit adipisicing.
        </p>
        <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
          Reprehenderit commodo mollit irure cupidatat. Consectetur voluptate
          proident dolore non ipsum Lorem mollit adipisicing.
        </p>
      </div>

      <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-red-400">
          <img
            alt="zona-gamer"
            src="https://raw.githubusercontent.com/AstridCely/proyecto-trabajo-de-campo-frontend/main/src/assets/img/card-image.png"
            className="w-full align-middle rounded-t-lg"
          />
          <blockquote className="relative p-8 mb-4">
            <svg
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 583 95"
              className="absolute left-0 w-full block h-95-px -top-94-px"
            >
              <polygon
                points="-30,95 583,95 583,65"
                className="text-red-400 fill-current"
              ></polygon>
            </svg>
            <h4 className="text-xl font-bold text-white">
              Titulo/imagen de prueba
            </h4>
            <p className="text-md font-light mt-2 text-white">
              Reprehenderit commodo mollit irure cupidatat. Consectetur
              voluptate proident dolore non ipsum Lorem mollit adipisicing.
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  );
};
