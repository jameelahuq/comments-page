import AppDispatcher from "../AppDispatcher.js";
import ActionTypes from "../ActionTypes.js"
import { EventEmitter } from "events";

let _posts = [];

let preparePost= (attributes) => {
  let post = Object.assign({}, attributes);
  post.preview = post.body.slice(0, 140);
  return post;
};

//string can be any unique combination, you emit the string
//and listen for that same string
const CHANGE_EVENT = "CHANGE_STRING";

class PostEmitter extends EventEmitter {
  getAll() {
    return _posts.map(po => preparePost(po.attributes));
  }
  emitChange() {
    this.emit(CHANGE_EVENT);
  }
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
}

let PostStore = new PostEmitter();

AppDispatcher.register(action=> {
    switch(action.actionType) {
      case ActionTypes.RECEIVED_POSTS:
          console.log("4. Inside the Store register case method");
          console.log(action.data);
          _posts = action.data; //.map can be here too of course
          PostStore.emitChange();
        break;
      case ActionTypes.SENT_FORM:
        _posts.unshift(attributes.action.post);
        PostStore.emitChange();
        break;
      default:
    }
  });


export default PostStore;