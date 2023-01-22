import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import HomePage from './pages/HomePage/HomePage';
import RecipePage from './pages/RecipePage/RecipePage';

const rootNode = document.getElementById('react-root');
const pageAttr = rootNode.getAttribute("data-page");
const propsString = rootNode.getAttribute("data-props");
const props = JSON.parse(propsString);

const root = ReactDOM.createRoot(rootNode);

switch (pageAttr) {
    case 'HomePage':
        root.render(
            <React.StrictMode>
                <HomePage {...props} />
            </React.StrictMode>
        );
        break;
    case 'RecipePage':
        root.render(
            <React.StrictMode>
                <RecipePage {...props} />
            </React.StrictMode>
        );
        break;
    default:
        root.render(
            <React.StrictMode>
                <App />
            </React.StrictMode>
        );
        break;
}