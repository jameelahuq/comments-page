/**
 * Created by HUQ on 10/7/15.
 */
import AppDispatcher from "../AppDispatcher.js";
import ActionTypes from "../ActionTypes.js";

export default {
  receivedPosts(results) {
    console.log("3. Inside receivedPosts");
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_POSTS,
      data: results
    });
  },

  sentForm(formData) {
    console.log("5. Inside sentForm");
    App.Dispatcher.dispatch({
      actionType: ActionTypes.SENT_FORM,
      formData
    });
  }

}