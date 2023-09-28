import React from "react";
import { useState, useEffect,  useRef } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";


import server from "../utils";
import SectionSidePanel from "./sections/SectionSidePanel";
import ProgressChartDisplay from "./sections/ProgressChartDisplay";

function IndexPage () {
    const ref = useRef();
    const navigate = useNavigate();
    const {class_id } = useParams();
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

    // const element = ref.current;

    // const rmScrlEvnt = () => {
    //     element.removeEventListener('mousemove', handleClick);
    // }

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
        document.addEventListener("mousemove", function(e){
            const ele = document.getElementById('workspaceLesson');
            const distance = ele.offsetLeft + ele.offsetWidth - e.pageX;
            distance < 9 && distance > -0.1 ? ele.classList.add('more-width') : ele.classList.remove('more-width');
        });
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
                    <div id="workspaceLesson" className="workspace-lesson">
                        <div className="lesson-section">
                            <div className="lesson-title">
                                <h3>{classTitle}</h3>
                                <p>Parameters: {classParameters}</p>
                            </div>
                            <div className="lesson-instructor">
                                <div className="title-box">
                                    <p className="title">Instructor</p>
                                </div>
                                <div className="name">
                                    <h3>{classInstructor}</h3>
                                </div>
                            </div>
                            <div className="lesson-instruction">
                                <p className="title">Instructions</p>
                                <p dangerouslySetInnerHTML={{ __html: classInstruction }}></p>
                            </div>
                            <div className="animation-box">
                                <p>Workbench happen here</p>
                            </div>
                        </div> 
                    </div> : <ProgressChartDisplay/>
                }
            </div>
        </div>
    )
}

export default IndexPage;