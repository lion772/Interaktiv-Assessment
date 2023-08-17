import { ShallowWrapper, shallow } from "enzyme";
import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import Root from "../../Root";

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

describe("Contact Component using Jest and RTL", () => {
    test("renders the correct text content in the corresponding classes", () => {
        render(
            <Root>
                <Contact />
            </Root>
        );

        // Check if the div containing "Contact" text is present
        const contactDiv = screen.getByText("Contact");
        expect(contactDiv).toBeInTheDocument();

        // Check if specific text elements are present
        expect(screen.getByText("Technical support")).toBeInTheDocument();
        expect(screen.getByText("John Doe")).toBeInTheDocument();
        expect(screen.getByText("it@example.com")).toBeInTheDocument();

        expect(screen.getByText("Content-didactic topics")).toBeInTheDocument();
        expect(screen.getByText("Jane Roe")).toBeInTheDocument();
        expect(screen.getByText("content@example.com")).toBeInTheDocument();
    });
});
