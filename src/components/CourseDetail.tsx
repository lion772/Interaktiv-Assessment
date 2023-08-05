import { FC } from "react";
import { Course } from "../util/Course";
import classes from "./CourseDetail.module.css";

interface CourseDetailInt {
    course: Course;
}

const CourseDetailComponent: FC<CourseDetailInt> = ({ course }) => {
    return (
        <div className={classes.imageContainer}>
            <img
                src={process.env.PUBLIC_URL + course.imagePath}
                alt={course.title}
            />
            <p>{course.title}</p>
        </div>
    );
};

export default CourseDetailComponent;
