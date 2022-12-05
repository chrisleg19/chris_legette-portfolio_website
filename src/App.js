import logo from "./logo.svg";
import "../src/CSS/App.css";
import { Container, Row, Col, Nav } from "react-bootstrap";
import SiteNavbar from "./components/SiteNavbar";
import AboutMeIntro from "./components/AboutMeIntro";
import ProjectsApps from "./components/ProjectsApps";
import ProjectsGames from "./components/ProjectsGames";
import Resume from "./components/Resume";
//React Bootstrap site: 
//https://react-bootstrap.github.io/

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row className="">
          <Col><SiteNavbar/></Col>
        </Row>
        <Row className="">
          <Col><AboutMeIntro/></Col>
        </Row>
        <Row className="">
          <Col><ProjectsApps/></Col>
          <Col><ProjectsGames/></Col>
        </Row>
        <Row className="">
          <Col><Resume/></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
