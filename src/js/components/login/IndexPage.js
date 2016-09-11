import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import LoginPanel from './LoginPanel';

const IndexPage = ({
  onPhoneNumberLogin,
  onEmailLogin,
  onFBLogin,
  children
}) => {
  return (
    <div className="login-box">
      <div id="loginbox" className="main-box">
        {children ?
          <div>{children}</div> :
          <LoginPanel
          onPhoneNumberLogin={onPhoneNumberLogin}
          onEmailLogin={onEmailLogin}
          onFBLogin={onFBLogin} />
        }
      </div>
    </div>
  )
}

IndexPage.propTypes = {
  onPhoneNumberLogin: PropTypes.func,
  onEmailLogin: PropTypes.func,
  onFBLogin: PropTypes.func,
  children: PropTypes.object
}

export default IndexPage;
