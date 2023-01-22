import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from "@mui/material/Button";

import { NavLink } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="light" expand="sm" className='navbar'>
      <Container>
          <Nav className="mx-auto">
            <NavLink to="/about" ><Button>About</Button></NavLink>
            <NavLink to="/admissions" ><Button>ADMISSIONS</Button></NavLink>
            <NavLink to="/academics" ><Button>ACADEMICS</Button></NavLink>
            <NavLink to="/athletics" ><Button>ATHLETICS</Button></NavLink>
            <NavLink to="/student-life" ><Button>STUDENT LIFE</Button></NavLink>
            <NavLink to="/support-bc" ><Button>SUPPORT BC</Button></NavLink>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
