//Voici la liste des imports necessaires a l'implementation des differents elements du composant principal

import "bootstrap/dist/css/bootstrap.min.css";
import { Fragment } from "react";
import {
  Navbar,
  Container,
  Nav,
  Col,
  Row,
  Button,
  Card,
  Form,
} from "react-bootstrap";
import "./App.css";



export default function App() {
  return (

    //Voici le corps du composant principal
    <div className="App">
      
      <Fragment>
        
        <Navbar
          expand="lg"
          className="bg-body-tertiary"
          bg="dark"
          data-bs-theme="dark"
        >
          <Container>
            <Navbar.Brand href="#home">Chez Joe</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Accueil</Nav.Link>
                <Nav.Link href="#specialites">Nos Specialites</Nav.Link>
                <Nav.Link href="#nousContacter">Nous contacter</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      
        <h1>Bienvenue !</h1>
        <Row id="specialites">
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="/image1.jpg" />
              <Card.Body>
                <Card.Title>Cotes de boeuf</Card.Title>
                <Card.Text>
                     
                </Card.Text>
                <Button variant="primary">Commander</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="/image2.jpg" />
              <Card.Body>
                <Card.Title>Oeufs brouillés et frites</Card.Title>
                <Card.Text>
                     
                </Card.Text>
                <Button variant="primary">Commander</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="/image3.jpg" />
              <Card.Body>
                <Card.Title>Tutti Frutti</Card.Title>
                <Card.Text>
                  
                </Card.Text>
                <Button variant="primary">Commander</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <h2> Nous Contacter</h2>

        <Form id="nousContacter">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="primary">Envoyer</Button>
        </Form>
      </Fragment>
    </div>
  );
}
