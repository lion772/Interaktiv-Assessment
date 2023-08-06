import { useEffect } from "react";
import { useFetchCoursesQuery } from "../store";
import { Course } from "../util/Course";
import Contact from "./Contact";
import CourseDetailComponent from "./CourseDetail";
const SidebarComponent = () => {
    const { data, error, isFetching } = useFetchCoursesQuery("courses");
    console.log(useFetchCoursesQuery("courses"));

    let content: any;
    if (isFetching) {
        content = <p>loading...</p>;
    } else if (error) {
        content = <p>Couldn't fetch courses</p>;
    } else {
        content = (data as Course[]).map((course) => (
            <CourseDetailComponent key={course.id} course={course} />
        ));
    }

    return (
        <>
            <div
                className="d-flex px-3"
                style={{ backgroundColor: "gainsboro" }}
            >
                Navigation
            </div>
            <div>{content}</div>
            <Contact />
        </>
    );
};

export default SidebarComponent;
