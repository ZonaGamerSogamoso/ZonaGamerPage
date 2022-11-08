import { useForm } from "../../../hooks/useForm";

export const SectionReservation = () => {
  const {
    formState,
    name,
    email,
    phone,
    dateReservation,
    message,
    onInputChange,
  } = useForm({
    name: "",
    email: "",
    phone: "",
    dateReservation: "",
    message: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ ...formState });
    //Todo: envio de datos de la reservacion
  };

  return (
    <div className="flex items-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
          <div className="text-center">
            <h1 className="my-3 text-3xl font-bold text-gray-700 dark:text-black-200">
              Reservas
            </h1>
            <p className="text-black-400 dark:text-black-400">
              Puedes hacer una reserva sencilla llenando los siguientes datos
            </p>
          </div>
          <div className="m-7">
            <form id="form" onSubmit={onSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm text-gray-600 dark:text-black-400 font-bold"
                >
                  Nombre completo
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={onInputChange}
                  value={name}
                  placeholder="Nombres y Apellidos"
                  required
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm text-gray-600 dark:text-black-400 font-bold"
                >
                  Dirección de Correo
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={onInputChange}
                  value={email}
                  placeholder="you@company.com"
                  required
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="phone"
                  className="text-sm text-gray-600 dark:text-black-400 font-bold"
                >
                  Número de Telefono
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  onChange={onInputChange}
                  value={phone}
                  placeholder="3204586594"
                  required
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="dateReservation"
                  className="text-sm text-gray-600 dark:text-black-400 font-bold"
                >
                  Fecha de reserva
                </label>
                <input
                  type="date"
                  name="dateReservation"
                  id="dateReservation"
                  onChange={onInputChange}
                  value={dateReservation}
                  placeholder="3204586594"
                  required
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm text-gray-600 dark:text-black-400 font-bold"
                >
                  Mensaje adicional
                </label>

                <textarea
                  rows="5"
                  name="message"
                  id="message"
                  onChange={onInputChange}
                  value={message}
                  placeholder="Your Message"
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  required
                ></textarea>
              </div>
              <div className="mb-6">
                <button
                  type="submit"
                  className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
                >
                  Enviar
                </button>
              </div>
              <p className="text-base text-center text-gray-400" id="result"></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
