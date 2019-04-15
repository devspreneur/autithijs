import React, { Component } from "react";
import axios from "axios";
class PropartyDetail extends Component {
  state = {
    property: []
  };
  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/property/laksdlfkKLjl98/").then(res => {
    //   console.log(res.data);
      this.setState({ property: res.data });
      console.log(this.state.property);
      console.log("typeof proparty -> ", typeof this.state.proparty);
      console.log("typeof res.data -> ",typeof res.data);
    });
  }

  render() {
    return (
      <h1>
        <ul>
          {
              <li>{this.state.proparty}</li>
          }
        </ul>
      </h1>
    );
  }
}
export default PropartyDetail;
