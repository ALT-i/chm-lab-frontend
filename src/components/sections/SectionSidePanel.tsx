import React from "react";
import { useNavigate } from "react-router-dom";

function SectionSidePanel () {
    
    const navigate = useNavigate();


    function goToClassList () {
        navigate(`/select-class`)
    }
    return (
        <section className="left-side-panel">
            <div className="panel">
                <div className="basic-profile">
                    <div className="user-name">
                        <p>Chioma</p>
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
                        <div className="option">
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