import { ShallowWrapper, shallow } from "enzyme";
import { Course } from "../../util/Course";
import LearningCourses from "../LearningCourses";
import LearningCourseDetail from "../LearningCourseDetail";
import { render, screen } from "@testing-library/react";
import Root from "../../Root";

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

function renderComponent(): Course[] {
    const courses = [
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

    render(
        <Root>
            <LearningCourses courses={courses} />
        </Root>
    );

    return courses;
}

describe("LearningCourses with RTL", () => {
    let courses: Course[];

    test("check if div and its heading are rendered properly", () => {
        courses = renderComponent();
        const ms4Div = screen.getByTestId("ms-4");
        const headingElement = screen.getByText("e-Learning Courses");
        expect(ms4Div).toBeInTheDocument();
        expect(headingElement).toBeInTheDocument();
    });

    it("should render a list of LearningCourseDetail components", () => {
        courses = renderComponent();
        // Check if the individual course details are rendered
        const learningCourseDetails = screen.getAllByTestId(
            "learning-course-detail"
        );
        expect(learningCourseDetails.length).toEqual(courses.length);
    });
});
