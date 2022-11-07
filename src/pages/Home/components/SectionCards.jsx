export const SectionCards = () => {
  return (
    <div className="flex flex-wrap">
      <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
          <div className="px-4 py-5 flex-auto">
            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-500">
              <i className="fas fa-clock"></i>
            </div>
            <h6 className="text-xl font-semibold">Horarios</h6>
            <p className="mt-2 mb-4 text-blueGray-500">
              Lunes a viernes: 8 a.m. a 8 p.m.
              <br />
              Sabados y domingos: 10 a.m. a 8 p.m.
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
              Procesador Intel Core i5 10400 / 6 Núcleos - 12 Hilos <br />
              <br />
              ✔️ Board Chipset B560 - ASUS / GIGABYTE / MSI
              <br />
              ✔️ 16gb en Memoria Ram DDR4 3200Mhz Blindada RGB
              <br />
              ✔️ T. Video NVIDIA GTX 1650 4GB GDDR6
              <br />
              ✔️ 240gb Disco Estado Solido
              <br />
              ✔️ Chasis Gamer AEROCOOL / THERMALTAKE / C.MASTER / GAMEMAX
              <br />
              ✔️ Fuente Real de 600W 80 Plus
              <br />
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
            <h6 className="text-xl font-semibold">Precios</h6>
            <p className="mt-2 mb-4 text-blueGray-500">
              30 minutos: 1000$ <br />1 hora: 1500$
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
