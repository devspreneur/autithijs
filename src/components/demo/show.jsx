// import axios from "axios";
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// var jwt = require("jsonwebtoken");

class Show extends Component {
    constructor() {
        super();

        this.state = {
            token: '',
        };
    }

    showToken() {
        const token = localStorage.getItem("token")
        return token;
    }

    render() {
        return (
            <div >
                <p>{this.showToken()}</p>
            </div>
        );
    }
}

export default Show;