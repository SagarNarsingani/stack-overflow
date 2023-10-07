import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from './Components/Login';
import { Navbar } from './Components/Navbar';
import { Questions } from './Components/Questions';
import { Answers } from './Components/Answers';
import { QuestionForm } from './Components/QuestionForm';
import { Question } from './Components/Question';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Navbar />,
        children: [
            {
                path: 'questions',
                element: <Questions />,
            },
            {
                path: 'answers',
                element: <Answers />,
            },
            {
                path: 'ask',
                element: <QuestionForm />,
            },
            {
                path: 'question/:id',
                element: <Question />,
            },
        ],
    },
    {
        path: 'login',
        element: <Login />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
