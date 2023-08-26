import React, { useEffect, useState, CSSProperties } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";

import PulseLoader from "react-spinners/PulseLoader";


import server from "../../utils"

function SectionLogin () {
    const navigate = useNavigate()
    const [feedback, setFeedback] = useState(null)
    const [isloading, setIsLoading] = useState(false)
    const override: CSSProperties = {
        fontWeight: "400",
      };
      

    type authResData = {
        user_id? : string
    }


    async function getUserData (id: string) {
        axios.get(`${server.absolute_url}/${server.user}/${id}/`)
        .then((res) => {
            window.localStorage.setItem("user_data", JSON.stringify(res.data))
        }).catch(err => {
            console.log(err)
            setFeedback(err.message)
        })
    }

    const authLogin = (e: any) => {
        setIsLoading(true)
        e.preventDefault()
        
        // console.log(`${server.absolute_url}/${server.user_auth}/login`) ///api/v1/users/
        axios.post(`${server.absolute_url}/${server.auth_signin}`, {
            email: e.target[0].value,
            password: e.target[1].value
        },
            {headers : {
                'Content-Type': 'application/json',
                }
        }).then((res) => {
            window.localStorage.setItem("auth_tokens", JSON.stringify(res.data))
            const userInfo: authResData  = ( jwt_decode(res.data.access))
            getUserData(userInfo.user_id)
            setFeedback(null)
            setTimeout(() => {
                navigate('/home');
                setIsLoading(false);
            }, 1000);
        }).catch(err => {
            console.log(err)
            setIsLoading(false)
            if(err.message.includes("401")) {
                setFeedback("Invalid credentials");
            }
        })
        
    }

    useEffect(() => {
        if (!feedback) setFeedback(null);
    }, [authLogin])

    return ( 
        <div className="section-login">
            {feedback && <p className="alert">{feedback}</p>}
            <br/>
            <form action="" onSubmit={authLogin} id="login" className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm">
                <div>
                    <label htmlFor="email">Email:</label>
                    <input id="email" type="text" name="username"/>
                </div>
                <div>
                    <label htmlFor="pwd">Password:</label>
                    <input id="pwd" type="password" name="password"/>
                </div>
                <div className="submit">
                    <button value="Submit" type="submit" form="login">{isloading? <PulseLoader
                        color={"#ffffff"}
                        loading={true}
                        cssOverride={override}
                        size={10}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    /> : 'Login'}
                    </button>
                </div>
            </form>
        </div>
    );
}
 
export default SectionLogin;