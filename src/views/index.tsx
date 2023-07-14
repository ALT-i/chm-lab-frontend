import React from "react";

import IndexHeader from "../components/IndexHeader";
import IndexHero from "../components/IndexHero";
import Questions from "../components/Questions";

function Index () {
    return ( 
        <div className="components">
            <IndexHeader />
            <IndexHero />
            <Questions />
        </div>
    );
}
 
export default Index;