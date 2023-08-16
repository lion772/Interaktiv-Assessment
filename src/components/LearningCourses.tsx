import { FC } from "react";
import { Course } from "../util/Course";
import LearningCourseDetail from "./LearningCourseDetail";

interface LearningCourseInt {
    courses: Course[];
}

const LearningCourses: FC<LearningCourseInt> = ({ courses }) => {
    const learningCourseDetail = (courses as Course[]).map((course) => (
        <div data-testid={`learning-course-detail`}>
            <LearningCourseDetail key={course.id} course={course} />
        </div>
    ));
    return (
        <div className="ms-4" data-testid="ms-4">
            <h4 className="d-flex  mb-3" style={{ color: "gray" }}>
                e-Learning Courses
            </h4>
            {learningCourseDetail}
        </div>
    );
};

export default LearningCourses;
