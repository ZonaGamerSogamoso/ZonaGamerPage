import React from "react";
 // Styles
import './ProfileData.styles.css';

export const ProfileDataPage = () => {
    return (
        <React.Fragment>
            <div className="content">
                <div className="content-avatar">
                    <img
                        className='avatar'
                        src=""
                    />
                </div>
                <h3 className="leading-relaxed overflow-hidden">
                    Nombre Apellido
                </h3>
                <br/>
                <p className="leading-relaxed overflow-hidden">
                    email@gmail.com
                </p>
                <button
                        type="botton"
                        className="group relative flex w-full justify-center rounded-md border border-transparent  py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 button"
                    >
                        <img
                            className="icon"
                            src="https://w7.pngwing.com/pngs/936/371/png-transparent-button-computer-icons-button-hand-pushbutton-reboot.png"
                            alt="icon"
                        />
                        Cerrar sesión
                    </button>
            </div>
        </React.Fragment>
    )
}