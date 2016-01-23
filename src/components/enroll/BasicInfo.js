import React from 'react';
import Error from '../shared/Error';

class BasicInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    }
  }

  toggleForm() {
    this.setState({open: !this.state.open})
  }

  formVisibilityCss() {
    const { open } = this.state;
    const common = "fields";
    const visible = "active";
    return open ? `${common} ${visible}` : common;
  }

  value() {
    return {
      name: this.refs.name.value,
      surname: this.refs.surname.value
    }
  }

  renderErrorForField(field_name) {
    console.log('props', this.props);
    let errs = this.props.errors[field_name];
    console.log('errs', errs);
    if (errs) {
      return errs.map((message) => {
        return (
          <Error message={message} />
        )
      })
    }
  }

  render() {
    return (
      <fieldset>
        <legend onClick={this.toggleForm.bind(this)}>Basic Info</legend>
        <div className={this.formVisibilityCss()}>
          <label htmlFor="name">First Name</label>
          <input type="text" name="name" placeholder="Arien" ref="name" />
          {this.renderErrorForField("name")}
          <label htmlFor="surname">Surname</label>
          <input type="text" name="surname" placeholder="Doriath" ref="surname" />
          {this.renderErrorForField("surname")}
        </div>
      </fieldset>
    )
  }
}

export default BasicInfo;
