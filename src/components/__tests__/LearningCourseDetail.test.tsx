import React from "react";
import { shallow } from "enzyme";
import { render, screen } from "@testing-library/react";
import LearningCourseDetail from "../LearningCourseDetail";
import CourseProgress from "../CourseProgress";
import Root from "../../Root";

describe("LearningCourseDetail Component", () => {
    const mockCourse = {
        id: "courseId",
        category: "Course Category",
        modules: [
            { id: "module1", topic: "Module 1", progress: 50, missing: 2 },
            { id: "module2", topic: "Module 2", progress: 75, missing: 1 },
        ],
        imagePath: "/path/to/image",
    };
    const modules = mockCourse.modules;

    test("renders the modules and CourseProgress correctly", () => {
        const wrapper = shallow(<LearningCourseDetail course={mockCourse} />);

        // Check if module topics are rendered correctly
        modules.forEach((module) => {
            expect(
                wrapper.contains(<p key={module.id}>{module.topic}</p>)
            ).toBe(true);
            expect(
                wrapper.contains(
                    <CourseProgress
                        progress={module.progress}
                        missing={module.missing}
                    />
                )
            ).toBe(true);
            expect(
                wrapper
                    .findWhere(
                        (node) =>
                            node.type() === CourseProgress &&
                            node.prop("progress") === module.progress &&
                            node.prop("missing") === module.missing
                    )
                    .exists()
            ).toBe(true);
        });

        // Check the rendered progress elements if necessary
        const progressContainers = wrapper.find(".progressContainer");
        expect(progressContainers.length).toBe(mockCourse.modules.length);
    });
});

describe("LearningCourseDetail Component RTL", () => {
    const mockCourse = {
        id: "courseId",
        category: "Course Category",
        modules: [
            { id: "module1", topic: "Module 1", progress: 50, missing: 2 },
            { id: "module2", topic: "Module 2", progress: 75, missing: 1 },
        ],
        imagePath: "/path/to/image",
    };
    const modules = mockCourse.modules;

    test("renders the modules and CourseProgress correctly", () => {
        render(
            <Root>
                <LearningCourseDetail course={mockCourse} />
            </Root>
        );

        // Check if module topics are correctly rendered
        modules.forEach((module) => {
            expect(screen.getByText(module.topic)).toBeInTheDocument();
        });

        // Check the rendered progress elements if necessary
        const progressContainers = screen.getAllByTestId("progress");
        expect(progressContainers.length).toBe(mockCourse.modules.length);
    });
});
