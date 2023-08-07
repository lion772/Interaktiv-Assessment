import { FC } from "react";
import { Course } from "../util/Course";
import classes from "./LearningCourseDetail.module.css";
import CourseProgress from "./CourseProgress";

interface LearningCourseDetailInt {
    course: Course;
}

const LearningCourseDetail: FC<LearningCourseDetailInt> = ({ course }) => {
    const { modules } = course;
    let content: any;

    if (modules.length > 1) {
        content = modules.map((module) => (
            <p key={module.id}>{module.topic}</p>
        ));
    }

    return (
        <div className="container">
            <div className="row">
                <div className={classes.imageContainer}>
                    <div className="col-md-1">
                        <img
                            src={process.env.PUBLIC_URL + course.imagePath}
                            alt={course.category}
                        />
                    </div>
                    <div
                        className="col-md-7 ms-3"
                        style={{ textAlign: "initial" }}
                    >
                        {content}
                    </div>
                    <div className="col-md-4">
                        <CourseProgress />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LearningCourseDetail;
