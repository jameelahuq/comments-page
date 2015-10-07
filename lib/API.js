/**
 * Created by HUQ on 10/7/15.
 */
import DataActions from "./actions/DataActions.js";

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
  }
}