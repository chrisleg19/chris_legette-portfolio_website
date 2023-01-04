import Accordion from "react-bootstrap/Accordion";
import Table from "react-bootstrap/Table";
import { Container, Row, Col } from "react-bootstrap";

const Resume = () => {
  return (
    <div className="resumeContainer">
      <h3 style={{ textAlign: "center", marginBottom:"1rem"}}>Resume</h3>
      <Accordion alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header id="summary">Summary</Accordion.Header>
          <Accordion.Body>
            Full Stack Developer with hands-on technical training in HTML, CSS,
            JavaScript, Node.JS, React, Express, MongoDB, and APIs. A strong
            background in Logistics, Operations, and Management. Recently
            completed 550+ hours of software development training within an
            agile environment, encompassing the Software Development Life Cycle.
            Exposure to various technologies such as SAP, ServiceNow, and Azure.
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
          <Accordion.Header id="education">Education</Accordion.Header>
          <Accordion.Body>
            <ul>
              <div className="educationBlock">
                <h6>Per Scholas - Atlanta, GA</h6>
                <h6>Graduation Date: 11/2022</h6>
              </div>
              <li className="educationLi">
                550+ hours of daily coding in JavaScript, HTML, and CSS using
                Node.js, Express, MongoDB and React. Worked in an Agile
                environment and successfully deployed various projects utilizing
                SDLC.
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
          <Accordion.Header id="certifications">Certifications</Accordion.Header>
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
          <Accordion.Header id="experience">Professional Experience</Accordion.Header>
          <Accordion.Body>
            <ul style={{ padding: 0 }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h6>Per Scholas - Full Stack Developer Intern (Atlanta, GA)</h6>
                <h6>July 2022 - November 2022</h6>
              </div>
              <div>
                <li style={{ marginLeft: "3em" }}>
                  Applied MERN stack to develop a full CRUD blog application
                  with server-side rendering
                </li>
              </div>

              <div>
                <li style={{ marginLeft: "3em" }}>
                  Created single page applications using React with client-side
                  routing through React Router
                </li>
              </div>

              <div>
                <li style={{ marginLeft: "3em" }}>
                  Created and used REST APIs in various applications to manage
                  data between client and server
                </li>
              </div>

              <div>
                <li style={{ marginLeft: "3em" }}>
                  Implemented AJAX programming in React applications to
                  dynamically access JSON data from databases
                </li>
              </div>

              <div>
                <li style={{ marginLeft: "3em" }}>
                  Used JWT Authentication in applications, storing tokens in
                  client-side cookies, local storage, and session storage
                </li>
              </div>

              <div>
                <li style={{ marginLeft: "3em" }}>
                  Developed a simulation game using DOM manipulation to
                  dynamically update content
                </li>
              </div>

              <div>
                <li style={{ marginLeft: "3em" }}>
                  Designed and created responsive UI applications using
                  wireframes, CSS, HTML, and JavaScript
                </li>
              </div>

              <div>
                <li style={{ marginLeft: "3em" }}>
                  Utilized Git as the version control system to manage projects
                  and collaborate with fellow developers
                </li>
              </div>

              <div>
                <li style={{ marginLeft: "3em" }}>
                  Used Bash to manage Git repositories and read/write files on
                  local operating system through command lines
                </li>
              </div>

              <div>
                <li style={{ marginLeft: "3em" }}>
                  GitHub:{" "}
                  <a href="https://github.com/chrisleg19/" target="_blank" rel="noopener noreferrer">
                    https://github.com/chrisleg19/
                  </a>
                </li>
              </div>
            </ul>

            <ul style={{ padding: 0 }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h6>
                  Makeiteasy.shop - Business Owner/Consultant (Atlanta, GA)
                </h6>
                <h6>June 2021 - Present</h6>
              </div>
              <div>
                <li style={{ marginLeft: "3em" }}>
                  Prepared clients for ISO2015:9001 QMS audit, with 100% pass
                  rate
                </li>
              </div>

              <div>
                <li style={{ marginLeft: "3em" }}>
                  Logistics and Operations Management consultation/services -
                  Manufacturing; Warehousing; Transportation
                </li>
              </div>

              <div>
                <li style={{ marginLeft: "3em" }}>
                  Sell products and gadgets that facilitate personal and
                  professional tasks
                </li>
              </div>
            </ul>

            <ul style={{ padding: 0 }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h6>Enplas USA - Logistics Manager (Atlanta, GA)</h6>
                <h6>March 2022 – May 2022</h6>
              </div>
              <div>
                <li style={{ marginLeft: "3em" }}>
                  Managed inventory of manufactured auto parts valued over $5M,
                  with 99% inventory accuracy
                </li>
              </div>

              <div>
                <li style={{ marginLeft: "3em" }}>
                  Executed 100% of deliveries on time with zero quality escapes
                </li>
              </div>

              <div>
                <li style={{ marginLeft: "3em" }}>
                  Responsible for purchasing of raw material and supplier
                  contracts valued up to $2M
                </li>
              </div>
            </ul>

            <ul style={{ padding: 0 }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h6>
                  Prologic ITS - Director of Warehouse Operations (Atlanta, GA)
                </h6>
                <h6>July 2018 – October 2021</h6>
              </div>
              <div>
                <li style={{ marginLeft: "3em" }}>
                  Optimized 150,000+ sq. ft. of warehouse space to improve
                  overall capacity and bottom line, increasing receiving
                  productivity by 26% and shipping productivity by 43%
                </li>
              </div>

              <div>
                <li style={{ marginLeft: "3em" }}>
                  Maintained a quality management system to ensure customer
                  satisfaction and annual ISO 9001:2015 recertifications
                </li>
              </div>

              <div>
                <li style={{ marginLeft: "3em" }}>
                  Managed operations of multiple value-added warehouses
                  (140,000-sq. ft. & 100+ employees) for an IT services company
                  providing various solutions such as warehousing, logistics,
                  asset management, and hardware installations
                </li>
              </div>
            </ul>

            <ul style={{ padding: 0 }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h6>Honeywell Aerospace (Atlanta, GA)</h6>
                <h6>June 2015 – July 2018 </h6>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h6>Site Operations Manager</h6>
                <h6>January 2018 – July 2018</h6>
              </div>
              <div>
                <li style={{ marginLeft: "3em" }}>
                  Executed the implementation of SAP as a member of the ERP
                  transition team, responsible for inventory data migration and
                  workflow optimization
                </li>
              </div>

              <div>
                <li style={{ marginLeft: "3em" }}>
                  Collaborate with cross functional teams on demand planning and
                  continuous process improvement
                </li>
              </div>

              <div>
                <li style={{ marginLeft: "3em" }}>
                  Utilized project management skills and Lean Six-Sigma
                  principles to assist in the planning and development of a
                  20,000-sq. ft. manufacturing lab for Honeywell’s Fuselage
                  Mount Antenna production line.
                </li>
              </div>
            </ul>

            <ul style={{ padding: 0 }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h6>Production Supervisor</h6>
                <h6>August 2016 – July 2018</h6>
              </div>
              <div>
                <li style={{ marginLeft: "3em" }}>
                  Coordinated assembly and testing schedules for production and
                  repair of Honeywell’s Fuselage Mount Antenna to align with
                  sales and planning
                </li>
              </div>

              <div>
                <li style={{ marginLeft: "3em" }}>
                  Managed departmental budget for indirect materials and
                  supplies within the manufacturing lab to meet organizational
                  goals
                </li>
              </div>

              <div>
                <li style={{ marginLeft: "3em" }}>
                  Developed and maintained cross training program for
                  technicians and assemblers to increase capabilities and
                  productivity
                </li>
              </div>
            </ul>

            <ul style={{ padding: 0 }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h6>Logistics Manager</h6>
                <h6>June 2015 – July 2018</h6>
              </div>
              <div>
                <li style={{ marginLeft: "3em" }}>
                  Stored, transported, and delivered goods for Honeywell
                  Norcross, a 190,000-sq. ft. manufacturing facility (270+
                  employees; 15+ space, defense, & commercial programs)
                </li>
              </div>

              <div>
                <li style={{ marginLeft: "3em" }}>
                  Eliminated a backlog of 300+ customer assets in receiving,
                  reducing turnaround time by 91%
                </li>
              </div>

              <div>
                <li style={{ marginLeft: "3em" }}>
                  Awarded Honeywell Norcross’s Productivity Award for completing
                  various projects and improving processes to save 6,800-man
                  hours/year
                </li>
              </div>
            </ul>

            <ul style={{ padding: 0 }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h6>
                  U.S. Army Medical Materiel Center Southwest-Asia - Operations
                  Officer (Qatar)
                </h6>
                <h6>April 2014 – June 2015</h6>
              </div>
              <div>
                <li style={{ marginLeft: "3em" }}>
                  Established fluid internal operations for a medical supply and
                  distribution center in the US Army with annual demands
                  exceeding $50M and serving 228+ deployed joint customers
                </li>
              </div>

              <div>
                <li style={{ marginLeft: "3em" }}>
                  Received the Army Commendation Medal while at USAMMC-SWA for:
                  <div style={{ marginLeft: "3em" }}>
                    <li style={{ listStyle: "circle" }}>
                      Managing the shipment of 400+ tons of medical materiel
                      using military assets, which had a cost avoidance of
                      approximately $400,000 per month
                    </li>
                    <li style={{ listStyle: "circle" }}>
                      Distributing cold chain shipments accounted for $1.5M+ and
                      included the influenza vaccine used to immunize Soldiers
                      and DoD Civilians during the 2014 flu season
                    </li>
                    <li style={{ listStyle: "circle" }}>
                      Coordinating shipment of equipment valued $500,000+ for
                      Soldiers into and out of theater without loss or damage to
                      government property, also coordinated over 30 trips of
                      personnel traveling to Kuwait, Afghanistan, Iraq, and
                      Jordan
                    </li>
                  </div>
                </li>
              </div>
            </ul>

            <ul style={{ padding: 0 }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h6>
                  U.S. Army Reserves 3rd Medical Command Deployment Support -
                  Logistics Officer (Atlanta,GA)
                </h6>
                <h6>June 2011 – April 2014</h6>
              </div>
              <div>
                <li style={{ marginLeft: "3em" }}>
                  Managed logistics for 70+ medical units in the U.S Army
                  Reserves under 3rd MCDS Headquarters
                </li>
              </div>

              <div>
                <li style={{ marginLeft: "3em" }}>
                  Established and maintained a database to enhance the
                  supervision of equipment status under the 3rd MCDS, resulting
                  in an increase of readiness by 83%
                </li>
              </div>

              <div>
                <li style={{ marginLeft: "3em" }}>
                  Team Lead for Command Supply Discipline Program Inspections
                  for training on inventory management, warehouse and storage
                  management, stock control requirements, receipt, and issue of
                  supplies for all units under the command
                </li>
              </div>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Resume;
