import React, { Component } from 'react';
import { Link } from 'react-router';

const Header = () => {
  return (
    <nav className="navbar navbar-default navbar-fixed-top top-header">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">Hidden Wisdom</Link>
        <ul className="nav navbar-nav pull-xs-right right-nav">
          <li className="nav-item" key={1}>
            <Link className="nav-link" to="/proverbs/favorites">
              <i className="fa fa-star" aria-hidden="true"></i>
              Favorites
            </Link>
          </li>
          <li className="nav-item" key={2}>
            <Link className="nav-link" to="/proverbs">
              <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
              Edit
            </Link>
          </li>                  
          <li className="nav-item" key={3}>
            <Link className="nav-link" to="/proverbs/new">
              <i className="fa fa-file-o" aria-hidden="true"></i>
              Add
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
