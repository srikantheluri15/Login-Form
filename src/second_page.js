import React  from "react";
import '../FORMS/second_page.css';
import {Table, Dropdown, Button, Navbar, Nav, Form, FormControl, Offcanvas } from 'react-bootstrap'
import { Container, Row, Col } from 'react-grid-system';
import Logo_1 from "../assets/Logo_1.png";


function Dashboard () {
  return ( 
    
    <Container>
       <Row>
         <Col sm={3} className="nav_bar_class span_vertical_line"s>
                <Navbar bg="white" expand={false}>
                <Container fluid>
                  <Navbar.Brand href="#"></Navbar.Brand>
                  <Navbar.Toggle aria-controls="offcanvasNavbar" />
                  <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="start"
                  >
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title id="offcanvasNavbarLabel">Albenus</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Link</Nav.Link>
                        
                      </Nav>
                      <Form className="d-flex">
                        <FormControl
                          type="search"
                          placeholder="Search"
                          className="me-2"
                          aria-label="Search"
                        />
                        <Button variant="outline-danger">Search</Button>
                      </Form>
                    </Offcanvas.Body>
                  </Navbar.Offcanvas>
                </Container>
              </Navbar>
         <hr
              style={{
                  color: "blue",
                  backgroundColor: "black",
                  height: 1
              }}
          />

         </Col> 
        
        

         <Col sm={9} className="second_col shadow p-3 mb-5 bg-white rounded">
           <div class="d-flex flex-row-reverse hover-shadow">
           <div className="icons notify">
           <p>username</p>
           </div>
           <div className="icons">
           <Dropdown>
              <Dropdown.Toggle variant="white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                      <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg>
             </Dropdown.Toggle>
           <Dropdown.Menu>
               <Dropdown.Item href="/forms" type="submit">Logout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
       
            
           </div>
           <div className="icons notify">
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
            </svg>
           </div>
           </div>
         </Col>
         
        </Row>
        <Row className="img_row">
          <Col sm={3} className="img_col">
          <img src={Logo_1} />
          <br/>
          <hr
              style={{
                  color: "black",
                  backgroundColor: "black",
                  height: 1
              }}
          />
          </Col>
          <Col sm={9}>
            <div>
              <h3 className="reports_text">Reports</h3>
            </div>
            </Col>
            </Row>
            <Row>
            <Col sm={3}>
            <div>
              <p className="sidebar">Reports</p>
            </div>
          </Col>
              <Col sm={9}>
          <div className="card1 shadow">
          <Container>
                {/* Stack the columns on mobile by making one full-width and the other half-width */}
                <Row>
                  <Col className="inside_grid" xs={6} md={4}>
                    <div className="row">
                    <div className="col-sm-10"> <p>WIP Profile</p></div>
                    <div className="round_number col-sm-2"> <p>2</p></div>
                    </div>
                  </Col>
                  <Col className="inside_grid" xs={6} md={4}>
                  <div className="row">
                    <div className="col-sm-10"> <p>Interim Reports</p></div>
                    <div className="round_number col-sm-2"> <p>0</p></div>
                    </div>                  </Col>
                  <Col className="inside_grid" xs={6} md={3}>
                  <div className="row">
                    <div className="col-sm-10"> <p>Rejected Reports</p></div>
                    <div className="round_number col-sm-2"> <p>2</p></div>
                    </div>                  </Col>
                </Row>

                {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
                <Row>
                  <Col className="inside_grid" xs={6} md={4}>
                  <div className="row">
                    <div className="col-sm-10"> <p>Pending Final Reports</p></div>
                    <div className="round_number col-sm-2"> <p>2</p></div>
                    </div>                  </Col>
                  <Col className="inside_grid" xs={6} md={4}>
                  <div className="row">
                    <div className="col-sm-10"> <p>Copleted Reports</p></div>
                    <div className="round_number col-sm-2"> <p>0</p></div>
                    </div>                  </Col>
                 
                </Row>
                <Row>
                  <Col className="inside_grid" xs={6} md={4}>
                  <div className="row">
                    <div className="col-sm-10"> <p>Reports Pending Approval</p></div>
                    <div className="round_number col-sm-2"> <p>0</p></div>
                    </div>                  </Col>
                  <Col className="inside_grid" xs={6} md={4}>
                  <div className="row">
                    <div className="col-sm-10"> <p>ReOpened Reports</p></div>
                    <div className="round_number col-sm-2"> <p>0</p></div>
                    </div>                  </Col>
                  
                </Row>
        </Container>
          </div> <br/>
          <div className="d-flex justify-content-between">

          
          <div>
          <Dropdown>
            <Dropdown.Toggle variant="white" id="dropdown-basic">
              Report Status
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </div> 
          <div>
            <input type="search" placeholder="search bsy Id/Name"className="bi bi-search"/>
          </div>
          </div>
          <br/>
          <div>
            <Table responsive>
                <thead>
                  <tr className="table_head">
                  <th>Profile Initi Date</th>
                  <th>Submit Date</th>
                  <th>Profile Created Date</th>
                  <th>Profile Type (Online/Offline)</th>
                  <th>Priority</th>
                  <th>Remark</th>
                  <th>Profile Status</th>
                  <th>Status Code</th>
                  <th>Report Type</th>
                  <th>Action</th>
                  <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2</td>
                    <td >04-07-2021</td>
                    <td>06-08-2021</td>
                    <td >Online</td>
                    <td>Fast-Track</td>
                    <td >Pending Reports</td>
                    <td >Final</td>
                    <td>ABC</td>
                    <td >123</td>
                    <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                      </svg>
                     </td>
                     <td>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                          <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                          <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                        </svg>
                     </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td >04-07-2021</td>
                    <td>06-08-2021</td>
                    <td >Online</td>
                    <td>Fast-Track</td>
                    <td >Pending Reports</td>
                    <td >Final</td>
                    <td>ABC</td>
                    <td >123</td>
                    <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                      </svg>
                     </td>
                     <td>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                          <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                          <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                        </svg>
                     </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td >06-03-2021</td>
                    <td>07-01-2021</td>
                    <td >Offline</td>
                    <td>Fast-Track</td>
                    <td >Pending Reports</td>
                    <td >Final</td>
                    <td>ABC</td>
                    <td >153</td>
                    <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                      </svg>
                     </td>
                     <td>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                          <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                          <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                        </svg>
                     </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td >04-07-2021</td>
                    <td>06-08-2021</td>
                    <td >Online</td>
                    <td>Fast-Track</td>
                    <td >Pending Reports</td>
                    <td >Final</td>
                    <td>ABC</td>
                    <td >123</td>
                    <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                      </svg>
                     </td>
                     <td>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                          <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                          <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                        </svg>
                     </td>
                  </tr>
                 
                </tbody>
            </Table>
          </div>
          </Col>
          
        </Row>
     </Container>
     
   );
 
}

export default Dashboard