export const SectionStore = () => {
    return (
        <div className="lg:pt-28 p-6 md:w-1/3 sm:w-1/2">
          <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                    src="https://raw.githubusercontent.com/ZonaGamerSogamoso/ZonaGamerPage/main/src/assets/img/Funko.png" class="max-w-full h-auto" alt="..." />
            <div className="p-6">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                Descripción
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-600 mb-3">
                Nombre
              </h1>
              <p className="leading-relaxed mb-3 h-32 overflow-hidden">
                Desc
              </p>
              <div className="flex items-center flex-wrap ">
                  Ver más
              </div>
            </div>
          </div>
        </div>
    );
};