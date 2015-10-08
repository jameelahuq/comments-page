import React from "react";
import {Link} from "react-router";


export default React.createClass({
  componentDidMount() {
    console.log(this.props.params.name);
  },
  render() { return (
      <div className="row">
        <h1>ABOUT</h1>
        <Link to="/">Main Page</Link>
        <p className="panel" >
          This website uses flux to create a unidirectional data flow to update
          views in React.js. React has several advantages to Angular.js.
        </p>
      </div>

  ) }
  });

