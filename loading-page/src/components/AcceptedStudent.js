import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import './DisplayStudentsAdmin.css';

import adminData from '../api/AdminInfo';

const Students = props => (
    <tr>
        <td>{props.student.Name}</td>
        <td>{props.student.TenthMarks}</td>
        {/* <td>{props.student.activity}</td> */}
        
        
        <td>
            <Link to={"/admin/arstudent/"+props.student.UID}>View</Link> 
            {console.log(props.student.UID)}
            {/* <button className="btn btn-secondary"><Link to={"/edit/"+props.exercise._id} style={{color:"white"}}>Edit</Link></button> | <button className="btn btn-danger" onClick={() => {props.deleteExercise(props.exercise._id) }}>Delete</button> */}
        </td>
    </tr>
)

class AcceptedStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: []
        }

    }
    

    componentDidMount() {
        adminData.get('/getallacceptedstudents')
            .then(res => {
                console.log(res.data)
                this.setState({ students: res.data })
            })
            .catch(error => console.log(error));
    }

    // deleteExercise(id) {
    //     Exercises.delete('/delete-exercise/' +id)
    //         .then(res => console.log(res.data));

    //     this.setState({ exercises: this.state.exercises.filter(el => el._id !== id)})
    // }

    StudentsList() {
        return this.state.students.map(currentStudent => {
            console.log(currentStudent.UID)
            return <Students student={currentStudent} key={currentStudent.UID} />
        })
    }

    render() { 
        return ( 
            <div className='FideologyActivities'>
            <div className="fideo">
                <h3 className='fidoh3'>Accepted Student</h3>
                <table>
                    <thead className="thead-light">
                        <tr>
		                    
		                    <th>Student Name</th>
		                    <th>10th Marks</th>
                            <th>Click To View</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.StudentsList()}
                    </tbody>
                </table>
                {/* <Link to={'/fideology-form'}><div className='add'>Add</div></Link> */}
            </div>
            </div>
         );
    }
}
 
export default AcceptedStudent;

