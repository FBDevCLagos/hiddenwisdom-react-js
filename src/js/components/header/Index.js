import React, {Component} from 'react';
import {Link} from 'react-router';

const Header = () => {
    return (
      <nav className="navbar navbar-default navbar-fixed-top top-header">
        <div className="container-fluid">
          <div className="navbar-header">
            <a href="index.html" className="navbar-brand">
              hidden wisdom
            </a>
          </div>
          <div className="be-right-navbar">
            <ul className="nav navbar-nav navbar-right be-user-nav">
              <li className="dropdown">
                <Link to="/proverbs/new"
                  role="button"
                  className="btn btn-primary">
                  <span className="user-name">
                    Add a new proverb
                  </span>
                </Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    );
}

export default Header;
