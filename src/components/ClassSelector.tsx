import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import DisplayClasses from "./sections/DisplayClasses";

const ClassSelector = () => {

    const navigate = useNavigate()

    const getClassDetails = (e: any) => {
        console.log(e.target.id)
        window.localStorage.setItem("selected-class", JSON.stringify([e.target.id]))

        navigate(`/home/${e.target.id}`)
    }
    
    return ( 
        <div className="class-selector">
            <div className="selector-header">
                <h1>Pick a class</h1>
            </div>
            <div className="class-selection-grid">
                {/* <DisplayClasses getClassDetails={getClassDetails} /> */}
                <ul>
                    <li id="class-one" onClick={e => getClassDetails(e)}>
                        Oxidation
                    </li>
                    <li id="class-two" onClick={e => getClassDetails(e)}>
                        Titration
                    </li>
                    <li id="class-three" onClick={e => getClassDetails(e)}>
                        Redux Reactions
                    </li>
                    <li id="class-three" onClick={e => getClassDetails(e)}>
                        Separation Techniques
                    </li>
                    <li id="class-four" onClick={e => getClassDetails(e)}>
                        Oxidation
                    </li>
                    
                </ul>
            </div>

        </div>
     );
}
 
export default ClassSelector;