import React from 'react';
import "../../components/HomeContent/EduMinister.css"
import varsha from '../../components/images/varsha.jpeg'
import kadu from '../../components/images/kadu.jpeg'
import vandana from '../../components/images/vandana.jpeg'

import { Row, Col, Container } from 'react-bootstrap';



const EduMinister = () => {

  return <>
    {/* <edumin> */}
      <div className='eduminister_row'>

        <Container className='flexboxedumin'>

          <Row>
      
            <Col lg={4} md={12}><div className="varshadiv">

              <img className='eduminimg' src={varsha} />

              <h4>Prof.Varsha Gaikwad</h4>

              Hon'ble Minister of <br /> School Education Department

            </div></Col>

            <Col  lg={4} md={12}><div className="kadudiv">

              <img className='eduminimg' src={kadu} />

              <h4>Shri.Omprakash Bachchu Kadu</h4>

              Minister of State <br /> Goverment of Maharastra

            </div></Col>

            <Col  lg={4} md={12}><div className="vandanadiv">

              <img className='eduminimg' src={vandana} />

              <h4>Smt.Vandana Krishna(I.A.S</h4>

              Hon'able chief Secretory , <br />School Education

            </div></Col>
          </Row>
        </Container>


      </div>


    {/* </edumin> */}
  </>



}

export default EduMinister;