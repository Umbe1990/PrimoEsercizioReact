import { Container, Nav, Navbar, NavDropdown,InputGroup,Form,Button  } from 'react-bootstrap';
import { ThemeContext } from '../context/ThemeContextProvider';
import { useContext } from 'react';

function MyNav({filter}) {
    const{theme,toggleTheme}=useContext(ThemeContext) ////importato per cambiare sfondo delle navbar
    return (
        <>


            <Navbar expand="lg" >
                <Container className={theme==='light'?'':'text-light bg-danger'}>
                    <Navbar.Brand href="#home">I-BOOK</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <InputGroup className="">
                            <Button onClick={toggleTheme} variant="primary">{theme==='light'? 'cambia in dark':'rimetti light'}</Button>

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