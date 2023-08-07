import { FC } from "react";
import { Course } from "../util/Course";
import classes from "./LearningCourseDetail.module.css";

interface LearningCourseDetailInt {
    course: Course;
}

const LearningCourseDetail: FC<LearningCourseDetailInt> = ({ course }) => {
    const { lessons } = course;
    let content: any;

    if (lessons.length > 1) {
        content = lessons.map((lesson) => (
            <p key={lesson.id}>{lesson.topic}</p>
        ));
    }

    return (
        <div className="container">
            <div className="row">
                <div className={classes.imageContainer}>
                    <div className="col-md-1">
                        {lessons.length > 1 && (
                            <img
                                src={process.env.PUBLIC_URL + course.imagePath}
                                alt={course.title}
                            />
                        )}
                    </div>
                    <div
                        className="col-md-11 ms-3"
                        style={{ textAlign: "initial" }}
                    >
                        {content}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LearningCourseDetail;
