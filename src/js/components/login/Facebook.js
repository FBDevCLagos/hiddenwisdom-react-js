import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars

const FacebookLogin = ({
  onPhonNumberSubmit,
  onInputPhoneNumber
}) => {
   return (
    <div>
      <p>To initiate facebook login here</p>

    </div>
   )
 }

 FacebookLogin.propTypes = {
    onPhonNumberSubmit: PropTypes.func,
    onInputPhoneNumber: PropTypes.func
 }

 export default FacebookLogin;
