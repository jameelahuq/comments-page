/**
 * Created by HUQ on 10/6/15.
 */

import React from "react";
import PostActions from "../actions/PostActions.js";

export default React.createClass({
  handleSubmit(event) {
    console.log("1. action has occurred");
    event.preventDefault();
    let newPost = {};
    Object.keys(formData).forEach(key => newPost[key] = formData[key].value);
    console.log(newPost);
    PostActions.submitForm(newPost);
  },

  componentDidMount() {

  },
   render() {
     return (
         <form className="newPostForm" onSubmit={this.handleSubmit}>
           <fieldset>
             <legend>Submit a New Post</legend>
             <div className="large-12 columns">
               <div className="row collapse">
                 <div className="">
                   <label>Title <input type="text" ref="title"/></label>
                 </div>
                   <div className="">
                     <label>Body <input type="text" ref="body"/></label>
                     </div>
                 <div className="small-2 columns">
                   <button href="#" className="postfix">Submit Post</button>
                 </div>
               </div>
             </div>
             </fieldset>
         </form>
     );
   }
})



