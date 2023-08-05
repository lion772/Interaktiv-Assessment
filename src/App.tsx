import React from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/NavbarComponent";
import HomepageDescription from "./components/HomepageDescription";
import SidebarComponent from "./components/SidebarComponent";
import LearningCourses from "./components/LearningCourses";
import Container from "./components/Container";

function App() {
    return (
        <div className="App">
            <NavbarComponent>
                <HomepageDescription />
                <Container
                    sidebarComponent={<SidebarComponent />}
                    learningCoursesComponent={<LearningCourses />}
                />
            </NavbarComponent>
        </div>
    );
}

export default App;
