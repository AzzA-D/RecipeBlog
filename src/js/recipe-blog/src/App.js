import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePageExample from "./examples/HomePageExample";
import RecipePageExample from "./examples/RecipePageExample";
import BookmarksPageExample from "./examples/BookmarksPageExample";

function App() {
    return (
        <div className="App">
            <Header websiteName="Whistle Kitchen" />
            <RecipePageExample />
            <Footer />
        </div>
    );
}

export default App;