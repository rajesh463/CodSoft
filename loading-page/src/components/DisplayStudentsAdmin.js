import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import './DisplayStudentsAdmin.css';

import StudentData from '../api/AdminInfo';

const Students = props => (
    <tr>
        <td>{props.student.Name}</td>
        <td>{props.student.TenthMarks}</td>
        {/* <td>{props.student.activity}</td> */}
        {console.log(props.student)}
        
        <td>
            <Link to={"/admin/student/"+props.student.UID}>View</Link> 
            {/* <button className="btn btn-secondary"><Link to={"/edit/"+props.exercise._id} style={{color:"white"}}>Edit</Link></button> | <button className="btn btn-danger" onClick={() => {props.deleteExercise(props.exercise._id) }}>Delete</button> */}
        </td>
    </tr>
)

class DisplayStudentsAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: []
        }

    }

    componentDidMount() {
        StudentData.get('/getAllStudents')
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
            return <Students student={currentStudent} key={currentStudent.UID} />
        })
    }

    render() { 
        return ( 
            <div className='FideologyActivities'>
            <div className="fideo">
            <h3 className='fidoh3'>All Students</h3>
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
 
export default DisplayStudentsAdmin;

