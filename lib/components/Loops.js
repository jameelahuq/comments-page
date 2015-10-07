import React from "react";
import {Link} from "react-router";



var data = [{url: "http://img.pandawhale.com/post-62718-Imgur-loading-gif-candidate-vo-OiXh.gif", comment: "loading from reddit..."}];



class Img extends React.Component{
  constructor(props) {
    //instead of getInitialState, for ES6 we....
    super(props);
    this.state = {loaded: false};
  }

  //to use, in the div, type style={this.style()}
  //style() {
  //  return{
  //    display: 'inline-block',
  //    width: 400
  //  }
  //},
  showIfLoaded() {
    return {
      display: (this.state.loaded ? 'inline-block' : 'none')
    }
  }

  hideIfLoaded() {
    return {
      display: (!this.state.loaded ? 'inline-block' : 'none')
    }
  }

  render() {
    let {url, comment} = this.props;
    return (
        <li>
          <img src={url} onLoad={() => this.setState({loaded: true})}
              style={this.showIfLoaded()}/>
          <img src="http://img.pandawhale.com/post-62718-Imgur-loading-gif-candidate-vo-OiXh.gif"
               style={this.hideIfLoaded()}/>
          <span>{comment}</span>
        </li>
    );
  }
}


var AllImgs = React.createClass({
  render: function() {
    return (
        <ul className="imgList small-block-grid-4">
          {this.props.data.map((img, i) => <Img key={i} {...img} /> )}
        </ul>
    )}
});


export default React.createClass({
  getInitialState: function() {
    return {data: [{url: "https://i.imgur.com/8klNsJq.jpg", comment: "Loading from reddit"}]};
  },

  loadCommentsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({data: data});
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  componentDidMount: function() {
    fetch("https://www.reddit.com/r/perfectloops.json")
    .then(response => {
          response.json().then(data => {
            var perfectLoops = data.data.children.map(child => child.data.url).filter(url => url.match(/\.(gif|jpeg)$/));
            this.setState({perfectLoops: perfectLoops});
          })
        });
  },

  render() {
  //  return (
  //      <div className="box">
  //        <img src={"http://img.pandawhale.com/post-62718-Imgur-loading-gif-candidate-vo-OiXh.gif"} />
  //      </div>
  //  );
  //}
    //var testUrl = https://www.reddit.com/r/perfectloops.json

    return (
      <div className="row">
        <h1>L8PS</h1>
        <Link className="row" to="/">Main Page</Link>
        <div className="row">
          <AllImgs data={this.state.perfectLoops}/>
        </div>
      </div>
  )}
});


//<AllImgs url="https://www.reddit.com/r/perfectloops.json"/>