import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars

const EmailLogin = ({
  onPhonNumberSubmit,
  onInputPhoneNumber
}) => {
   return (
    <div>
      <h5>Enter your email address</h5>
      <input
        onChange={{onInputPhoneNumber}}
        className="form-control" />
      <button
        onClick={{onPhonNumberSubmit}}
        className="btn btn-primary">
        Login
      </button>
    </div>
   )
 }

 EmailLogin.propTypes = {
    onPhonNumberSubmit: PropTypes.func,
    onInputPhoneNumber: PropTypes.func
 }

 export default EmailLogin;
