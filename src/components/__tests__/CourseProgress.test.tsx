import { shallow } from "enzyme";
import { render, screen } from "@testing-library/react";
import CourseProgress from "../CourseProgress";
import Root from "../../Root";

describe("CourseProgress Component", () => {
    it("renders correct number of filled circles based on progress", () => {
        const progress = 75;
        const missing = 3;
        const filledCircles = Math.ceil((progress / 100) * 5);

        const wrapper = shallow(
            <CourseProgress progress={progress} missing={missing} />
        );

        // Check if the number of filled circles matches the expected number
        expect(wrapper.find(".circle.filled")).toHaveLength(filledCircles);

        // Check if the missing value is displayed correctly
        const missingText = wrapper.find("p").first().text();
        expect(missingText).toContain(`${missing}min`);
    });
});

describe("CourseProgress Component with RTL", () => {
    it("renders correct number of filled circles based on progress", () => {
        const progress = 75;
        const missing = 3;
        const filledCircles = Math.ceil((progress / 100) * 5);

        // Render the CourseProgress component
        render(
            <Root>
                <CourseProgress progress={progress} missing={missing} />
            </Root>
        );

        // Check if the number of filled circles matches the expected number
        const filledCircleElements = screen.getAllByTestId("filled-circle");
        expect(filledCircleElements).toHaveLength(filledCircles);

        const paragraph = screen.getByText(/to be done by:/i);
        expect(paragraph).toBeInTheDocument();

        // Check if the missing value is displayed correctly
        const missingTexts = screen.getAllByTestId("left");
        expect(missingTexts).toHaveLength(1);
    });
});
