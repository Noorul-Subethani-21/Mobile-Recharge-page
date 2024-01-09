import React from "react";
import "./Sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import PaymentIcon from '@mui/icons-material/Payment';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ReportIcon from '@mui/icons-material/Report';
//import Dashboard from "../Dashboard/Dashboard";
//import Contacts from "../Contacts/Contacts";
//import Input from "../Input/Input";
//import Page from '../Page4/Page'
import Page from '../Page5/Page'
const Sidebar = () => {
  return (
    <div className="app-container">
      <div className="nav">
        <div className="sidebar">
          <DashboardIcon className="sidebaricon" />
         <div class="sidebar-name">DashBoard</div>
        </div>
        <div className="sidebar">
          <HomeIcon  className="sidebaricon" />
          <div  class='sidebar-name'>Plans</div>
          
        </div>
        <div className="sidebar">
          <ArrowUpwardIcon className="sidebaricon" /> <div class='sidebar-name'>Upgrade plans</div>
        </div>
        <div className="sidebar">
          <PaymentIcon className="sidebaricon" />
          <div class='sidebar-name'>Payment Gateway</div>
        </div>
        <div className="sidebar">
          <PersonIcon className="sidebaricon" />
         <div class='sidebar-name'>Profile</div> 
         <NavigateNextIcon  />
        </div>
        <div className="sidebar">
          <LogoutIcon className="sidebaricon" />
          <div class='sidebar-name'>Logout</div>
        </div>

        <div className='last'>
         <h5 style={{color:'rgb(20, 9, 80)'}}>Found a Bug</h5>
         <p>Report now to us if you find any bug</p>
         <button style={{background:'rgb(20, 9, 80)', color:'#fff'}}> <ReportIcon />Report</button>
        </div>
       </div>
      {/*<Dashboard />*/}
    {/*<Contacts />*/} 
     {/*<Input />*/}
{/*     <Page />*/}
     <Page />

             </div>
            
            
       
                      
    

 
        

    
  );
};

export default Sidebar;
