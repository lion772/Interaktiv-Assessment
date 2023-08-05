const Contact = () => {
    return (
        <>
            <div
                className="d-flex px-3"
                style={{ backgroundColor: "gainsboro" }}
            >
                Contact
            </div>

            <div className=" ms-3">
                <div className="d-flex flex-column align-items-start mb-4">
                    <p className="fw-bold m-0">Technical support</p>
                    <p className="m-0">John Doe</p>
                    <p className="m-0">it@example.com</p>
                </div>
                <div className="d-flex flex-column align-items-start">
                    <p className="fw-bold m-0">Content-didactic topics</p>
                    <p className="m-0">Jane Roe</p>
                    <p className="m-0">content@example.com</p>
                </div>
            </div>
        </>
    );
};

export default Contact;
