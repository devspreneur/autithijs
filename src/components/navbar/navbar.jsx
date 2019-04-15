import React, { Component } from "react";
// import axios from "axios";
import { Link } from "react-router-dom"
class Navbar extends Component {
    state = {
    };
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    {/* <a className="navbar-brand" href="#">Navbar</a> */}
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">
                                    <Link to="/" >Home</Link>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/login/">
                                    <Link to="/login">Login</Link>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/registration/">
                                    <Link to="/registration">Registration</Link>
                                </a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="/dropdown" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="/propertylist">
                                        <Link to="/propertylist">Proparty List</Link>
                                    </a>
                                    <a class="dropdown-item" href="/show">
                                        <Link to="/show">Show</Link>
                                    </a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="/something">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a class="nav-link disabled" href="/disable" tabindex="-1" aria-disabled="true">
                                    Disabled
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}
export default Navbar;
