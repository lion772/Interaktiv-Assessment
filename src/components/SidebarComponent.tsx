import { FC } from "react";
import { Course } from "../util/Course";
import Contact from "./Contact";
import CourseDetailComponent from "./CourseDetail";

interface SidebarComponentInt {
    courses: Course[];
}

const SidebarComponent: FC<SidebarComponentInt> = ({ courses }) => {
    const courseDetail = (courses as Course[]).map((course) => (
        <CourseDetailComponent key={course.id} course={course} />
    ));
    return (
        <>
            <div
                className="d-flex px-3"
                style={{ backgroundColor: "gainsboro" }}
            >
                Navigation
            </div>
            <div>{courseDetail}</div>
            <Contact />
        </>
    );
};

export default SidebarComponent;
