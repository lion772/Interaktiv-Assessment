import { ShallowWrapper, shallow } from "enzyme";
import SidebarComponent from "../SidebarComponent";
import { Course } from "../../util/Course";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store";
import SidebarDetailComponent from "../SidebarDetail";

describe("SidebarComponent", () => {
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

        wrapper = shallow(<SidebarComponent courses={courses} />);
    });

    test("shows SidebarDetailComponent", () => {
        expect(wrapper.find(SidebarDetailComponent).exists()).toBe(true);
    });

    test("check if div with class d-flex is rendered", () => {
        expect(wrapper.find(".d-flex.px-3").length).toEqual(1);
        expect(wrapper.find(".d-flex.px-3").text()).toContain("Navigation");
    });

    test("renders SidebarDetailComponent for each given course passed via props", () => {
        // Check if the course and module information is present in the rendered output
        courses.forEach((course) => {
            expect(
                wrapper.find(
                    <SidebarDetailComponent key={course.id} course={course} />
                )
            ).toBeTruthy();
            expect(wrapper.find(SidebarDetailComponent).prop("course")).toEqual(
                course
            );
        });
    });
});

describe("SidebarComponent with RTL", () => {
    let courses: Course[];

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
    });

    test("check if div with class d-flex is rendered", () => {
        render(
            <Provider store={store}>
                <SidebarComponent courses={courses} />{" "}
            </Provider>
        );
        const dFlexDiv = screen.getByTestId("d-flex");
        expect(dFlexDiv).toBeInTheDocument();
        expect(dFlexDiv).toHaveTextContent("Navigation");
    });

    test("renders SidebarDetailComponent for each given course passed via props", () => {
        render(
            <Provider store={store}>
                <SidebarComponent courses={courses} />
            </Provider>
        );
        courses.forEach((course) => {
            const sidebarDetailComponent = screen.getByTestId(
                `sidebar-detail-${course.category}`
            );
            expect(sidebarDetailComponent).toBeInTheDocument();
        });
    });
});
