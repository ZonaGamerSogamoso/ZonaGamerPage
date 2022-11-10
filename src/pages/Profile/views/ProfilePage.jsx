import { ProfileDataPage } from "../components/ProfileData";
import React from "react";
 // Styles
import './ProfilePage.styles.css';

export const ProfilePage = () => {
    return (
        <React.Fragment>
            <div className="grid">
                <div>
                    <img
                        className='grid-image'
                        src="https://raw.githubusercontent.com/ZonaGamerSogamoso/ZonaGamerPage/main/src/assets/img/login.gif"
                        alt="Your Company"
                    />
                </div>
                <div className="grid-data">
                    <ProfileDataPage/>
                </div>
            </div>
        </React.Fragment>
    )
}