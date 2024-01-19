
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Accordion } from 'react-bootstrap';

import "../Courses/courses.css";

const Science = () => {
  return (
    <div className='Program-div'>
       <h1 className="program-headings">SCIENCE SECTION</h1>
       <Accordion defaultActiveKey="0">
        <Accordion.Item className='Program-div-Accordion' eventKey="1">
          <Accordion.Header>Vision</Accordion.Header>
          <Accordion.Body>
            The vision of Science & Technology Department is to engage the people of the state in science, the students to cultivate and enrich science education, research, innovation and communication, and the industry and academia to partner in pursuit of promoting science and technology and strengthening the scientific capability of the state.
          </Accordion.Body>
      </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="0">
        <Accordion.Item className='Program-div-Accordion' eventKey="1">
          <Accordion.Header>Mission</Accordion.Header>
          <Accordion.Body>
            <ul><li>Ignite a passion for science in all learners.
            </li><li>Thrive in a data rich world
              </li><li>
                Improve human and ocean health</li><li>
                Develop sustainable materials to power our planet</li>
              <li>
                Move discoveries from the lab to people's lives.</li>
                <li>
                Improve human and ocean health</li><li>
                Develop sustainable materials to power our planet</li>
              <li>
                Move discoveries from the lab to people's lives.</li></ul>

          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion className='Program-div-Accordion' defaultActiveKey="0">
        <Accordion.Item eventKey="1">
          <Accordion.Header>Timetable</Accordion.Header>
          <Accordion.Body>
            <table className='timetable-program' border={1} cellSpacing={0} align="center">
              {/*<caption>Timetable</caption>*/}
              <tbody><tr>
                <td align="center" height={50} width={100}><br />
                  <b>Day/Period</b><br />
                </td>
                <td align="center" height={50} width={100}>
                  <b>I<br />9:30-10:20</b>
                </td>
                <td align="center" height={50} width={100}>
                  <b>II<br />10:20-11:10</b>
                </td>
                <td align="center" height={50} width={100}>
                  <b>III<br />11:10-12:00</b>
                </td>
                <td align="center" height={50} width={100}>
                  <b>12:00-12:40</b>
                </td>
                <td align="center" height={50} width={100}>
                  <b>IV<br />12:40-1:30</b>
                </td>
                <td align="center" height={50} width={100}>
                  <b>V<br />1:30-2:20</b>
                </td>
                <td align="center" height={50} width={100}>
                  <b>VI<br />2:20-3:10</b>
                </td>
                <td align="center" height={50} width={100}>
                  <b>VII<br />3:10-4:00</b>
                </td>
              </tr>
                <tr>
                  <td align="center" height={50}>
                    <b>Monday</b></td>
                  <td align="center" height={50}>Eng</td>
                  <td align="center" height={50}>Mat</td>
                  <td align="center" height={50}>Che</td>
                  <td rowSpan={6} align="center" height={50}>
                    <h3 className='h2-program'>L<br />U<br />N<br />C<br />H</h3>
                  </td>
                  <td colSpan={3} align="center" height={50}>LAB</td>
                  <td align="center" height={50}>Phy</td>
                </tr>
                <tr>
                  <td align="center" height={50}>
                    <b>Tuesday</b>
                  </td>
                  <td colSpan={3} align="center" height={50}>LAB
                  </td>
                  <td align="center" height={50}>Eng</td>
                  <td align="center" height={50}>Che</td>
                  <td align="center" height={50}>Mat</td>
                  <td align="center" height={50}>SPORTS</td>
                </tr>
                <tr>
                  <td align="center" height={50}>
                    <b>Wednesday</b>
                  </td>
                  <td align="center" height={50}>Mat</td>
                  <td align="center" height={50}>phy</td>
                  <td align="center" height={50}>Eng</td>
                  <td align="center" height={50}>Che</td>
                  <td colSpan={3} align="center" height={50}>LIBRARY
                  </td>
                </tr>
                <tr>
                  <td align="center" height={50}>
                    <b>Thursday</b>
                  </td>
                  <td align="center" height={50}>Phy</td>
                  <td align="center" height={50}>Eng</td>
                  <td align="center" height={50}>Che</td>
                  <td colSpan={3} align="center" height={50}>LAB
                  </td>
                  <td align="center" height={50}>Mat</td>
                </tr>
                <tr>
                  <td align="center" height={50}>
                    <b>Friday</b>
                  </td>
                  <td colSpan={3} align="center" height={50}>LAB
                  </td>
                  <td align="center" height={50}>Mat</td>
                  <td align="center" height={50}>Che</td>
                  <td align="center" height={50}>Eng</td>
                  <td align="center" height={50}>Phy</td>
                </tr>
                <tr>
                  <td align="center" height={50}>
                    <b>Saturday</b>
                  </td>
                  <td align="center" height={50}>Eng</td>
                  <td align="center" height={50}>Che</td>
                  <td align="center" height={50}>Mat</td>
                  <td colSpan={3} align="center" height={50}>SEMINAR
                  </td>
                  <td align="center" height={50}>SPORTS</td>
                </tr>
              </tbody></table>
              </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        <Accordion className='Program-div-Accordion' defaultActiveKey="0">
        <Accordion.Item eventKey="1">
          <Accordion.Header>Curriculam</Accordion.Header>
          <Accordion.Body>
            <a href='https://drive.google.com/file/d/13CifvlJ6NWDkSMZ63S9JQ4HNwP8ljFDI/view?usp=drivesdk' target={'_blank'} >11th &   12th - CHEMISTRY  </a>
            <br/>
            <a href='https://drive.google.com/file/d/133UVr_RicBv6FeApmcCh437w_cvFAj7n/view?usp=drivesdk' target={'_blank'} >11th &   12th - PHYSICS  </a>
            <br/>
            <a href='http://www.mahahsscboard.in/hsc_syllabus_pdf/h40.pdf' target={'_blank'} >11th &   12th - MATHEMATICS </a>
            <br/>
            <a href='http://www.mahahsscboard.in/hsc_syllabus_pdf/h56.pdf' target={'_blank'} >11th &   12th - BIOLOGY </a>
            <br/>
            <a href='http://www.mahahsscboard.in/hsc_syllabus_pdf/H01.pdf' target={'_blank'} >11th &   12th - ENGLISH  </a>
            <br/>
            <a href='http://www.mahahsscboard.in/hsc_syllabus_pdf/H02.pdf' target={'_blank'} >11th &   12th - MARATHI </a>

          </Accordion.Body>
        </Accordion.Item>

      </Accordion>
    </div>
  );
}

export default Science;