import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div className="NavigationBar">
        <nav class="navbar navbar-expand-lg navbar-light bg-light"> {/* Nav has a set of proprieties that need to be set.*/}
          <Link class="navbar-brand" to="/">RTA</Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link class="nav-item nav-link active" to="/">Home <span class="sr-only">(current)</span></Link>
              <Link class="nav-item nav-link" to="Profile">Profile</Link>
             

            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;