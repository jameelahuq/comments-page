/**
 * Created by HUQ on 10/7/15.
 */
import API from "../API.js"

export default {
  startFetchAll() {
    console.log("1. Inside the Action");
    API.fetchPosts();
  }
}