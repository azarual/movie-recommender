import React, { Component } from "react";
import { connect } from "react-redux";
import { selectMovie } from "../actions";

class Movie extends Component {
  constructor(props) {
    super(props);
    this._id = this.props.match.params.id; //props passed from <Route/>
  }
  componentWillMount() {
    this.props.selectMovie(+this._id);
  }

  render() {
    return <div>Hola Movie!</div>;
  }
}

export default connect(null, { selectMovie })(Movie);
