import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import { Link } from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CurrentUser from '../../auth/currentUser';

class Sidebar extends React.Component {
  render() {
    const { currentUser } = this.props;
    return (
      <div className="sidebar">
        <div className="sidebar-wrapper left-sidebar">
          <div className="left-sidebar-content">
            <ul className="sidebar-elements">
              <li className="divider">
                {currentUser && <p>{currentUser.first_name}</p>}
              </li>
              <li className="divider">Menu</li>
              <li>
                <Link to="/proverbs" activeClassName="active">
                  <i className="fa fa-comments"></i>
                  <span>Proverbs</span>
                </Link>
              </li>
              {currentUser && <li className="parent">
                <Link to="/favorites" activeClassName="active">
                  <i className="fa fa-heartbeat"></i>
                  <span>My favorites</span>
                </Link>
              </li>}
              {currentUser && <li className="parent">
                <Link to="/profile" activeClassName="active">
                  <i className="fa fa-user"></i>
                  <span>Profile</span>
                </Link>
              </li>}
              <li className="parent">
                <Link to="/about" activeClassName="active">
                  <i className="fa fa-info-circle"></i>
                  <span>About</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

Sidebar.propTypes = {
};

function mapStateToProps(state, ownProps) {
  return {
    currentUser: CurrentUser.get()
  }
}

export default connect(mapStateToProps)(Sidebar);
