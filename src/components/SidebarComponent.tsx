import db from "../db.json";
import { Course } from "../util/Course";
import Contact from "./Contact";
import CourseDetailComponent from "./CourseDetail";
const SidebarComponent = () => {
    const coursesData: Course[] = db.courses;

    const courseList = coursesData.map((course) => (
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
            <div>{courseList}</div>
            <Contact />
        </>
    );
};

export default SidebarComponent;
