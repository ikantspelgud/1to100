import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class NumberButton extends Component {
  constructor(props) {
    super(props);

    this.state = { btnStyle: 'default', active: false }
    this.markButton = this.markButton.bind(this);
  }

  markButton() {
    // set active to true, mark bsStyle as success
    if (this.props.currNum === this.props.numVal) {
      this.setState({btnStyle: 'success', active: true});
    } else {
      this.setState({btnStyle: 'danger', active: true});
    }
  }

  render() {
    return (
      <Button style={{margin: ".6em"}} bsStyle={this.state.btnStyle} bsSize="large"
        active={this.state.active} disabled={this.props.disabled} onClick={this.markButton}>
        {this.props.numVal}
      </Button>
    );
  }
}

export default NumberButton;
