import axios from "axios";
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// var jwt = require("jsonwebtoken");

class LoginForm extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;
        console.log(target.value)

        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        // var config = {
        //     headers: {'Authorization': "bearer " + token}
        // };

        var bodyParameters = {
            email: this.state.email,
            password: this.state.password
        }
        axios.post(
            'http://127.0.0.1:8000/api/token/auth/',
            bodyParameters
        ).then(res => {
            // const token = res.value
            console.log(res.data.token)
            localStorage.setItem("token", res.data.token)

        })

        console.log('The form was submitted with the following data:');
        console.log(this.state);
        // const abc=localStorage.getItem("token")
        // const decode1=jwt.decode(abc);
        // console.log(decode1.username)

    }

    render() {
        return (
            <div className="FormCenter">
                <form className="FormFields" onSubmit={this.handleSubmit}>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                        <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="password">Password</label>
                        <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
                    </div>

                    <div className="FormField">
                        <button className="FormField__Button mr-20">Sign In</button> <Link to="/" className="FormField__Link">Create an account</Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginForm;