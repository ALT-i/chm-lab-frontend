/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/latest/tutorial/process-model
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */
import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import './index.css';
import './assets/scss/index.css';
// import App from './app';
import { createBrowserRouter, RouterProvider } from "react-router-dom";



import Index from './views/index';
// import QuizView from './views/QuizView.';
import AuthView from './views/AuthView';
import HomeView from './views/HomeView';
// import DifficultyView from './views/DifficultyView';
import ClassSelectionView from './views/ClassSelectionView';
import ErrorPage from "./error-page";
// console.log('👋 This message is being logged by "renderer.js", included via webpack');

const router = createBrowserRouter([
    {
      path: "/",
      // path: "/main_window",
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
      // path: '/home/:class_id',
      path: "/main_window",
      element: <Index />
    }

  ]);


const root = createRoot(document.getElementById("app"));

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);