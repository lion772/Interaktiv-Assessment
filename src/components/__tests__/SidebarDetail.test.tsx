import { ShallowWrapper, shallow } from "enzyme";
import { Course } from "../../util/Course";
import { render, screen, within } from "@testing-library/react";
import SidebarDetailComponent from "../SidebarDetail";
import { Provider } from "react-redux";
import { store } from "../../store";

describe("SidebarDetailComponent", () => {
    let wrapper: ShallowWrapper;
    let course: Course = {
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
    };

    beforeEach(() => {
        wrapper = shallow(<SidebarDetailComponent course={course} />);
    });

    test("check if div exists and contains data passed via props", () => {
        expect(wrapper.find(".imageContainer").length).toEqual(1);
        expect(wrapper.find(".imageContainer").text()).toContain(
            course.category
        );
        expect(wrapper.find("img").exists()).toBe(true);
        expect(wrapper.find("img").prop("src")).toBe(
            process.env.PUBLIC_URL + course.imagePath
        );
        expect(wrapper.find("img").prop("alt")).toBe(course.category);
    });
});

describe("SidebarDetailComponent with RTL", () => {
    let course = {
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
    };

    test("check if div exists and contains data passed via props", () => {
        render(
            <Provider store={store}>
                <SidebarDetailComponent course={course} />
            </Provider>
        );

        // Check if the div with the class "imageContainer" exists and contains category
        const imageContainer = screen.getByTestId("image-container");
        expect(imageContainer.textContent).toContain(course.category);

        // Check if the image exists and has correct src and alt attributes
        const image = screen.getByRole("img", {
            name: /category 1/i,
        });

        //check whether the img exists and its src matches course.imagePath
        expect(image).toBeInTheDocument();
        expect((image as HTMLImageElement).src).toBe(
            `http://localhost/${course.imagePath}`
        );
    });
});
