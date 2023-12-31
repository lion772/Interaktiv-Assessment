import React from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/NavbarComponent";
import HomepageDescription from "./components/HomepageDescription";
import HomeComponent from "./components/HomeComponent";

function App() {
    return (
        <div className="App" data-testid="navbar">
            <NavbarComponent>
                <div data-testid="home-page">
                    <HomepageDescription />
                </div>
                <div data-testid="home">
                    <HomeComponent />
                </div>
            </NavbarComponent>
        </div>
    );
}

export default App;
