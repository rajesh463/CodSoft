import React from "react";
import Marquee from "react-fast-marquee";
import { Row, Col, Container } from "react-bootstrap";
import "../../components/HomeContent/NoticeBoard.css";
import vision from '../../components/images/vision.png'
import mission from '../../components/images/mission.png'

class NoticeBoard extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col lg={8}>
              <div className="">
                <h1 className="homepage-headings">Vision</h1>
                <img className='vision-img' src={vision} />
                <p className="vision-NoticeBoard">
                  Education for masses is principal instrument and the tool for
                  eradication of all pervasive social evils and desirable
                  effective social change. Education through self-help is a
                  significant and chief drive of social change to achieve
                  different tasks of nation building by establishing social
                  equality and social justice.
                  
                </p>
                <p className="vision-NoticeBoard">
                Our vision is to develop well rounded, confident and responsible individuals who aspire to achieve their full potential. We will do this by providing a welcoming, happy, safe, and supportive learning environment in which everyone is equal and all achievements are celebrated
                  
                </p>
              </div>
              <div className="">
                <h1 className="homepage-headings">Mission</h1>
                <img className='mission-img' src={mission} />
                <ul><li>Ignite a passion for education in all learners.
            </li><li>Thrive in a data rich world altoghether towards the successful future of our students
              </li><li>
                Help in improvement of human health and spread awareness about physical and mental health issues</li><li>
                Develop sustainable materials to power our planet and future of this nation</li>
              <li>
                Move discoveries from the lab to people's lives through our students</li></ul>
              </div>
            </Col>
            <Col lg={4}>
            <h1 className="homepage-headings">NOTICEBOARD</h1>
              <div className="microsoft container">
                <p class="marquee-notice"><li>All branches students are informed to wear masks while entering school campus as maks are mandatoru to enter in the school premises</li>

                </p>         <br />
                <p class="marquee-notice">

                  <li>Exam form id to be filled as soon as possible or extra fees are to concelled by the examination construct team, if active backlogs (any) exam fees are adjusted accordingly</li>
                </p>         <br />
                <p class="marquee-notice">


                  <li>Students are informed that wearing uniforms is a compulsion from wednesday</li></p>
                  <br />
                <p class="marquee-notice"><li>All branches students are informed to wear masks while entering school campus as maks are mandatoru to enter in the school premises</li>

                </p>
           

              </div>

            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default NoticeBoard;
