import React from "react";

import ClassSelector from "../components/ClassSelector";
import SectionSidePanel from "../components/sections/SectionSidePanel";


function ClassSelectionView () {
    return ( 
        <div className="class-selector-component">
            <SectionSidePanel />
            <ClassSelector />
        </div>
     );
}
 
export default ClassSelectionView;