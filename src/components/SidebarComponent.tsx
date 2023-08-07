import { FC } from "react";
import { Course } from "../util/Course";
import Contact from "./Contact";
import SidebarDetailComponent from "./SidebarDetail";

interface SidebarComponentInt {
    courses: Course[];
}

const SidebarComponent: FC<SidebarComponentInt> = ({ courses }) => {
    const sidebarDetail = (courses as Course[]).map((course) => (
        <SidebarDetailComponent key={course.id} course={course} />
    ));
    return (
        <>
            <div
                className="d-flex px-3"
                style={{ backgroundColor: "gainsboro" }}
            >
                Navigation
            </div>
            <div>{sidebarDetail}</div>
            <Contact />
        </>
    );
};

export default SidebarComponent;
