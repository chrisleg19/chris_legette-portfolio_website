import Accordion from "react-bootstrap/Accordion";
import Table from "react-bootstrap/Table";
import {Container, Row, Col} from "react-bootstrap"


const Resume = () => {


  return (
    <div className="resumeContainer">
      <h3 style={{ textAlign: "center" }}>Resume</h3>
      <Accordion alwaysOpen>
      <Accordion.Item eventKey="0">
          <Accordion.Header id="summary">Summary</Accordion.Header>
          <Accordion.Body>
          Full Stack Developer with hands-on technical training in HTML, CSS,
        JavaScript, Node.JS, React, Express, MongoDB, and APIs. A strong
        background in Logistics, Operations, and Management. Recently completed
        550+ hours of software development training within an agile environment,
        encompassing the Software Development Life Cycle. Exposure to various
        technologies such as SAP, ServiceNow, and Azure.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header id="technicalSkills">
            Technical Skills
          </Accordion.Header>
          <Accordion.Body>
            <Table striped bordered hover variant="dark" responsive size="sm">
              <thead className="skillsHead">
                <tr>
                  <th>Coding Languages:</th>
                  <th>Libraries/Frameworks:</th>
                  <th>Software:</th>
                </tr>
              </thead>

              <tbody className="skillsBody">
                <tr>
                  <td>JavaScript</td>
                  <td>Node.js</td>
                  <td>SAP</td>
                </tr>

                <tr>
                  <td>HTML</td>
                  <td>React</td>
                  <td>ServiceNow</td>
                </tr>

                <tr>
                  <td colSpan={0}>CSS</td>
                  <td>Express</td>
                  <td>Azure</td>
                </tr>

                <tr>
                  <td>VBA</td>
                  <td>MongoDB</td>
                  <td>IncidentIQ</td>
                </tr>

                <tr>
                  <td>NoSQL</td>
                  <td>MOngoose</td>
                  <td>Microsoft Office Suite</td>
                </tr>

                <tr>
                  <td></td>
                  <td>Bootstrap</td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Education</Accordion.Header>
          <Accordion.Body>
            <ul>
              <div className="educationBlock">
                <h6>Per Scholas - Atlanta, GA</h6>
                <h6>Graduation Date: 11/2022</h6>
              </div>
              <li className="educationLi">
                550+ hours of daily coding in JavaScript, HTML, and
                CSS using Node.js, Express, MongoDB and React. Worked in an
                Agile environment and successfully deployed various projects
                utilizing SDLC.
              </li>
            </ul>

            <ul>
              <div className="educationBlock">
                <h6>Colorado Technical University - Colorado Springs, CO</h6>
                <h6>Graduation Date: 02/2019</h6>
              </div>
              <li className="educationLi">
                MBA in Operations & Supply Chain Management
              </li>
            </ul>

            <ul>
              <div className="educationBlock">
                <h6>Samford University - Birmingham, AL</h6>
              </div>
              <li className="educationLi">
                Bachelor of Arts Degree in Public Administration - Minor in
                Military Science
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>Certifications</Accordion.Header>
          <Accordion.Body className="certificateBlock">
            <Container>
              <Row>
                <Col xs={12} md={6}>
            <ul className="cert">
              <div className="certificateBlock">
                <li className="certificateLi">
                  Software Engineering Bootcamp
                </li>

                <p>November 2022</p>

                <img
                  alt="software_engineering_cert"
                  src={require("../resources/software_engineering_bootcamp.png")}
                  style={{ width: "100%", maxWidth: "300px" }}
                  id="myImg"
                />

             

                
              </div>
            </ul>
            </Col>
            <Col xs={12} md={6}>
            <ul className="cert">
              <div className="certificateBlock">
                <li className="certificateLi">
                  Lean Six Sigma Green Belt
                </li>
                
                <p>April 2016</p>

                <img
                  alt="software_engineering_cert"
                  src={require("../resources/SixSigmaGreenBeltCertificate.png")}
                  style={{ width: "100%", maxWidth: "300px" }}
                  id="myImg"
                />

             

                
              </div>
            </ul>
            </Col>
            </Row>
            </Container>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>Professional Experience</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Resume;
