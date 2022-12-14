import React from "react";

export const LoginPage = () => {
    return (
        <React.Fragment>
            <div className="w-full max-w-md space-y-8 text-center my-3 text-3xl font-bold text-gray-700 dark:text-black-200">
                Inicio de Sesión
                <p></p>
                <div>
                    <button
                        type="submit"
                        className="group relative flex w-full justify-center rounded-md border border-transparent  py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 button"
                    >
                        <img
                            className="icon"
                            src="https://assets.stickpng.com/images/5a951939c4ffc33e8c148af2.png"
                            alt="icon"
                        />
                        Registro con Google
                    </button>
                    <button
                        type="submit"
                        className="group relative flex w-full justify-center rounded-md border border-transparent  py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 button"
                    >
                        <img
                            className="icon"
                            src="https://www.pngfind.com/pngs/m/159-1591413_facebook-logo-logos-de-marcas-facebook-iphone-app.png"
                            alt="icon"
                        />
                        Registro con Facebook
                    </button>
                </div>
                
                <div>
                    <img
                    className="mx-auto h-12 w-auto"
                    src="https://raw.githubusercontent.com/ZonaGamerSogamoso/ZonaGamerPage/main/src/assets/img/login.png"
                    alt="Your Company"
                    />
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="-space-y-px rounded-md shadow-sm">
                    <div>
                        <label htmlFor="email-address" className="sr-only">
                        Email address
                        </label>
                        <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="Correo"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="sr-only">
                        Password
                        </label>
                        <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="Contraseña"
                        />
                    </div>
                    </div>

                    <div>
                    <button
                        type="submit"
                        className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        {/* <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" /> */}
                        </span>
                        Inicio de Sesión
                    </button>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
}
  