import React from "react";
import "./AdminNavigation.css";
import {Link} from 'react-router-dom';
import { useDispatch,useSelector } from "react-redux";

import { adminlogoutInitiate } from "../redux/actions";
import logo from './images/logo.png';

function eventHandle() {
  let arrow = document.querySelectorAll(".arrow");
  for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e) => {
      let arrowParent = e.target.parentElement.parentElement; //selecting main parent of arrow
      arrowParent.classNameList.toggle("showMenu");
    });
  }
  let sidebar = document.querySelector(".sidebar");
  let sidebarBtn = document.querySelector(".bx-menu");
  console.log(sidebarBtn);
  sidebarBtn.addEventListener("click", () => {
    sidebar.classNameList.toggle("close");
  });
}

const  AdminNavigation = () => {
  const { admin , adminData } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const HandleAuth = () => {
    if (adminData) {
      dispatch(adminlogoutInitiate());
    }
  };
  return (
    <div>
      <div className="sidebar close">
        <div className="logo-details">
          <img alt="logo"
            className="gpa_logo" 
            src={logo}
          />
          <span className="logo_name">HSAM</span>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/admin/dashboard">
              <i className="bx bx-home-alt"></i>
              <span className="link_name">Dashboard</span>
            </Link>
            <ul className="sub-menu blank">
              <li>
                <Link className="link_name" to="/admin/dashboard">
                  Dashboard
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/admin/dashboard">
            <i id="accepted-icons" className="bx bx-user-check"></i>
              <span className="link_name">Students</span>
            </Link>
            <ul className="sub-menu blank">
              <li>
                <Link className="link_name" to="/admin/accepted/students">
                  Accepted Students
                </Link>
              </li>
            </ul>
          </li>
         
          <li>
            <Link to="/admin/dashboard">
            <i className="bx bx-user-x"></i>
              <span className="link_name">Students</span>
            </Link>
            <ul className="sub-menu blank">
              <li>
                <Link className="link_name" to="/admin/rejected/students">
                  Rejected Students
                </Link>
              </li>
            </ul>
          </li>
         
          {/* <li>
            <Link to="/admin/dashboard">
            <i className="bx bx-comment-dots"></i>
              <span className="link_name">Feedback</span>
            </Link>
            <ul className="sub-menu blank">
              <li>
                <Link className="link_name" to="/HOD-Dashbord">
                  Feedback
                </Link>
              </li>
            </ul>
          </li> */}
         

        
          <li>
            <Link to="/admin/logout">
              <i className="bx bx-log-out"></i>
              <span className="link_name">Logout</span>
            </Link>
            <ul className="sub-menu blank">
              <li>
                <Link onClick={HandleAuth} className="link_name" >
                  Logout
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <div className="profile-details">
              <div className="profile-content">
                {/* <img alt="" src={GhodeMadamimg} /> */}
              </div>
              <div className="name-job">
                <div className="profile_name">Admin</div>
                <div className="job">HSAM ADMIN</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="home-section">
        <div className="home-content">
          {/* <i className="bx bx-menu" onClick={eventHandle}></i>
          <span className="text">ADMIN Dashboard</span>
          <br /> */}
        </div>
      </div>
    </div>
  );
}

export default AdminNavigation;