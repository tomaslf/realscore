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
        <Navbar.Brand href={"/"}><img className='logo' src='../realscorelogo.png' alt='BrandLogo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
             <Nav.Link  href={"/"}>Home</Nav.Link>
            <Nav.Link href={"/"}>All Results</Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Nav id='nav' className="d-flex flex-row justify-content-center">
        <NavDropdown title="Competitions" id="nav-dropdown">
          <li><NavLink className="link" to={'/competition/england-premier-league'}>Premier League</NavLink></li>
          <li><NavLink className="link" to={'/competition/spain-la-liga'}>Spain La Liga</NavLink></li>
          <li><NavLink className="link" to={'/competition/italy-serie-a'}>Serie A</NavLink></li>
          <li><NavLink className="link" to={'/competition/france-ligue-1'}>Ligue 1</NavLink></li>
          <li><NavLink className="link" to={'/competition/germany-bundesliga'}>Bundesliga</NavLink></li>
          
      </NavDropdown>
      </Nav>
    </>

    
    
  )
}

export default NavBar