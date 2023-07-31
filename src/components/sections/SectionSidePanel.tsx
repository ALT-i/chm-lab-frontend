import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import server from "../../utils";

function SectionSidePanel (props: any) {

    const navigate = useNavigate();
    const userData = JSON.parse(window.localStorage.getItem("user_data"))
    const user_fname = userData.first_name;
    // const user_dp = JSON.parse(window.localStorage.getItem("dp"))  //Maybe get dp from local machine


    const substances = props.substances;
    const apparatus = props.apparatus;
    const classInstructor = props.classInstructor;

    

    function goToLogin () {
        window.localStorage.removeItem("user_data")
        window.localStorage.removeItem("auth_tokens")
        navigate(`/auth`)
    }

    function goToClassList () {
        navigate(`/select-class`)
    }

    return (
        <section className="left-side-panel">
            <div className="panel">
                <div className="basic-profile">
                    <div className="user-name">
                        <p>{user_fname}</p>
                    </div>
                    <div className="user-picture">
                        <div className="picture"></div>
                    </div>
                </div>
                <div className="continue-class">
                    <div className="continue-button">
                        <p>Continue class</p>
                        <span className="material-symbols-outlined">
                            patient_list
                        </span>
                    </div>
                </div>
                {/* <div className="workspace-workbench-compartment">
                    <div className="workbench">
                        <div className="instructor">
                            <p>{classInstructor}</p>
                        </div>
                        <div className="workbench-apparatus">
                            <div className="apparatus-section">{apparatus}</div>
                        </div>
                        <div className="workbench-substances">
                            <div className="substance-section">{substances}</div>
                        </div>
                    </div>
                </div> */}
                <div className="profile-options">
                    <div className="profile-option">
                        <div className="option" onClick={goToClassList}>
                            <p>Class list</p>
                            <span className="material-symbols-outlined data_info_alert">
                                data_info_alert
                            </span>
                        </div>
                    </div>
                    <div className="profile-option">
                        <div className="option">
                            <p>Profile</p>
                            <span className="material-symbols-outlined person">
                                person
                            </span>
                        </div>
                    </div>
                    <div className="profile-option">
                        <div className="option">
                            <p>Settings</p>
                            <span className="material-symbols-outlined settings">
                                settings
                            </span>
                        </div>
                    </div>
                    <div className="profile-option">
                        <div className="option">
                            <p>About</p>
                            <span className="material-symbols-outlined info">
                                info
                            </span>
                        </div>
                    </div>
                    <div className="profile-option">
                        <div className="option" onClick={goToLogin}>
                            <p>Log out</p>
                            <span className="material-symbols-outlined logout">
                                logout
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionSidePanel;