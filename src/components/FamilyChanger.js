import React, { Component } from 'react';

export default class FamilyChanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allowEdit: this.props.allowEdit
    };
    this.callUpdate = this.callUpdate.bind(this)
  }

  // componentWillReceiveProps
  componentWillReceiveProps(props){
    this.setState({ allowEdit: props.allowEdit })
  }
  callUpdate(e){
    this.props.update(e.target.value)
  }
  render() {
    return (
      <select className="dropDownContainer"
        onChange={e => this.props.update(e.target.value)}
        disabled={this.state.allowEdit === 'false'}>
        <option value="monospace"> Monospace </option>
        <option value="arial"> Arial </option>
        <option value="courier"> Courier </option>
      </select>
    )
  }
}