import { ShallowWrapper, shallow } from "enzyme";
import { Course } from "../../util/Course";
import SidebarDetailComponent from "../SidebarDetail";

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
