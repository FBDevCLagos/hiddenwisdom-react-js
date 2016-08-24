import React, {Component} from 'react';

class SideNav extends Component {
  render() {
    return (
      <div className="sidenav">
        <div className="logo">
          <span>Name and Logo</span>
        </div>
        <div className="menu">
          <span>Navigation Menu</span>
          <ul>
            <li><div>Menu Option A</div></li>
            <li><div>Menu Option B</div></li>
            <li><div>Menu Option C</div></li>
            <li><div>Menu Option D</div></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SideNav;