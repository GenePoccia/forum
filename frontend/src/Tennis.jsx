import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class UnconnectedTennis extends Component {
  constructor(props) {
    super(props);
  }
  render = () => {
    console.log(this.props.threads);
    let messages = this.props.threads.filter(ele => {
      return ele.category === "tennis";
    }); //takes the threads in the soccer category

    console.log("threads: " + JSON.stringify(messages));

    let titles = messages.map(ele => {
      let linkTo = "/Tennis/" + ele.id;
      return <Link to={linkTo}>{ele.threadTitle} </Link>;
    }); //returns the title
    console.log(messages[0].replies);

    /*let replies = messages[0].replies.map(ele => {
      return (
        <div>
          <div>
            {ele.user} | {ele.msg}
          </div>
        </div>
      );
    });*/
    return (
      <div>
        <div>{titles}</div>
      </div>
    );
  };
}
let mapStateToProps = state => {
  return { threads: state.threads };
};
let Tennis = connect(mapStateToProps)(UnconnectedTennis);
export default Tennis;
