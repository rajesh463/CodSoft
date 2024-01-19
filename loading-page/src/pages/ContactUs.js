import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react'
import "./ContactUs.css";
import { Row, Col, Container } from 'react-bootstrap';
import map from './map';


class ContactUs extends Component {
  render() {
    return (<>
      <Container>
        <Row md={10}>
          <h1 className='homepage-headings'>Contact Us</h1>
        </Row>
      </Container>
      <Container className='ContactUs-div'>

        <Row >



          <Col lg={5} md={12} className='Map-info' >

            <h4>High School Addmission Managment</h4>
            At post : Narayangaon<br />
            Tal:Junner , Dist:Pune<br />
            Ph. No. : 02133-XX123<br />
            Principal Ph. No. : XX123-230200 <br />
            Fax no:1234XXX546<br />
            E-mail:hsam@gmail.com<br />
            <br /><br /><br /><br /><br /><br />
            <br />
          </Col>
          <Col lg={5} md={12} className='Map'>
            <div className='Map-div'>
              <Map
                google={this.props.google}
                style={{ width: "35rem", height: "20rem" }}
                zoom={10}
                initialCentre={
                  {
                    lat: 19.114218,
                    lng: 73.968359
                  }
                }

              /> </div>  </Col>

        </Row>
      </Container>

    </>

    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyC_wcQk1UxwAbBu9mR1crm3RAitDiIPOv8"
})(ContactUs)

