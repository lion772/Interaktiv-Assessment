import App from "../../App";
import { ShallowWrapper, shallow } from "enzyme";
import HomepageDescription from "../HomepageDescription";
import HomeComponent from "../HomeComponent";
import { render, screen } from "@testing-library/react";
import Root from "../../Root";

describe("App Component", () => {
    let wrapped: ShallowWrapper;
    beforeEach(() => {
        wrapped = shallow(<App></App>);
    });
    test("shows HomePageDescription and HomeComponent", () => {
        expect(wrapped.find(HomepageDescription).length).toEqual(1);
        expect(wrapped.find(HomeComponent).length).toBe(1);
    });
});

describe("App Component with RTL", () => {
    test("shows HomePageDescription and HomeComponent", () => {
        render(
            <Root>
                <App />
            </Root>
        );

        const homePage = screen.getByTestId("home-page");
        const home = screen.getByTestId("home");
        const navbarComponent = screen.getByTestId("navbar");

        //Check if HomePageDescription, NavbarComponent and HomeComponent are in the document
        expect(homePage).toBeInTheDocument();
        expect(home).toBeInTheDocument();
        expect(navbarComponent).toBeInTheDocument();
    });
});
