import './NavBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';




const NavBar = () => {
  return (
    <>
        <Navbar className='navBar'  bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img className='logo' src='../realscorelogo.png' alt='BrandLogo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
             <Nav.Link  href="#home">Home</Nav.Link>
            <Nav.Link href="#link">All Results</Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Nav id='nav' className="d-flex flex-row justify-content-center">
        <NavDropdown title="Competitions" id="nav-dropdown">
       <NavLink to={'/competition/england-premier-league'}>Premier League</NavLink> 
        <NavDropdown.Item>Spain La Liga</NavDropdown.Item>
        <NavLink to={'/competition/Argentina'}>Argentina</NavLink>
      </NavDropdown>
      </Nav>
    </>

    
    
  )
}

export default NavBar