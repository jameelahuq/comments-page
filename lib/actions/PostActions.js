/**
 * Created by HUQ on 10/7/15.
 */
import API from "./scripts/API.js";

export default {
  startFetchAll() {
    console.log("1. Inside the Action");
    API.fetchPosts();
  },

  submitForm(newPost) {
    console.log("2. Action has been posted");
    API.addPost(newPost);
  }
}