import logo from "./logo.svg";
import "../src/CSS/App.css";
import { Container, Row, Col, Nav } from "react-bootstrap";
import SiteNavbar from "./components/SiteNavbar";
import AboutMeImg from "./components/AboutMeImg";
import ProjectsApps from "./components/ProjectsApps";
import ProjectsGames from "./components/ProjectsGames";
import Resume from "./components/Resume";
import AboutMeText from "./components/AboutMeText";
//React Bootstrap site: 
//https://react-bootstrap.github.io/

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row className="">
          <Col><SiteNavbar/></Col>
        </Row>
        <Row className="aboutMeRow">
          <Col xs={12} md={6}><AboutMeImg className="aboutMeImg"/></Col>
          <Col xs={12} md={6}><AboutMeText/></Col>
        </Row>
        <Row className="applications">
          <Col xs={12} md={6}><ProjectsApps/></Col>
          <Col xs={12} md={6}><ProjectsGames/></Col>
        </Row>
        <Row className="">
          <Col><Resume/></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
