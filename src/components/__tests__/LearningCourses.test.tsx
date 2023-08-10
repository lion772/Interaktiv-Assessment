import { ShallowWrapper, shallow } from "enzyme";
import { Course } from "../../util/Course";
import LearningCourses from "../LearningCourses";
import LearningCourseDetail from "../LearningCourseDetail";

describe("LearningCourses", () => {
    let courses: Course[], wrapper: ShallowWrapper;
    beforeEach(() => {
        courses = [
            {
                id: "course1",
                category: "Category 1",
                modules: [
                    {
                        id: "module1",
                        topic: "Topic 1",
                        progress: 50,
                        missing: 2,
                    },
                ],
                imagePath: "course1.jpg",
            },
        ];

        wrapper = shallow(<LearningCourses courses={courses} />);
    });

    test("check if LearningCourseDetail is rendered", () => {
        expect(wrapper.find(LearningCourseDetail).length).toEqual(1);
    });

    test("check if div and its heading are rendered properly", () => {
        expect(wrapper.find(".ms-4").exists()).toBe(true);
        expect(wrapper.find(".d-flex.mb-3").exists()).toBe(true);
        expect(wrapper.contains("e-Learning Courses")).toBeTruthy();
    });

    test("renders LearningCourseDetail for each given course", () => {
        courses.forEach((course) => {
            expect(
                wrapper.contains(
                    <LearningCourseDetail key={course.id} course={course} />
                )
            ).toBeTruthy();

            expect(wrapper.find(LearningCourseDetail).prop("course")).toEqual(
                course
            );
        });
    });
});
