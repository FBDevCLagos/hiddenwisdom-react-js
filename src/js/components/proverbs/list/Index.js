import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../../actions/proverbActions';
import ListPage from './ListPage';

export class Proverbs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ListPage {...this.props} />
    );
  }
}

Proverbs.propTypes = {
  proverbs: PropTypes.object
};

const mapStateToProps = (state, ownProps) => {
  const { proverbs } = state;
  return { proverbs };
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Proverbs);
