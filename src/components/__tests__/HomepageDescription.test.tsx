import { ShallowWrapper, shallow } from "enzyme";
import { render, screen } from "@testing-library/react";
import HomepageDescription from "../HomepageDescription";
import Root from "../../Root";

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

describe("HomepageDescription Component using Jest / RTL", () => {
    test("renders the correct text content in the corresponding classes", () => {
        // Render the component with Redux Provider and your store
        render(
            <Root>
                <HomepageDescription />
            </Root>
        );

        // Find the first div containing the text content
        const colMd9P = screen.getByText("Home Page → e-Learning Courses");
        expect(colMd9P).toBeInTheDocument();

        // Find the second div containing the text content
        const colMd3P = screen.getByText("admin");
        expect(colMd3P).toBeInTheDocument();

        // Check if specific text elements are present
        const colMd9Ps = screen.getAllByText("Home Page → e-Learning Courses");
        expect(colMd9Ps.length).toBe(1);

        const colMd3Ps = screen.getAllByText("admin");
        expect(colMd3Ps.length).toBe(1);
    });
});
