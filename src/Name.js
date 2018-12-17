import React, { Component } from "react";
import PropTypes from "prop-types";

const propTypes = {
  title: PropTypes.string.isRequired
};

class Name extends Component {
  componentWillMount() {}

  render() {
    return <div>{this.props.title}</div>;
  }
}

Name.propTypes = propTypes;

export default Name;
