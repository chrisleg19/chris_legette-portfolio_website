import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';  

const SiteNavbar = () =>{
    return(
        <>  
    <Navbar fixed='top' bg="info" expand="lg">  
    <Container>  
      <Navbar.Brand href="#home">Chris Legette</Navbar.Brand>  
      <Navbar.Toggle aria-controls="basic-navbar-nav" />  
      <Navbar.Collapse id="basic-navbar-nav">  
        <Nav className="me-auto">  
          <Nav.Link href="#home">Projects</Nav.Link>  
          <Nav.Link href="#link">Games</Nav.Link>  
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