import { ShallowWrapper, shallow } from "enzyme";
import Contact from "../Contact";

describe("Contact Component", () => {
    let wrapper: ShallowWrapper;
    beforeEach(() => {
        wrapper = shallow(<Contact />);
    });
    test("renders the correct text content in the corresponding classes", () => {
        // Check if the div containing "Contact" text is present
        expect(wrapper.find(".d-flex.px-3").text()).toContain("Contact");

        // Check if specific text elements are present
        expect(wrapper.contains("Technical support")).toBe(true);
        expect(wrapper.contains("John Doe")).toBe(true);
        expect(wrapper.contains("it@example.com")).toBe(true);

        expect(wrapper.contains("Content-didactic topics")).toBe(true);
        expect(wrapper.contains("Jane Roe")).toBe(true);
        expect(wrapper.contains("content@example.com")).toBe(true);
    });
});
