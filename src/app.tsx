import React from 'react';
import { hot } from 'react-hot-loader';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//pages
import Index from './views/index';
import QuizView from './views/QuizView.';
import AuthView from './views/AuthView';
import HomeView from './views/HomeView';
import DifficultyView from './views/DifficultyView';
import ClassSelectionView from './views/ClassSelectionView';


const router = createBrowserRouter([
    {
      // path: "/",
      path: "/main_window",
      element: <HomeView />,
    },
    {
      path: '/select-class',
      // path: '/main_window',
      element: <ClassSelectionView />
    },
    {
      path: '/auth',
      // path: '/main_window',
      element: <AuthView />
    },
    {
      path: '/home',
      // path: "/main_window",
      element: <Index />
    },
    {
      path: '/home/:class_id',
      // path: "/main_window",
      element: <Index />
    }

  ]);




function App() {

  return (
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
    );
}

export default hot(module)(App);