import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from '../../../actions/proverbActions';
import IndexPage from './IndexPage';

export class Index extends React.Component {
  constructor(props, context) {
    super(props);
  }

  render() {
    return (
      <IndexPage {...this.props} />
    )
  }
}

Index.propTypes = {
  // myProp: PropTypes.string.isRequired
}

function mapStateToProps(state, ownProps) {
  return {
    proverbs: state.proverbs
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
