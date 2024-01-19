import AcceptedStudent from '../components/AcceptedStudent'

import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {adminInitiate, setAdmin} from '../redux/actions';

const  AdminAcceptedStudent = () =>{
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(setAdmin(true));
    },[dispatch])
  return (
    <div>
        <AcceptedStudent/>
    </div>
  )
}

export default AdminAcceptedStudent