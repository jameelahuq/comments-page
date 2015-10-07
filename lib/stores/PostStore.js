import AppDispatcher from "../AppDispatcher.js";
import ActionTypes from "../ActionTypes.js"

class PostEmitter {

}

let PostStore = new PostEmitter();

AppDispatcher.register(action=> {
    switch(action.actionType) {
      case ActionTypes.RECEIVED_POSTS:
          console.log("4. Inside the Store register case method");
        break;
      default:
    }
  });


export default PostStore;