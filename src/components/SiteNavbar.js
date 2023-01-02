import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';  

const SiteNavbar = () =>{
    return(
        <>  
    <Navbar fixed='top' bg="dark" variant="dark" expand="lg" className='nav'>  
    <Container>  
      {/* <Navbar.Brand href="#home">Chris Legette</Navbar.Brand>   */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />  
      <Navbar.Collapse id="basic-navbar-nav">  
        <Nav className="me-auto">  
          <Nav.Link href="#projects">Projects</Nav.Link>  
          <Nav.Link href="#games">Games</Nav.Link>  
          <NavDropdown title="Resume" id="basic-nav-dropdown">  
          <NavDropdown.Item href="#summary">Summary</NavDropdown.Item> 
          <NavDropdown.Divider />
            <NavDropdown.Item href="#technicalSkills">Technical Skills</NavDropdown.Item>  
            <NavDropdown.Item href="#education">Education</NavDropdown.Item>  
            <NavDropdown.Item href="#certifications">Certifications</NavDropdown.Item>  
            <NavDropdown.Item href="#experience">Experience</NavDropdown.Item>  
            
             
          </NavDropdown> 
          <Nav.Link href="#projects">Makeiteasy.shop</Nav.Link>  
        </Nav>  
      </Navbar.Collapse>  
    </Container>  
  </Navbar>  
  {/* <header className='bg-primary mt-5 p-2'>Header Component</header>   */}
  </> 
    )

}

export default SiteNavbar