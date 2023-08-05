import { Container } from "semantic-ui-react";
import { Navbar } from "react-bootstrap";
import { FC, ReactNode } from "react";
import classes from "./NavbarComponent.module.css";

interface NavbarComponentInt {
    children?: ReactNode;
}

const NavbarComponent: FC<NavbarComponentInt> = ({ children }) => {
    const navbarTextClasses = `d-flex justify-content-end ${classes.navtext}`;
    return (
        <div>
            <Navbar bg="primary" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand></Navbar.Brand>
                    <Navbar.Text className={navbarTextClasses}>
                        Logo placeholder
                    </Navbar.Text>
                </Container>
            </Navbar>
            {children}
        </div>
    );
};

export default NavbarComponent;
