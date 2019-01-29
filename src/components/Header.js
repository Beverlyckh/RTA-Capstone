import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className = "NavigationBar"> 
            <nav class="navbar navbar-expand-lg navbar-light bg-light"> {/* Nav has a set of proprieties that need to be set.*/}
              <a class="navbar-brand" href="#">RTA</a>  
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                  <a class="nav-item nav-link" href="#">Plan a Trip!</a>
                  <a class="nav-item nav-link" href="Profile">Profile</a>
                </div>
              </div>
            </nav>
            </div>
        );
    }
}

export default Header;