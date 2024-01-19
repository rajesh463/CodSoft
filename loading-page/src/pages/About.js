import React from 'react';
import Table from 'react-bootstrap/Table'
import { Row, Col, Container } from "react-bootstrap";


const Aboutus = () =>{
    return (
        <div>
        <Container>
        <Row md={12}>
          <h1 className="homepage-headings">About</h1>
        </Row>
        <Row> <p>         Arts, Commerce & Science College was established in the year 1995 and it is a distinguished degree college
            affiliated to the University of Pune. Sheltered in huge well architectured premises along with multiple
            institutes, the college has a unique academic atmosphere chiefly characterized by interdisciplinary
            scholarly interaction and healthy competitive spirit and enthusiasm to excel in various curricular
            activities. The college has been Accredited by NAAC with A Grade.</p>

          <p>       The Unitech's Complex in Pune houses many prestigious institutions and colleges, imparting knowledge and learning
            in various disciplines to meet global challenges of 21 century. Within a very short span of time the college has
            gained recognition for preparing and grooming the students at under-graduate and post-graduate level into academically
            meritorious students and professionally efficient scholars. The highly qualified staff, well-equipped laboratories and
            well -stocked library in the college premises have yielded positive and encouraging results in enabling the students
            to excel in academics as well as extra-curricular activities.</p></Row>
      </Container>
       
        
        
        
           
        
        <div>
           <Container>
        <Row md={12}>
          <h1 className="homepage-headings">Total Number Of Students</h1>
        </Row>
        <Row>
        <Table responsive="sm">
    <thead>
      <tr>
        <th>#</th>
        <th>Items</th>
        <th>2019-2020</th>
        <th>2018-2019</th>
        <th>2017-2018</th>
        <th>2016-2017</th>
        <th>2015-2016</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Total no of Boys</td>
        <td>762</td>
        <td>898</td>
        <td>763</td>
        <td>843</td>
        <td>766</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Total no of Girls</td>
        <td>360</td>
        <td>383</td>
        <td>453</td>
        <td>531</td>
        <td>576</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Total no of Students</td>
        <td>1122</td>
        <td>1281</td>
        <td>1216</td>
        <td>1374</td>
        <td>1342</td>
      </tr>
    </tbody>
  </Table>
        </Row>
      </Container>
 
  
</div>  
</div>
    );
}

export default Aboutus;