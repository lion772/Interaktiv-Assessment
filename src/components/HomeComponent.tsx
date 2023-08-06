import { useFetchCoursesQuery } from "../store";
import { Course } from "../util/Course";
import SidebarComponent from "./SidebarComponent";
import LearningCourses from "./LearningCourses";

const HomeComponent = () => {
    const { data, error, isFetching } = useFetchCoursesQuery("courses");

    let content = <></>;
    if (isFetching) {
        content = <p>loading...</p>;
    } else if (error) {
        content = <p>Couldn't fetch courses</p>;
    } else {
        content = (
            <>
                <div className="col-md-3 p-0">
                    <SidebarComponent courses={data as Course[]} />
                </div>
                <div className="col-md-9 p-0">
                    <LearningCourses courses={data as Course[]} />
                </div>
            </>
        );
    }

    return (
        <div className="container mt-3">
            <div className="row">{content}</div>
        </div>
    );
};

export default HomeComponent;
