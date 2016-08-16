import React, { PropTypes, Component } from 'react';
import Header from '../components/header';
import SideNav from '../components/sidenav';


class App extends Component {
  render() {
    return (
      <div className="root">
        <Header />
        <div className="container">
          <SideNav />
          <div className="content">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
}

export default App;