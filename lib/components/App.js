/**
 * Created by HUQ on 10/6/15.
 */
import React from "react";
import AllPosts from "./AllPosts.js";
import Form from "./Form.js";
import PostActions from "../actions/PostActions.js"

import PostStore from "../stores/PostStore";

let readState = () => {
  console.log("?: Reading the state now");
  return {posts: PostStore.getAll()}
};


export default React.createClass({
  getInitialState() {
    return readState();
  },

  addNewPost(postToAdd) {
    //let currentPosts = this.state.posts;
    //currentPosts.unshift(this.preparePost(postToAdd));
    //var newPostObject = new PostObject();
    //newPostObject.save(postToAdd);
    //this.setState({posts: currentPosts});
  },

  onChange() {
    console.log("5. State has changed");
    this.setState(readState());
  },

  componentDidMount() { //mounting means we are in our DOM
    //fetch("/data.json").then(response => {
    //  response.json().then(data => this.setState(data));
    //})
    PostActions.startFetchAll();
    PostStore.addChangeListener(this.onChange);
  },

  componentWillUnmount() { //we are out of our DOM
    PostStore.removeChangeListener(this.onChange);
  },


  render() {
    return (
        <div className="row">
          <h1>The BLOGGINATOR {this.state.answer} </h1>

        <AllPosts posts={this.state.posts}>
        </AllPosts>
          <Form addPost={this.addNewPost} />
      </div>
    );
  }
});


//export default class App extends React.Component {
//  render() {
//    let answer = 42;
//    return (
//        <div>
//          BLERK
//          {answer}
//        </div>
//    )
//  }
//};
