import React, { Component } from "react";
import { Link } from "react-router-dom";
class Header extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav>
        <Link to="/">
          <img className="nav-logo" src="./images/ieeeggsipulogo.png" />
        </Link>

        <div>
          <ul
            id="navbar"
            className={this.state.clicked ? "navbar active" : "#navbar"}
          >
            <li>
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/pastevents">
                Past Events
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/ieee-wie">
                WIE
              </Link>
            </li>
          </ul>
        </div>
        <div id="mobile" onClick={this.handleClick}>
          <i
            id="bar"
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
      </nav>
    );
  }
}

export default Header;

{
  /* <ul class="navbar-nav-primary">
              <li class="nav-items">
                <Link
                  class="nav-link links active  "
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              ]
              <li class="nav-item">
                <Link class="nav-link" to="/pastevents">
                  Past events
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/ieee-wie">
                  WIE
                </Link>
              </li>
             
            </ul> */
}
