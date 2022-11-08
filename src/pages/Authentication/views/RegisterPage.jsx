import { RegistrationPage } from "../components/Registration";
import React from "react";
 // Styles
import './AuthenticationPage.styles.css';


export const RegisterPage = () => {
    return (
      <React.Fragment>
        <div className='grid'>
            <div>
                <img
                className='grid-image'
                    src="https://raw.githubusercontent.com/ZonaGamerSogamoso/ZonaGamerPage/main/src/assets/img/login.gif"
                    alt="Your Company"
                />
            </div>
                <div className='grid-input'>
                  <RegistrationPage/>   
                </div>
        </div>
      </React.Fragment>
    );
  };