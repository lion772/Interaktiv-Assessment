import { FC, ReactNode } from "react";

interface ContainerInt {
    sidebarComponent: ReactNode;
    learningCoursesComponent: ReactNode;
}

const Container: FC<ContainerInt> = ({
    sidebarComponent,
    learningCoursesComponent,
}) => {
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-3 p-0">{sidebarComponent}</div>
                <div className="col-md-9 p-0">{learningCoursesComponent}</div>
            </div>
        </div>
    );
};

export default Container;
