import React, {Component} from 'react';
import {Link} from 'react-router';

const Header = () => {
    return (
      <nav className="navbar navbar-default navbar-fixed-top top-header">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">
              hidden wisdom
            </Link>
          </div>
          <div className="be-right-navbar">
            <ul className="nav navbar-nav navbar-right user-nav">
              <li className="dropdown">
                <Link to="/proverbs/new"
                  role="button"
                  className="btn btn-primary">
                  Add a new proverb
                </Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    );
}

export default Header;
