import { FC } from "react";
import { Course } from "../util/Course";
import classes from "./SidebarDetail.module.css";

interface SidebarDetailInt {
    course: Course;
}

const SidebarDetailComponent: FC<SidebarDetailInt> = ({ course }) => {
    return (
        <div className={classes.imageContainer}>
            <img
                src={process.env.PUBLIC_URL + course.imagePath}
                alt={course.category}
            />
            <p>{course.category}</p>
        </div>
    );
};

export default SidebarDetailComponent;
