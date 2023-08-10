import { FC } from "react";
import classes from "./CourseProgress.module.css";

interface CourseProgressInt {
    // progress is a value between 0 and 100 indicating the course progress
    progress: number;
    missing: number;
}

const CourseProgress: FC<CourseProgressInt> = ({ progress, missing }) => {
    const numberOfCircles: number = 5;
    // Calculate the number of filled circles based on progress - Between 0 and 5
    const filledCircles = Math.ceil((progress / 100) * 5);

    // Return a list of classes based on filledCircles
    const circles = Array.from({ length: numberOfCircles }, (_, index) =>
        index < filledCircles ? classes.filled : ""
    );

    //render the retrieved classes here
    const content = circles.map((circleClass: string, i) => (
        <div key={i} className={`${classes.circle} ${circleClass}`}></div>
    ));

    return (
        <div className={classes.courseProgress}>
            <p>
                {missing}min <br />
                to be done by:
            </p>
            {content}
        </div>
    );
};

export default CourseProgress;
