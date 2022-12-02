

import {Nav, Navbar, Container, NavDropdown , Dropdown} from 'react-bootstrap';  


const TestComponent = () =>{
    return(
        <div>


<Navbar bg="primary" expand="md">  
    <Container>  
      <Navbar.Brand href="#home">Navbar Brand</Navbar.Brand>  
      <Navbar.Toggle aria-controls="basic-navbar-nav" />  
      <Navbar.Collapse id="basic-navbar-nav">  
        <Nav className="me-auto">  
          <Nav.Link href="#home">Home</Nav.Link>  
          <Nav.Link href="#link">Link</Nav.Link>  
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">  
            <NavDropdown.Item href="#action/3.1">Dropdown Item 1</NavDropdown.Item>  
            <NavDropdown.Item href="#action/3.2">Dropdown Item 2</NavDropdown.Item>  
            <NavDropdown.Item href="#action/3.3">Dropdown Item 3</NavDropdown.Item>  
            <NavDropdown.Divider />  
            <NavDropdown.Item href="#action/3.4">Another Item</NavDropdown.Item>  
          </NavDropdown>  
        </Nav>  
      </Navbar.Collapse>  
    </Container>  
  </Navbar> 







            <h1>Test Component</h1>


            <Container className='p-4'>  
   <Dropdown>  
  <Dropdown.Toggle variant=" primary" id="dropdown-basic">  
    Dropdown Navigation Button  
  </Dropdown.Toggle>  
  
  <Dropdown.Menu>  
    <Dropdown.Item href="#/action-1">Dropdown Item 1</Dropdown.Item>  
    <Dropdown.Item href="#/action-2">Dropdown Item 2</Dropdown.Item>  
    <Dropdown.Item href="#/action-3">Dropdown Item 3</Dropdown.Item>  
    <Dropdown.Item href="#/action-3">Dropdown Item 4</Dropdown.Item>  
  </Dropdown.Menu>  
</Dropdown>  
</Container>
        



        </div>
    )

}

export default TestComponent