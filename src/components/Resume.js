import Accordion from "react-bootstrap/Accordion";
import Table from "react-bootstrap/Table";

const Resume = () => {
  return (
    <div className="resumeContainer">
      <h3 style={{ textAlign: "center" }}>Resume</h3>
      <h6 className="professionalSummary">
        Full Stack Developer with hands-on technical training in HTML, CSS,
        JavaScript, Node.JS, React, Express, MongoDB, and APIs. A strong
        background in Logistics, Operations, and Management. Recently completed
        550+ hours of software development training within an agile environment,
        encompassing the Software Development Life Cycle. Exposure to various
        technologies such as SAP, ServiceNow, and Azure
      </h6>
      <Accordion alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Technical Skills</Accordion.Header>
          <Accordion.Body>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Coding Languages:</th>
                  <th>Libraries/Frameworks:</th>
                  <th>Software:</th>
                </tr>
              </thead>

              <tbody>
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
        <Accordion.Item eventKey="1">
          <Accordion.Header>Education</Accordion.Header>
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

        <Accordion.Item eventKey="2">
          <Accordion.Header>Certifications</Accordion.Header>
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

        <Accordion.Item eventKey="3">
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
