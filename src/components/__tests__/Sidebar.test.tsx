import { ShallowWrapper, shallow } from "enzyme";
import SidebarComponent from "../SidebarComponent";
import { Course } from "../../util/Course";
import { render, screen } from "@testing-library/react";
import SidebarDetailComponent from "../SidebarDetail";
import Root from "../../Root";

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
            <SidebarComponent courses={courses} />
        </Root>
    );

    return courses;
}

describe("SidebarComponent with RTL", () => {
    let courses: Course[];

    test("check if div with class d-flex is rendered", () => {
        courses = renderComponent();
        const dFlexDiv = screen.getByTestId("d-flex");
        expect(dFlexDiv).toBeInTheDocument();
        expect(dFlexDiv).toHaveTextContent("Navigation");
    });

    test("renders SidebarDetailComponent for each given course passed via props", () => {
        courses = renderComponent();
        //check whether all instances of SidebarDetail are correctly rendered
        const sidebarDetailComponents = screen.getAllByTestId(`sidebar-detail`);
        expect(sidebarDetailComponents).toHaveLength(courses.length);
    });
});
