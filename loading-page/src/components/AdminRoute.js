import React from 'react';
import {Route} from 'react-router-dom';
import {useSelector} from 'react-redux';


import LoadingToRedirectAdmin from './LoadingToRedirectAdmin';

const UserRoute = ({children,...rest}) => {
    const {adminData} = useSelector((state)=>state.user);
    console.log(adminData)
    return adminData ? <Route{...rest} /> : <LoadingToRedirectAdmin/>;
    return  <Route{...rest} /> ;
    // return <div>Hii</div>
}

export default UserRoute