/**
 * Created by HUQ on 10/6/15.
 */
import React from "react";
import PostBody from "./PostBody.js";

export default React.createClass({
  render() {
    return (
        <div className="all-posts">
          {this.props.posts.map((post, i) => <PostBody key={i} {...post} />)}
        </div>
    );
  }
});




