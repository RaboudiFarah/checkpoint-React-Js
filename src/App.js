
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
   <div>
 <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Start UP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#gallery">Gallery</Nav.Link>
            <Nav.Link href="#project">Project</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <container id ="main-container" className="d-grid h-100 ">
      <Form id="sign-up-form" className="text-center w-100">
     <img  className=' mt-5 mb-1 logo'
     src="https://img.freepik.com/premium-vector/startup-logo-business-project-business-concept-identity-symbol_136321-649.jpg?w=740"
    alt="start up"/>
    <h1 className="mb-4 sf-3 fw-normal"> Please sign in !</h1>

     <Form.Group className="mt-1" controlId="formBasicEmail">
        
        <Form.Control size ="lg"  type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-4" controlId="formBasicPassword">
        
        <Form.Control type="password" size = "lg"  placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3 d-flex justify-content-center" controlId="formBasicCheckbox">
        <Form.Check  type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </container>
   </div>
  );
}

export default App;
