// import React from "react";

// export default function App() {
//     return (
//         <div>
//             <h1>Hey there!</h1>
//         </div>
//     );
// }


import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Route } from "react-router";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// styles
// import "./assets/scss/index.scss";

//pages
import Index from './views/index';
import QuizView from './views/QuizView.';
import AuthView from './views/AuthView';
import HomeView from './views/HomeView';
import DifficultyView from './views/DifficultyView';
import ClassSelectionView from './views/ClassSelectionView';




function App() {

  return (
    <>
      <Routes>
        <Route path='/'  element={<HomeView />}/>
        <Route path='/levels'  element={<DifficultyView />}/>
        <Route path='/auth'  element={<AuthView />}/>
        <Route path='/home'  element={<Index />}/>
        <Route path='/select-class'  element={<ClassSelectionView />}/>
        <Route path='/quiz' element={<QuizView />}/>
      </Routes>
    </>
)}

export default App;