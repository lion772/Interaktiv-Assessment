const HomepageDescription = () => {
    return (
        <div className="container mt-4">
            <div className="row">
                <div
                    className="col-md-9 p-1 d-flex"
                    style={{ backgroundColor: "white", color: "gray" }}
                >
                    <p className="mx-2">Home Page &rarr; e-Learning Courses</p>
                </div>
                <div
                    className="col-md-3 p-1 d-flex"
                    style={{ backgroundColor: "gray", color: "white" }}
                >
                    <p className="mx-2">admin</p>
                </div>
            </div>
        </div>
    );
};

export default HomepageDescription;
