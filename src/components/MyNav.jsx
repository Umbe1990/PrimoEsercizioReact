import { Container, Nav, Navbar, NavDropdown,InputGroup,Form  } from 'react-bootstrap';

function MyNav({filter}) {
    return (
        <>


            <Navbar expand="lg" className="bg-primary">
                <Container>
                    <Navbar.Brand href="#home">I-BOOK</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <InputGroup className="">

                                <Form.Control onChange={filter} aria-label="Text input with checkbox" placeholder="
        inserisci libro" />
                            </InputGroup>

                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Home</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            ;





        </>
    )
}

export default MyNav