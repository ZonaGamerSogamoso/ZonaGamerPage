export const SectionReservation = () => {
  return (
    <div class="flex items-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto">
        <div class="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
          <div class="text-center">
            <h1 class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
              Reservaciones
            </h1>
            <p class="text-gray-400 dark:text-gray-400">
              Puedes hacer una reserva sencilla llenando los siguientes datos
            </p>
          </div>
          <div class="m-7">
            <form
              method="POST"
              id="form"
            >
              <div class="mb-6">
                <label
                  for="name"
                  class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  Nombre completo
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Nombres y/o Apellidos"
                  required
                  class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>
              <div class="mb-6">
                <label
                  for="email"
                  class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  Direccion de Correo
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="you@company.com"
                  required
                  class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>
              <div class="mb-6">
                <label
                  for="phone"
                  class="text-sm text-gray-600 dark:text-gray-400"
                >
                  Numero de Telefono
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="3204586594"
                  required
                  class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>
              <div class="mb-6">
                <label
                  for="dateReservation"
                  class="text-sm text-gray-600 dark:text-gray-400"
                >
                  Fecha de reserva
                </label>
                <input
                  type="date"
                  name="dateReservation"
                  id="dateReservation"
                  placeholder="3204586594"
                  required
                  class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>
              <div class="mb-6">
                <label
                  for="message"
                  class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  Mensaje adicional
                </label>

                <textarea
                  rows="5"
                  name="message"
                  id="message"
                  placeholder="Your Message"
                  class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  required
                ></textarea>
              </div>
              <div class="mb-6">
                <button
                  type="submit"
                  class="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
                >
                  Send Message
                </button>
              </div>
              <p class="text-base text-center text-gray-400" id="result"></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
