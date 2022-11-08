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
                    src="https://i.pinimg.com/564x/2e/a2/15/2ea2156ee2ce4989ea602d820db10fae.jpg"
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