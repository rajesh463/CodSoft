import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import principal from "../../components/images/principal.jpg";
import "../../components/HomeContent/Principal.css";

const Principal = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={8}>
            <h1 className="homepage-headings">Principal Desk</h1>
            <div className="Principal-div">
              <br />
              <img className="principal-img" src={principal} />
              <h4 className="text-principal"> Prof. P N Kharmale</h4>
              <div> Principal</div>
            </div>
            <br />
            <div className="principal-msg">
            <p>
              {" "}
              High School is a monumental institution started on June 20, 1966
              in memory of a veteran educationist and social activist Saheb of
              this region who had devoted all his life in the development of
              Junner tehsil in Pune district with the hurricane efforts of
              hundreds and thousands of activists.
            </p>
            <p>
              {" "}
              Our goal is to support the students for their overall development.
              We take efforts to make our students able to face challenges and
              stand confidently in the increasingly complex world.
            </p>
            <p>
              {" "}
              The incredible faculty and staff at Government Polytechnic Awasari
              (Khurd) continue to encourage all students to set high goals for
              themselves and to reach their dreams. To achieve our mission and
              vision we will continue to develop and grow leaders in our
              institute High School is a monumental institution started on June
              20, 1966 in memory of a veteran educationist and social activist
              Saheb of this region who had devoted all his life in the
              development of Junner tehsil in Pune district with the hurricane
              efforts of hundreds and thousands of activists.
            </p>
            </div>
    
          </Col>
          <Col lg={4}>
            <div>
              <div className="container">
                <h1 className="homepage-headings">Events</h1>
              </div>
              <div className="events-principal">
              <Link to="hi 11">Covid Vaccination for age group 15+</Link>
              <br />
              <Link to="hi">
                Online guest lectures for importance of education
              </Link>
              <br />
              <Link to="/">World Science Day</Link>
              <br />
              <Link to="/">Covid-19 Vaccination Drive for Students</Link>

              <Link to="hi 11">Covid Vaccination for age group 15+</Link>
              <br />
              <Link to="hi">
                Online guest lectures for importance of education
              </Link>
              <br />
              <Link to="/">World Science Day</Link>
              <br />
              <Link to="/">Covid-19 Vaccination Drive for Students</Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Principal;
