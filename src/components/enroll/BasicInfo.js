import React from 'react';

class BasicInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: true }
  }

  toggleContent() {
    this.setState({ open: !this.state.open })
  }

  isActive() {
    if (this.state.open) {
      return "fields active";
    } else {
      return "fields";
    }
  }

  render() {
    return (
      <fieldset>
        <legend onClick={this.toggleContent.bind(this)} className="pointer">Basic Info</legend>
        <div className={this.isActive()}>
          <label htmlFor="name">First Name</label>
          <input type="text" name="name" placeholder="Arien" />
          <label htmlFor="surname">Surname</label>
          <input type="text" name="surname" placeholder="Doriath" />
        </div>
      </fieldset>
    )
  }
}

export default BasicInfo;
