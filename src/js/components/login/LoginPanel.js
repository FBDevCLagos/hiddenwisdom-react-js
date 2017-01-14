import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {Link} from 'react-router';

const LoginPanel = ({
  onPhoneNumberLogin,
  onEmailLogin,
  onFBLogin
}) => {
  return (
    <div className="panel pulse">
      <h4>Sign up using</h4>
      <hr />
      <Link
        to="/login/phone-number"
        className="btn btn-info">
        your phone number
      </Link>
      <p><span>or</span></p>
      <Link
        to="/login/email"
        className="btn btn-default">
         your email address
      </Link>
      <p><span>or</span></p>
      <Link
        to="/login/facebook"
        className="btn btn-primary">
        facebook
      </Link>
    </div>
   )
}

LoginPanel.propTypes = {
  onPhoneNumberLogin: PropTypes.func,
  onEmailLogin: PropTypes.func,
  onFBLogin: PropTypes.func
}

 export default LoginPanel;
