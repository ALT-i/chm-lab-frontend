import React from "react";

import Authentication from "../components/Authentication";
import IndexHeader from "../components/IndexHeader";

function AuthView () {
    return (
        <div className="auth-component">
            <IndexHeader />
            <Authentication />
        </div>
     );
}
 
export default AuthView;