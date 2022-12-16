import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';  

const SiteNavbar = () =>{
    return(
        <>  
    <Navbar fixed='top' bg="dark" variant="dark" expand="lg" className='nav'>  
    <Container>  
      <Navbar.Brand href="#home">Chris Legette</Navbar.Brand>  
      <Navbar.Toggle aria-controls="basic-navbar-nav" />  
      <Navbar.Collapse id="basic-navbar-nav">  
        <Nav className="me-auto">  
          <Nav.Link href="#projects">Projects</Nav.Link>  
          <Nav.Link href="#games">Games</Nav.Link>  
          <NavDropdown title="Resume" id="basic-nav-dropdown">  
            <NavDropdown.Item href="#action/3.1">Education</NavDropdown.Item>  
            <NavDropdown.Item href="#action/3.2">Experience</NavDropdown.Item>  
            <NavDropdown.Item href="#action/3.3">Achievements</NavDropdown.Item>  
            <NavDropdown.Divider />  
            <NavDropdown.Item href="#action/3.4">Makeiteasy.shop</NavDropdown.Item>  
          </NavDropdown>  
        </Nav>  
      </Navbar.Collapse>  
    </Container>  
  </Navbar>  
  {/* <header className='bg-primary mt-5 p-2'>Header Component</header>   */}
  </> 
    )

}

export default SiteNavbar