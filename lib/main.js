import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Link} from 'react-router';

import App from "./components/App.js";
import About from "./components/About.js";
import Loops from "./components/Loops.js"
//import PostBody from "./components/PostBody.js";


let RouterContainer = React.createClass({
  render() {
    return (
        <div>
          {this.props.children}
        </div>
    );
  }
});



ReactDOM.render(
    <Router>
      <Route component={RouterContainer}>
        <Route path="/" component={App}/>
        <Route path="/loops" component={Loops}/>
        <Route path="/about(/:name)" component={About}/>
      </Route>
    </Router>
    , document.getElementById("react-root")
);


//ReactDOM.render(
//    <PostBody />,
//    document.getElementById("all-post-body")
//);




