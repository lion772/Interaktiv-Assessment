import { shallow } from "enzyme";
import CourseProgress from "../CourseProgress";

describe("CourseProgress Component", () => {
    it("renders correct number of filled circles based on progress", () => {
        const progress = 75; 
        const missing = 3; 
        const filledCircles = Math.ceil((progress / 100) * 5);

        console.log(filledCircles);

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
