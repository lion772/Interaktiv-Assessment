import { ShallowWrapper, shallow } from "enzyme";
import HomepageDescription from "../HomepageDescription";

describe("HomepageDescription Component", () => {
    let wrapper: ShallowWrapper;
    beforeEach(() => {
        wrapper = shallow(<HomepageDescription />);
    });
    test("renders the correct text content in the corresponding classes", () => {
        // Find the first div containing the text content
        expect(wrapper.find(".col-md-9 p").text()).toEqual(
            "Home Page → e-Learning Courses"
        );
        // Find the second div containing the text content
        expect(wrapper.find(".col-md-3 p").text()).toEqual("admin");
        // Check if specific text elements are present
        expect(wrapper.find(".col-md-3 p").length).toBe(1);
        expect(wrapper.find(".col-md-9 p").length).toBe(1);
    });
});
