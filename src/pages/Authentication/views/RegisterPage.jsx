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
                    src="https://i.pinimg.com/564x/2e/a2/15/2ea2156ee2ce4989ea602d820db10fae.jpg"
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