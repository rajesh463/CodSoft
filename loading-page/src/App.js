import {BrowserRouter,Switch,Route} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {useEffect} from 'react';
import { useState } from "react";
import { useSelector } from "react-redux";
import {auth} from './firebase';


import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { setUser } from './redux/actions';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Admission from './pages/Admission';
import Art from './components/Courses/Art';
import Science from './components/Courses/Science';
import Commarce from './components/Courses/Commerce';
import Navigation from './components/navigation';
import UserRoute from './components/UserRoute';
import Footer from './components/Footer';
import AdmissionForm from './components/AdmissionForms/AdmissionForm';

import AdminLogin from './pages/AdminLogin';
import AdminNavigation from './components/AdminNavigation'

import { setAdmin ,setAdminData} from './redux/actions';
import AdminDashBoard from './pages/AdminDashBoard';

import AdminRoute from './components/AdminRoute';
import SuccessfullySubmit from './components/AdmissionForms/SuccessfullySubmit';
import DisplayStudentDetails from './components/DisplayStudentDetailsAdmin';
import AdminAcceptedStudent from './pages/AdminAcceptedStudent';
import AdminRejectedStudent from './pages/AdminRejectedStudent';
import DisplayStudent from './components/DisplayStudent';
// import AdminRoute from './components/AdminRoute';

import FullPageLoader from './components/FullPageLoader/FullPageLoader';
import FailToSubmit from './components/AdmissionForms/FailToSubmit';
const App =()=>{
  const { admin , adminData } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch(setUser(authUser));
      }else{
        dispatch(setUser(null));
      }
    })
  },[dispatch])

  useEffect(()=>{
   
    auth.onAuthStateChanged((authAdmin)=>{
      if(authAdmin){
        dispatch(setAdminData(authAdmin));
      }else{
        dispatch(setAdminData(null));
      }
    })
     
  },[dispatch])

  
  const roleBasedAuth = () =>{
    if(admin){
      return <AdminNavigation/>;
    }else if(admin == false){
      return (
        <Navigation/>
      )
    }else if(admin== null){
        return;
    }
  }
  return (
    <BrowserRouter>
      <div >
        {roleBasedAuth()}
       
        {/* <div className='App'> */}
        <div>
        <Switch>
          {/* user Routes */}
          <Route exact path ="/" component={Home} />
          <Route exact path ="/login" component={Login} />
          <Route exact path ="/signup" component={Register} />
          <UserRoute exact path ="/admission" component={Admission} />
          <Route exact path ="/contactus" component={ContactUs} />
          <Route exact path ="/about" component={About} />
          <Route exact path ="/science" component={Science} />
          <Route exact path ="/commarce" component={Commarce} />
          <Route exact path ="/art" component={Art} />
          <Route exact path ="/success" component={SuccessfullySubmit} />
          {/* admin Routes */}
          <Route exact path ="/hsam-admin" component={AdminLogin}/>
          <AdminRoute exact path ="/admin/dashboard" component={AdminDashBoard}/>
          <AdminRoute exact path ="/admin/student/:id" component={DisplayStudentDetails}/>
          <AdminRoute exact path= "/admin/accepted/students" component={AdminAcceptedStudent}/>
          <AdminRoute exact path = "/admin/rejected/students" component={AdminRejectedStudent}/>
          <AdminRoute exact path = "/admin/arstudent/:id" component={DisplayStudent}/>
          <Route exact path ="/fail" component={FailToSubmit}/>
        </Switch>
        </div>
        <FullPageLoader />
      </div>
    </BrowserRouter>
   
  );
}

export default App;
