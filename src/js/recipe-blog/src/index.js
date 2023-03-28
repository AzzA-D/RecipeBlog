import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import HomePage from './pages/HomePage/HomePage';
import RecipePage from './pages/RecipePage/RecipePage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import BookmarksPage from './pages/BookmarksPage/BookmarksPage';
import CategoryPage from './pages/CategoryPage/CategoryPage';

const rootNode = document.getElementById('react-root');
const pageAttr = rootNode.getAttribute("data-page");
const propsString = rootNode.getAttribute("data-props");
const props = JSON.parse(propsString);

const root = ReactDOM.createRoot(rootNode);

switch (pageAttr) {
    case 'HomePage':
        root.render(
            <React.StrictMode>
                <Header websiteName="Whistle Kitchen" />
                <HomePage {...props} />
                <Footer />
            </React.StrictMode>
        );
        break;
    case 'RecipePage':
        root.render(
            <React.StrictMode>
                <Header websiteName="Whistle Kitchen" />
                <RecipePage {...props} />
                <Footer />
            </React.StrictMode>
        );
        break;
    case 'BookmarksPage':
        root.render(
            <React.StrictMode>
                <Header websiteName="Whistle Kitchen" />
                <BookmarksPage {...props} />
                <Footer />
            </React.StrictMode>
        );
        break;
    case 'CategoryPage':
        root.render(
            <React.StrictMode>
                <Header websiteName="Whistle Kitchen" />
                <CategoryPage {...props} />
                <Footer />
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