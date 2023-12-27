import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


import LandingPage from "../components/LandingPage";

function HomeView () {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => navigate('/auth'), 3000)
    }, [])

    return ( 
        <div className="display-home-view">
            <LandingPage />
        </div>
     );
}
 
export default HomeView;