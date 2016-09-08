import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';
import IndexPage from './IndexPage';

import * as actions from '../../actions/loginActions'
class Login extends React.Component {
  constructor(props, context) {
    super(props);
    this.state={
      phoneNumber: '',
      emailAddress: ''
    }
  }

  onValueChange(event, field) {

  }

  onPhoneNumberLogin() {

  }

  onEmailLogin() {

  }

  onFBLogin() {

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
  children: PropTypes.string.isRequired
}

function mapStateToProps(state, ownProps) {
  return {
    currentUser: state.currentUser
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
