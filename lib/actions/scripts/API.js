/**
 * Created by HUQ on 10/7/15.
 */
import DataActions from "../DataActions.js";

let PostObject = Parse.Object.extend("PostObject");

export default {
  fetchPosts() {
    console.log("2. Inside fetchPosts");
    var query = new Parse.Query(PostObject);
    query.find({
      success: (results) => {
        DataActions.receivedPosts(results);

        //this.setState({
        //  posts: results.map(po => this.preparePost(po.attributes))
        //});
      },
      error: function (error) {
        alert("Error: " + error.code + " " + error.message);
      }
    })
  },

  addPost (newPost) {
    console.log("3. Inside addPost!");
    let currentPosts = this.state.posts;
    currentPosts.unshift(this.preparePost(newPost));
    var newPostObject = new PostObject();
    newPostObject.save(newPost);
    this.setState({posts: currentPosts});
    //this.props.addPost(newPost);
  }
}



