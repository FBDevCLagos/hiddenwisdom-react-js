import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import IndexPage from './IndexPage';
import * as actions from '../../actions/loginActions';
import CurrentUser from '../../auth/currentUser';
import {browserHistory} from 'react-router'


class Login extends React.Component {
  constructor(props, context) {
    super(props);
    this.state={
      phoneNumber: '',
      emailAddress: '',
      canLoginWithFB: false
    };
    this.onFBLogin = this.onFBLogin.bind(this);
  }

  onValueChange(event, field) {

  }

  onPhoneNumberLogin() {

  }

  onEmailLogin() {

  }

  connectedUser() {
    this.props.fbLoginStatus == 'connected'
  }

  onFBLogin() {
    if (this.connectedUser()) { return }
    let that = this;
    FB.login(function(response) { //eslint-disable-line no-undef
      if (response.status != 'connected') { return }
      that.props.actions.login(response.authResponse.accessToken)
          .then(browserHistory.push('/'))
    }, {scope: 'public_profile,email'});
  }

  render() {
    return (
      <IndexPage
        onPhoneNumberLogin={this.onPhoneNumberLogin}
        onEmailLogin={this.onEmailLogin}
        onFBLogin={this.onFBLogin}
        children={this.props.children} />
    )
  }
}

Login.propTypes = {
  fbLoginStatus: PropTypes.string.isRequired,
  children: PropTypes.string
}

function mapStateToProps(state, ownProps) {
  return {
    fbLoginStatus: CurrentUser.getFBLoginStatus()
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
