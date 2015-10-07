/**
 * Created by HUQ on 10/6/15.
 */
import React from "react";
import AllPosts from "./AllPosts.js";
import Form from "./Form.js";
import PostActions from "../actions/PostActions.js"
import PostStore from "../stores/PostStore";


export default React.createClass({
  getInitialState() {
    return {posts: [], answer: 42};
  },

  addNewPost(postToAdd) {
    //let currentPosts = this.state.posts;
    //currentPosts.unshift(this.preparePost(postToAdd));
    //var newPostObject = new PostObject();
    //newPostObject.save(postToAdd);
    //this.setState({posts: currentPosts});
  },

  preparePost(attributes) {
    //let post = Object.assign({}, attributes);
    //post.preview = post.body.slice(0, 140);
    //return post;

  },

  componentDidMount() {
    //fetch("/data.json").then(response => {
    //  response.json().then(data => this.setState(data));
    //})
    PostActions.startFetchAll();
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
