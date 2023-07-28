import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


import SectionSidePanel from "./sections/SectionSidePanel";
import ProgressChartDisplay from "./sections/ProgressChartDisplay";

function IndexPage () {

    const { class_id } = useParams();
    const [chosenClass, setChosenClass] = useState(null);

    useEffect(() => {
        if (class_id) {
            setChosenClass(class_id);
        }
    }, []);

    return (
        <div className="index-page">
            <SectionSidePanel />
            <div className="index-page-main">
                {
                    chosenClass?  
                    <div className="class-workbench">
                        <div className="workbench">
                            <h1>You're currently in {class_id} </h1>
                        </div> 
                    </div> : <ProgressChartDisplay/>
                }
            </div>
        </div>
    )
}

export default IndexPage;