import React from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/NavbarComponent";
import HomepageDescription from "./components/HomepageDescription";
import SidebarComponent from "./components/SidebarComponent";
import { Container } from "semantic-ui-react";
import LearningCourses from "./components/LearningCourses";

function App() {
    return (
        <div className="App">
            <NavbarComponent>
                <HomepageDescription />
                
                <Container textAlign="left">
                    <SidebarComponent />
                </Container>
                <Container textAlign="right">
                    <LearningCourses />
                </Container>
            </NavbarComponent>
        </div>
    );
}

export default App;
