import React from "react";

import IndexHeader from "../components/IndexHeader";
import IndexHero from "../components/IndexHero";
import Questions from "../components/Questions";
import IndexPage from "../components/IndexPage";

function Index () {
    return ( 
        <div className="components">
            {/* <IndexHeader />
            <IndexHero />
            <Questions /> */}
            <IndexPage/>
        </div>
    );
}
 
export default Index;