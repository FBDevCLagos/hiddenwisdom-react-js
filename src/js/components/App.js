import React, { PropTypes, Component } from 'react';
import Header from '../components/header';
import SideNav from '../components/sidebar';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <SideNav />
        <div className="main-content">
          <div className="container">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
