import { LoginPage } from "../components/Login";
import React from "react";
 // Styles
import './AuthenticationPage.styles.css';

export const AuthenticationPage = () => {
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
                  <LoginPage/>   
                </div>
        </div>
      </React.Fragment>
    );
  };