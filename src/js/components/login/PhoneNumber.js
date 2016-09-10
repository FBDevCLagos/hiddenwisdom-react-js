import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars

const phoneNumber = ({
  onPhonNumberSubmit,
  onInputPhoneNumber
}) => {
   return (
    <div>
      <h5>Enter your phone number</h5>
      <input
        onChange={{onInputPhoneNumber}}
        className="" />
      <button
        onClick={{onPhonNumberSubmit}}
        className="btn btn-primary">
        Login
      </button>
    </div>
   )
 }

 phoneNumber.propTypes = {
    onPhonNumberSubmit: PropTypes.func,
    onInputPhoneNumber: PropTypes.func
 }

 export default phoneNumber;
