import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import server from "../../utils";

function DisplayClasses (props: any) {
    const activateLink = props.activateLink
    const getClassDetails = props.getClassDetails
    const [classes, setClasses] = useState([])
    const navigate = useNavigate()


    useEffect(() => {
        const stagedClasses = JSON.parse(window.localStorage.getItem("clases"))
        if(stagedClasses) {
            setClasses(stagedClasses)
        }
        let token
        const tokenData = JSON.parse(window.localStorage.getItem("tokens"))
        if (!tokenData) {
            navigate('/auth')
        }else{
            token = `Bearer ` + tokenData.access
        }

        axios.get(`${server.absolute_url}/${server.workspace}`, {
            headers: {
                "Content-Type": "application/json",
                "authorization": token
            }
        }).then((res) => {
            setClasses(res.data)
            window.localStorage.setItem("classes", JSON.stringify(res.data))

        }).catch(err => {
            // if(err.message === "Network Error") setLevels(oldLevels);
            // console.log(err)

        })

    },[])

    return ( 
        <div>
            <ul>
                {classes.map(topic =>           
                    <li id={`${topic.id}`} key={topic.id} onClick={(e) => {
                        if (activateLink){
                            activateLink(e)
                        }else{getClassDetails(e)}
                    }}>
                        {topic.title}
                    </li>
                )}
            </ul>
        </div>
    );
}
 
export default DisplayClasses;