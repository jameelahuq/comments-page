/**
 * Created by HUQ on 10/6/15.
 */
import React from "react";


export default React.createClass({
  render() {
    let { title, body, date } = this.props;
    //TODO: Add the createdAt object to display the date
    return (
        <div className = "panel">
          <div className="postRow row">
            <div className="column medium-10">
              <h3>{title}</h3>
            </div>
            <div className="column medium-2">
              <time>{date}</time>
            </div>
          </div>
            <p>{body}</p>
          </div>
    );
  }
});