export const SectionMap = () => {
    return (
      <div className="flex flex-wrap">
        <div className="lg:pt-24 pt-6 w-full md:w-4/12 px-4 text-center">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
            <div className="px-4 py-5 flex-auto">
              <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-cyan-500">
                <i className="fas fa-map"></i>
              </div>
              <h6 className="text-xl font-semibold">Ubicación</h6>
              <p className="mt-2 mb-4 text-blueGray-500">
                Nos encuentras ubicados en la esquina de la UPTC - Sogamoso
              </p>
            </div>
          </div>
        </div>
  
        <div className="pt-12 w-full md:w-4/12 px-4 text-center">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
            <div className="px-4 py-5 flex-auto">
              <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lime-600">
                <i className="fas fa-map-pin"></i>
              </div>
              <h6 className="text-xl font-semibold">Dirección</h6>
              <p className="mt-2 mb-4 text-blueGray-500">
                Calle 3sur # 14 - 15
              </p>
            </div>
          </div>
        </div>
  
        <div className="pt-24 w-full md:w-4/12 px-4 text-center">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
            <div className="px-4 py-5 flex-auto">
              <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-700">
                <i className="fas fa-clock"></i>
              </div>
              <h6 className="text-xl font-semibold">Horarios</h6>
              <p className="mt-2 mb-4 text-blueGray-500">
                Lunes a viernes: 8 a.m. a 8 p.m.
                <p></p>
                Sabados y domingos: 10 a.m. a 8 p.m.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:pt-12 w-full md:w-12/6 px-4 text-center">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
            <div className="px-4 py-5 flex-auto">
              <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-orange-400">
                <i className="fas fa-globe-americas"></i>
              </div>
              <h6 className="text-xl font-semibold">Contacto y Ubicación</h6>
              <p className="mt-2 mb-4 text-blueGray-500">
                Tambien nos puedes encontrar en el siguiente correo:
                <p></p>
                <p className="font-bold">
                    zonagamersogamoso@gmail.com
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };