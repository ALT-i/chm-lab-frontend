import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import DisplayClasses from "./sections/DisplayClasses";

const ClassSelector = () => {

    const navigate = useNavigate()

    const getClassDetails = (e: any) => {
        console.log(e.target.id)
        window.localStorage.setItem("oldlevels", JSON.stringify([e.target.id]))

        navigate('/home')
    }
    
    return ( 
        <div className="class-selector">
            <div className="selector-header">
                <h1>Pick a class</h1>
            </div>
            <div className="class-selection-grid">
                <DisplayClasses getClassDetails={getClassDetails} />
            </div>
        </div>
     );
}
 
export default ClassSelector;