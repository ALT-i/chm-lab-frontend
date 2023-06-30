import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate, Link} from "react-router-dom";

import server from "../../utils";

function SectionSignUp () {
    const [feedback, setFeedback] = useState(null)
    const navigate = useNavigate()

    const authSignUp = (e: any) => {
        e.preventDefault()
        axios.post(`${server.absolute_url}/sign-up`, {
                first_name: e.target[0].value,
                last_name: e.target[1].value,
                username: e.target[2].value,
                password: e.target[3].value,
            }).then((res) => {
                window.localStorage.setItem("tokens", JSON.stringify(res.data.tokens))
                navigate('/select-class')
            }).catch((err) => {
                setFeedback(err.response.data)
            })

    }

    return ( 
        <div className="section-sign-up">
            {feedback && <p className="alert">{feedback}</p>}
            <br/>
            <form action="" onSubmit={authSignUp} className="sign-up">
                <div>
                    <label htmlFor="fname">First name:</label>
                    <input id="fname" type="text" name="first_name"/>
                </div>
                <div>
                    <label htmlFor="lname">Last name:</label>
                    <input id="lname" type="text" name="last_name"/>
                </div>
                <div>
                    <label htmlFor="uname">Username:</label>
                    <input id="uname" type="text" name="username"/>
                </div>
                <div>
                    <label htmlFor="pwd">Password:</label>
                    <input id="pwd" type="password" name="password"/>
                </div>
                <div className="submit">
                <Link to="/">Sign up</Link>
                </div>
            </form>
        </div>
    );
}
 
export default SectionSignUp;