import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {Link} from 'react-router';

const Sidebar = () => {
   return (
     <div className="sidebar">
       <div className="sidebar-wrapper left-sidebar">
         <div className="left-sidebar-content">
             <ul className="sidebar-elements">
               <li className="divider">Menu</li>
               <li className="active">
                 <Link to="/">
                   <i className="fa fa-comments"></i>
                   <span>Proverbs</span>
                 </Link>
               </li>
               <li className="parent">
                 <Link to="/favorites">
                   <i className="fa fa-heartbeat"></i>
                   <span>My favorites</span>
                 </Link>
               </li>
               <li className="parent">
                 <Link to="/profile">
                   <i className="fa fa-user"></i>
                   <span>Profile</span>
                 </Link>
               </li>
               <li className="parent">
                 <Link to="/about">
                   <i className="fa fa-info-circle"></i>
                   <span>About</span>
                 </Link>
               </li>
             </ul>
           </div>
         </div>
       </div>
   )
 }

 Sidebar.propTypes = {
 }

 export default Sidebar;
