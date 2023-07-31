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
    const [apparatus, setApparatus] = useState(null);
    const [classTitle, setClassTitle] = useState(null);
    const [classInstruction, setClassInstruction] = useState(null);
    const [classInstructor, setClassInstructor] = useState(null);
    const [classParameters, setClassParameters] = useState(null);



    const getWorkbench = () => {
        if(class_id) {
            setChosenClass(class_id);
            //Fetch class details from local machine with node process and render with IPC signals

            let token
            const tokenData = JSON.parse(window.localStorage.getItem("tokens"))
            if (!tokenData) {
                navigate('/auth');
            }else{
                token = `Bearer ` + tokenData.access
            }

            axios.get(`${server.absolute_url}/${server.workspace}`, {
                    headers: {
                        "Content-Type": "application/json",
                        "authorization": token
                    }
                }).then((res) => {
                    //Save following class details to local machine with IPC signals

                    setSubstances(res.data.results.substances);
                    setApparatus(res.data.results.apparatus);
                    setClassInstruction(res.data.results.instruction);
                    setClassInstructor(res.data.results.instructor);
                    setClassParameters(res.data.results.parameters);
                    setClassTitle(res.data.results.title);

    
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
                <SectionSidePanel substances={substances} apparatus={apparatus} classInstructor={classInstructor} /> : <SectionSidePanel />
            }
            <div className="index-page-main">
                {
                    chosenClass?  
                    <div className="workspace-lesson">
                        <div className="lesson section">
                            <div className="lesson-title">{classTitle}</div>
                            <div className="lesson-instructor">{classInstructor}</div>
                            <div className="lesson-instruction">{classInstruction}</div>
                            <div className="lesson-parameters">{classParameters}</div>
                        </div> 
                    </div> : <ProgressChartDisplay/>
                }
            </div>
        </div>
    )
}

export default IndexPage;