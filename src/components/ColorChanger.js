import React, { Component } from 'react';

export default class ColorChanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allowEdit: this.props.allowEdit
    };
    this.callUpdate = this.callUpdate.bind(this)
  }
  componentWillReceiveProps(props){
    this.setState({ allowEdit: props.allowEdit })
  }
  // componentWillReceiveProps
  callUpdate(e){
    this.props.update(e.target.value)
  }
  render() {
    return (
      <select className="dropDownContainer"
      onChange={this.callUpdate}
      disabled={this.state.allowEdit === 'false'}>
        <option value="black"> Black </option>
        <option value="blue"> Blue </option>
        <option value="green"> Green </option>
      </select>
    )
  }
}