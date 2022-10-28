export const Header = () => {
  return (
    <div className="relative pt-40 pb-40 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://raw.githubusercontent.com/AstridCely/proyecto-trabajo-de-campo-frontend/main/src/assets/img/header-zona-gamer.png')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-60 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Zona Gamer
                  </h1>
                  <p className="mt-4 text-lg text-gray-200">
                    Tempor ut sit minim irure nulla. Anim occaecat id
                    reprehenderit voluptate ut ut nisi nulla cillum ut aliqua
                    mollit. Reprehenderit commodo mollit irure cupidatat.
                    Consectetur voluptate proident dolore non ipsum Lorem mollit
                    adipisicing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}
