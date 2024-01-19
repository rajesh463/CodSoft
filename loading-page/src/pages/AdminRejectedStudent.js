import RejectedStudent from '../components/RejectedStudent'

import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {adminInitiate, setAdmin} from '../redux/actions';

function AdminRejectedStudent() {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(setAdmin(true));
    },[dispatch])
  return (
    <div>
        <RejectedStudent/>
    </div>
  )
}

export default AdminRejectedStudent