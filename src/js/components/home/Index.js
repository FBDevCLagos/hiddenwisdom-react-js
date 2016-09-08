import React, { PropTypes, Component } from 'react';
import Proverbs from '../proverbs/list';

class HomePage extends Component {
  render() {
    return (
      <div className="home">
        <Proverbs />
      </div>
    );
  }
}

export default HomePage;
