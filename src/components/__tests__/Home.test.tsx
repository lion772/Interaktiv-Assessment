import { shallow } from "enzyme";
import { store, useFetchCoursesQuery } from "../../store";
import SidebarComponent from "../SidebarComponent";
import LearningCourses from "../LearningCourses";
import HomeComponent from "../HomeComponent";
import { Course } from "../../util/Course";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

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
    test("renders loading state when fetching data", async () => {
        await (useFetchCoursesQuery as jest.Mock).mockReturnValue({
            data: undefined,
            error: undefined,
            isFetching: true,
        });
        const wrapper = shallow(<HomeComponent />);

        expect(wrapper.contains(<p>loading...</p>)).toBe(true);
    });

    test("renders error state when fetch has an error", async () => {
        await (useFetchCoursesQuery as jest.Mock).mockReturnValue({
            data: undefined,
            error: true,
            isFetching: false,
        });
        const wrapper = shallow(<HomeComponent />);

        expect(wrapper.contains(<p>Couldn't fetch courses</p>)).toBe(true);
    });

    test("renders SidebarComponent and LearningCourses when data is available", async () => {
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

        await (useFetchCoursesQuery as jest.Mock).mockReturnValue({
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

describe("HomeComponent with RTL", () => {
    test("renders loading state when fetching data", async () => {
        (useFetchCoursesQuery as jest.Mock).mockReturnValue({
            data: undefined,
            error: undefined,
            isFetching: true,
        });

        render(
            <Provider store={store}>
                <HomeComponent />
            </Provider>
        );
        const loadingText = screen.getByText("loading...");
        expect(loadingText).toBeInTheDocument();
    });

    test("renders error state when fetch has an error", async () => {
        (useFetchCoursesQuery as jest.Mock).mockReturnValue({
            data: undefined,
            error: true,
            isFetching: false,
        });

        render(
            <Provider store={store}>
                <HomeComponent />
            </Provider>
        );
        const errorText = screen.getByText("Couldn't fetch courses");
        expect(errorText).toBeInTheDocument();
    });

    test("renders SidebarComponent and LearningCourses when data is available", async () => {
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

        render(
            <Provider store={store}>
                <HomeComponent />
            </Provider>
        );
        const sidebarComponent = screen.getByTestId("sidebar-component");
        const learningCourses = screen.getByTestId("learning-courses");

        //check whether the components are being rendered
        expect(sidebarComponent).toBeInTheDocument();
        expect(learningCourses).toBeInTheDocument();
    });
});
