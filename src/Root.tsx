import { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./store";

interface RootInt {
    children: ReactNode;
}

const Root: FC<RootInt> = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
};

export default Root;
