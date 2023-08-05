import React from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/NavbarComponent";
import HomepageDescription from "./components/HomepageDescription";

function App() {
    return (
        <div className="App">
            <NavbarComponent>
                <HomepageDescription />
            </NavbarComponent>
        </div>
    );
}

export default App;
