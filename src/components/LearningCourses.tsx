import { FC } from "react";
import { Course } from "../util/Course";

interface LearningCourseInt {
    courses: Course[];
}

const LearningCourses: FC<LearningCourseInt> = ({ courses }) => {
    return (
        <div style={{ backgroundColor: "gray" }}>
            Learning courses component{" "}
        </div>
    );
};

export default LearningCourses;
