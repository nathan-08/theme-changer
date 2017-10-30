import React, { Component } from 'react';

export default class SizeChanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allowEdit: this.props.allowEdit
    };
    this.callUpdate = this.callUpdate.bind(this)
  }
  callUpdate(e) {
    this.props.update(+e.target.value)
  }
  // componentWillReceiveProps
  componentWillReceiveProps(props) {
    this.setState({ allowEdit: props.allowEdit })
  }
  render() {
    return (
      <select className="dropDownContainer"
        onChange={this.callUpdate}
        disabled={this.state.allowEdit === 'false'}>
        <option value="12"> 12 </option>
        <option value="13"> 13 </option>
        <option value="14"> 14 </option>
      </select>
    )
  }
}