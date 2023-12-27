import React from "react";
import DifficultySelector from "../components/DifficultySelector";
import IndexHeader from "../components/IndexHeader";

function DifficultyView () {
    return ( 
        <div>
            <IndexHeader />
            <DifficultySelector />
        </div> 
    );
}
 
export default DifficultyView;