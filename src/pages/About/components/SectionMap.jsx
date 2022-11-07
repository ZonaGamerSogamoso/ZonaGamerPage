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
            <p className="mt-2 mb-4 text-blueGray-500">Calle 3sur # 14 - 15</p>
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
      <section class="text-gray-600 w-full body-font relative">
        <div class="absolute inset-0 bg-gray-300">
          <iframe
            width="100%"
            height="100%"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            title="map"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&height=600&hl=&q=sogamoso+(uptc)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
          ></iframe>
        </div>
        <div class="container px-5 py-24 mx-auto flex">
          <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
              Contacto
            </h2>
            <p class="leading-relaxed mb-5 text-gray-600">
              Si tienes alguna duda contacta con nosotros
            </p>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Correo Electronico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="message" class="leading-7 text-sm text-gray-600">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Enviar
            </button>
          </div>
        </div>
      </section>
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
              <p className="font-bold">zonagamersogamoso@gmail.com</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
