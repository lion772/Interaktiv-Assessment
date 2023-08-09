import React from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/NavbarComponent";
import HomepageDescription from "./components/HomepageDescription";
import SidebarComponent from "./components/SidebarComponent";
import HomeComponent from "./components/HomeComponent";
import Root from "./Root";

function App() {
    return (
        <div className="App">
            <Root>
                <NavbarComponent>
                    <HomepageDescription />
                    <HomeComponent />
                </NavbarComponent>
            </Root>
        </div>
    );
}

export default App;
