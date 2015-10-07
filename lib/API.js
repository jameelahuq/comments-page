/**
 * Created by HUQ on 10/7/15.
 */
export default {
  fetchPosts() {
    var query = new Parse.Query(PostObject);
    query.find({
      success: results => {
        this.setState({
          posts: results.map(po => this.preparePost(po.attributes))
        });
      },
      error: function (error) {
        alert("Error: " + error.code + " " + error.message);
      }
    })
  }
}