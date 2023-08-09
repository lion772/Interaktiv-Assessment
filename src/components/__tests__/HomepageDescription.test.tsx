import { ShallowWrapper, shallow } from "enzyme";
import HomepageDescription from "../HomepageDescription";

describe("HomepageDescription Component", () => {
    let wrapper: ShallowWrapper;
    beforeEach(() => {
        wrapper = shallow(<HomepageDescription />);
    });
    test("renders the correct text content in the corresponding classes", () => {
        // Find the first div containing the text content
        const firstDiv = wrapper.find(".col-md-9 p");
        expect(firstDiv.text()).toEqual("Home Page → e-Learning Courses");

        // Find the second div containing the text content
        const secondDiv = wrapper.find(".col-md-3 p");
        expect(secondDiv.text()).toEqual("admin");
    });
});
