import App from "../../App";
import { ShallowWrapper, shallow } from "enzyme";
import HomepageDescription from "../HomepageDescription";
import HomeComponent from "../HomeComponent";

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
