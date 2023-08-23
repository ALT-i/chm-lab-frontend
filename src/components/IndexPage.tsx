import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";


import server from "../utils";
import SectionSidePanel from "./sections/SectionSidePanel";
import ProgressChartDisplay from "./sections/ProgressChartDisplay";

function IndexPage () {

    const navigate = useNavigate();
    const { class_id } = useParams();
    const [chosenClass, setChosenClass] = useState(null);
    const [substances, setSubstances] = useState(null);
    const [tools, setTools] = useState(null);
    const [classTitle, setClassTitle] = useState(null);
    const [classInstruction, setClassInstruction] = useState(null);
    const [classInstructor, setClassInstructor] = useState(null);
    const [classParameters, setClassParameters] = useState(null);


    //Fetch class details from local machine with node process and render with IPC signals

    function getSubstance (substances: any) {
        const substanceNames: any = []; 
        for (const sub of substances){
            axios.get(`${server.absolute_url}/${server.workbench}/apparatus/${sub}/`, {
                headers: {
                    "Content-Type": "application/json",
                    // "authorization": token
                }
            }).then((res) => {
                console.log(res.data)
                substanceNames.push[res.data.name]
            }).catch(err => {
                if(err.message === "Network Error") {
                    console.log(err)
                }
            })
        }
        console.log(substanceNames)
    }

    const getWorkbench = () => {
        if(class_id) {
            setChosenClass(class_id);
            console.log(class_id)

            axios.get(`${server.absolute_url}/${server.workspace}/${class_id}/`, {
                    headers: {
                        "Content-Type": "application/json",
                        // "authorization": token
                    }
                }).then((res) => {
                    console.log(res)
                    //Save following class details to local machine with IPC signals

                    // setSubstances(res.data.substances);
                    // setApparatus(res.data.apparatus);
                    // getSubstance(res.data.substances);
                    setTools(res.data.tools);
                    setSubstances(res.data.substances);
                    setClassInstruction(res.data.instructions);
                    setClassInstructor(res.data.instructor);
                    setClassParameters(res.data.parameters);
                    setClassTitle(res.data.title);

                }).catch(err => {
                    if(err.message === "Network Error") {
                        console.log(err)
                    }
    
                })
        }
    }

    useEffect(() => {
        getWorkbench();
    }, [])

    return (
        <div className="index-page">
            {
                chosenClass?
                <SectionSidePanel substances={substances} tools={tools} classInstructor={classInstructor} /> : <SectionSidePanel />
            }
            <div className="index-page-main">
                {
                    chosenClass?  
                    <div className="workspace-lesson">
                        <div className="lesson section">
                            <div className="lesson-title">
                                <p>{classTitle}</p>
                            </div>
                            <div className="lesson-instructor">
                                <p>{classInstructor}</p>
                            </div>
                            <div className="lesson-instruction">
                                <p>{classInstruction}</p>
                            </div>
                            <div className="lesson-parameters">
                                <p>{classParameters}</p>
                            </div>
                        </div> 
                    </div> : <ProgressChartDisplay/>
                }
            </div>
        </div>
    )
}

export default IndexPage;