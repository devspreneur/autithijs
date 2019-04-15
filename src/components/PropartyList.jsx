import React, { Component } from "react";
import axios from "axios";
// import { BrowserRouter, Route, Switch, Link } from "react-router-dom"
class PropartyList extends Component {
  state = {
    property: []
  };
  componentDidMount() {


    const token = localStorage.getItem("token")
    console.log("componentDidMount propertylist")
    // var config = {
    //   headers: { 'Authorization': token }
    // };
    // var bodyParameters = {
    // }
    axios.get('http://127.0.0.1:8000/api/property/',{
      params:{
        foo: token
      }
    }).then(res => {
      console.log("axios -> ",res);
      this.setState({ property: res.data });
      // console.log("typeof proparty -> ", typeof this.state.proparty);
      // console.log("typeof res.data -> ",typeof res.data);
    })
  }

  render() {
    return (
      <h1>
        <ul>
          {
            this.state.property.map(item => (
              <li>{item.title} <br /> {item.slug}</li>
            ))
          }
        </ul>
        {/* <form action="">
          <input
            type="submit"
            onChange={this.handleChange}
          />
        </form> */}
        {/* <h1>break</h1>
        <li>
          <BrowserRouter>

            <Link to="hello/">hello</Link>

          </BrowserRouter>
        </li> */}
      </h1>
    );
  }
}
export default PropartyList;



// eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozLCJ1c2VybmFtZSI6Im5heWFuQGdtYWlsLmNvbSIsImV4cCI6MTU1NTMyMzE1MCwiZW1haWwiOiJuYXlhbkBnbWFpbC5jb20ifQ.rnXz06kLQCigCUBoW141LNLSaoXL0P5TfLiyc4qr9bE