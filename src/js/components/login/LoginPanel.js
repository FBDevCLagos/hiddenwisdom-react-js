import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {Link} from 'react-router';

const LoginPanel = ({
  onPhoneNumberLogin,
  onEmailLogin,
  onFBLogin
}) => {
   return (
     <div className="panel">
       <h4>Sign up with</h4>
       <hr />
       <Link
         to="/login/phone-number"
         className="btn btn-info">
         Your phone number
       </Link>
       <p>OR</p>
       <Link
         to="/login/email"
         className="btn btn-outline-primary">
         Your email address
       </Link>
       <p>OR</p>
       <a
         href="#"
         className="btn btn-primary"
         onClick={onFBLogin} >
         Facebook
       </a>
     </div>
   )
 }

 LoginPanel.propTypes = {
   onPhoneNumberLogin: PropTypes.func,
   onEmailLogin: PropTypes.func,
   onFBLogin: PropTypes.func
 }

 export default LoginPanel;
