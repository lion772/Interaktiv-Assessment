import { FC } from "react";
import classes from "./CourseProgress.module.css";

interface CourseProgressInt {
    // progress is a value between 0 and 100 indicating the course progress
    progress: number;
    missing: number;
}

const CourseProgress: FC<CourseProgressInt> = ({ progress, missing }) => {
    const circles: string[] = [];
    const numberOfCircles: number = 5;
    let content: any;

    // Calculate the number of filled circles based on progress
    const filledCircles = Math.ceil((progress / 100) * 5);

    for (let i = 1; i <= numberOfCircles; i++) {
        const circleClass = i <= filledCircles ? classes.filled : "";
        circles.push(circleClass);
    }

    content = circles.map((circleClass: string, i) => (
        <div key={i} className={`${classes.circle} ${circleClass}`}></div>
    ));

    console.log(missing);

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
