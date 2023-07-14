import React from "react";

import Quiz from "../components/Quiz";
import IndexHeader from "../components/IndexHeader";

const QuizView = () => {
    return ( 
        <div className="components">
            <IndexHeader />
            <Quiz />
        </div>
     );
}
 
export default QuizView;