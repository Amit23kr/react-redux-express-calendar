import React from "react";

export default class Calendar extends React.Component {
  render() {
    console.log("dta", this.props.children);
    return <div className="calendar">{this.props.children}</div>;
  }
}
