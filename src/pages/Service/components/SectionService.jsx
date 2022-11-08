import { NavLink } from "react-router-dom";

export const SectionService = () => {
    return (
      <div className="flex flex-wrap">
        <div className="lg:pt-24 pt-6 w-full md:w-4/12 px-4 text-center">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
            <div className="px-4 py-5 flex-auto">
              <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-teal-400">
                <i className="fas fa-computer"></i>
              </div>
              <h6 className="text-xl font-semibold">Computadores</h6>
              <p className="mt-2 mb-4 text-blueGray-500">
              Contamos con computadores con los mejores componentes en cuanto a gráficos 
              y velocidad, donde se puede disfrutar de la gran mayoría de videojuegos
              </p>
            </div>
          </div>
        </div>
  
        <div className="pt-12 w-full md:w-4/12 px-4 text-center">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
            <div className="px-4 py-5 flex-auto">
              <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-indigo-400">
                <i className="fas fa-at"></i>
              </div>
              <h6 className="text-xl font-semibold">Internet</h6>
              <p className="mt-2 mb-4 text-blueGray-500">
                Internet de alta velocidad para el disfrute máximo de videojuegos, incluso 
                para búsquedas en internet y cualquier consulta que el cliente requiera
              </p>
            </div>
          </div>
        </div>
  
        <div className="pt-24 w-full md:w-4/12 px-4 text-center">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
            <div className="px-4 py-5 flex-auto">
              <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-violet-500">
                <i className="fas fa-print"></i>
              </div>
              <h6 className="text-xl font-semibold">Impresiones</h6>
              <p className="mt-2 mb-4 text-blueGray-500">
                Servicio de impresión y escáner, ya sea para tú trabajo de la escuela o tú
                trabajo de la universidad, impresiones con gran calidad
              </p>
            </div>
          </div>
        </div>

        <div className="lg:pt-12 w-full md:w-4/12 px-4 text-center">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
            <div className="px-4 py-5 flex-auto">
              <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-slate-400">
                <i className="fas fa-newspaper"></i>
              </div>
              <NavLink to="/">
              <h6 className="text-xl font-semibold">Noticias</h6>
              </NavLink>
              <p className="mt-2 mb-4 text-blueGray-500">
                Estamos actualizados a las últimas novedades, avances tecnológicos y grandes
                noticias que suceden a diario en el mundo de videojuegos y streaming
              </p>
            </div>
          </div>
        </div>

        <div className="lg:pt-24 w-full md:w-4/12 px-4 text-center">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
            <div className="px-4 py-5 flex-auto">
              <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-gray-500">
                <i className="fas fa-gift"></i>
              </div>
              <NavLink to="/store">
              <h6 className="text-xl font-semibold">Tienda de regalos</h6>
              </NavLink>
              <p className="mt-2 mb-4 text-blueGray-500">
                En nuestra tienda de regalos podrás encontrar desde detalles hasta artículos
                coleccionables de gran calidad
              </p>
            </div>
          </div>
        </div>

        <div className="lg:pt-12 w-full md:w-4/12 px-4 text-center">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
            <div className="px-4 py-5 flex-auto">
              <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-stone-600">
                <i className="fas fa-calendar-days"></i>
              </div>
              <NavLink to="/reservation">
              <h6 className="text-xl font-semibold">Reservas</h6>
              </NavLink>
              <p className="mt-2 mb-4 text-blueGray-500">
                Sistema de reservas donde puedes escoger la fecha y hora de tu preferencia
                para poder acceder a todos nuestros servicios
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };