/* import React from "react";
import { ShallowWrapper, shallow } from "enzyme";
import HomeComponent from "../HomeComponent";
import Root from "../../Root";

describe("HomeComponent", () => {
    let wrapper: ShallowWrapper;
    beforeEach(() => {
        wrapper = shallow(
            <Root>
                <HomeComponent />
            </Root>
        );
    });
    it("renders loading message when fetching data", () => {
        expect(wrapper.contains("loading...")).toBe(true);
    });

    it("renders error message when fetching data results in an error", () => {
        const wrapper = shallow(<HomeComponent />);
        wrapper.setProps({ error: true }); // Simulate an error
        expect(wrapper.contains("Couldn't fetch courses")).toBe(true);
    });

    it("renders SidebarComponent and LearningCourses when data is available", () => {
        const data = [
            { id: 1, title: "Course 1" },
            { id: 2, title: "Course 2" },
        ];
        const wrapper = shallow(<HomeComponent />);
        wrapper.setProps({ data }); // Simulate successful data fetch

        // Check if SidebarComponent and LearningCourses are rendered
        expect(wrapper.find("SidebarComponent").length).toBe(1);
        expect(wrapper.find("LearningCourses").length).toBe(1);

        // You can also check if the course data is passed down to child components
        expect(wrapper.find("SidebarComponent").prop("courses")).toEqual(data);
        expect(wrapper.find("LearningCourses").prop("courses")).toEqual(data);
    });
}); */

import { shallow } from "enzyme";
import { useFetchCoursesQuery } from "../../store"; // Import the relevant queries
import SidebarComponent from "../SidebarComponent";
import LearningCourses from "../LearningCourses";
import HomeComponent from "../HomeComponent";
import { Course } from "../../util/Course";
import Root from "../../Root";

// Mock the useFetchCoursesQuery hook
jest.mock("../../store", () => {
    // we're using jest.requireActual to import the original module implementation of ../store, and then extending it to provide the mock implementation of useFetchCoursesQuery.
    //a This should help ensure that the mock implementation is being used correctly within your HomeComponent test.
    const originalModule = jest.requireActual("../../store");
    return {
        ...originalModule,
        useFetchCoursesQuery: jest.fn(),
    };
});

describe("HomeComponent", () => {
    it("renders loading state when fetching data", () => {
        (useFetchCoursesQuery as jest.Mock).mockReturnValue({
            data: undefined,
            error: undefined,
            isFetching: true,
        });
        const wrapper = shallow(<HomeComponent />);

        expect(wrapper.contains(<p>loading...</p>)).toBe(true);
    });

    it("renders error state when fetch has an error", () => {
        (useFetchCoursesQuery as jest.Mock).mockReturnValue({
            data: undefined,
            error: true,
            isFetching: false,
        });
        const wrapper = shallow(<HomeComponent />);

        expect(wrapper.contains(<p>Couldn't fetch courses</p>)).toBe(true);
    });

    it("renders SidebarComponent and LearningCourses when data is available", () => {
        const mockCourses: Course[] = [
            {
                id: "1",
                category: "Category 1",
                modules: [
                    {
                        id: "module1",
                        topic: "Module 1",
                        progress: 50,
                        missing: 2,
                    },
                ],
                imagePath: "path/to/image1",
            },
        ];

        (useFetchCoursesQuery as jest.Mock).mockReturnValue({
            data: mockCourses,
            error: undefined,
            isFetching: false,
        });
        const wrapper = shallow(<HomeComponent />);

        // Check if SidebarComponent and LearningCourses are rendered
        expect(wrapper.find(SidebarComponent).length).toEqual(1);
        expect(wrapper.find(LearningCourses).length).toEqual(1);

        // Check if data is passed to SidebarComponent and LearningCourses
        expect(wrapper.find(SidebarComponent).prop("courses")).toEqual(
            mockCourses
        );
        expect(wrapper.find(LearningCourses).prop("courses")).toEqual(
            mockCourses
        );
    });
});
