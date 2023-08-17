import { FC } from "react";
import { Course } from "../util/Course";
import Contact from "./Contact";
import SidebarDetailComponent from "./SidebarDetail";

interface SidebarComponentInt {
    courses: Course[];
}

const SidebarComponent: FC<SidebarComponentInt> = ({ courses }) => {
    const sidebarDetail = (courses as Course[]).map((course) => (
        <div key={course.id} data-testid={`sidebar-detail`}>
            <SidebarDetailComponent course={course} />
        </div>
    ));
    return (
        <>
            <div
                className="d-flex px-3"
                data-testid="d-flex"
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
