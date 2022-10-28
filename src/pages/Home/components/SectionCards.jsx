export const SectionCards = () => {
  return (
    <div className="flex flex-wrap">
      <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
          <div className="px-4 py-5 flex-auto">
            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-500">
              <i className="fas fa-clock"></i>
            </div>
            <h6 className="text-xl font-semibold">Tiempo</h6>
            <p className="mt-2 mb-4 text-blueGray-500">
              Reprehenderit commodo mollit irure cupidatat. Consectetur
              voluptate proident dolore non ipsum Lorem mollit adipisicing.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-4/12 px-4 text-center">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
          <div className="px-4 py-5 flex-auto">
            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
              <i className="fas fa-desktop"></i>
            </div>
            <h6 className="text-xl font-semibold">Dispositivos</h6>
            <p className="mt-2 mb-4 text-blueGray-500">
              Reprehenderit commodo mollit irure cupidatat. Consectetur
              voluptate proident dolore non ipsum Lorem mollit adipisicing.
            </p>
          </div>
        </div>
      </div>

      <div className="pt-6 w-full md:w-4/12 px-4 text-center">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
          <div className="px-4 py-5 flex-auto">
            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
              <i className="fas fa-dollar-sign"></i>
            </div>
            <h6 className="text-xl font-semibold">Dinero</h6>
            <p className="mt-2 mb-4 text-blueGray-500">
              Reprehenderit commodo mollit irure cupidatat. Consectetur
              voluptate proident dolore non ipsum Lorem mollit adipisicing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
