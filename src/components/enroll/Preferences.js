import React from 'react';
import Error from '../shared/Error';

class Preferences extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
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
      house: this.refs.house.value,
      pet: this.refs.pet.value
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
        <legend onClick={this.toggleForm.bind(this)}>Magical Preferences</legend>
        <div className={this.formVisibilityCss()}>
          <label htmlFor="house">House</label>
          <div className="select-wrapper">
            <select name="house" defaultValue="" ref="house">
              <option value="" disabled>-- Our choices show what we truly are --</option>
              <option value="gryffindor">Gryffindor</option>
              <option value="slytherin">Slytherin</option>
              <option value="ravenclaw">Raveclaw</option>
              <option value="hufflepuff">Hufflepuff</option>
            </select>
          </div>
          {this.renderErrorForField("house")}
          <label htmlFor="pet">Pet Companion</label>
          <div className="select-wrapper">
            <select name="pet" defaultValue="" ref="pet">
              <option value="" disabled>-- Choose Pet Wisely --</option>
              <option value="owl">Owl</option>
              <option value="cat">Cat</option>
              <option value="unicorn">Unicorn</option>
              <option value="toad">Toad</option>
              <option value="snake">Snake</option>
            </select>
          </div>
          {this.renderErrorForField("pet")}
        </div>
      </fieldset>
    )
  }
}

export default Preferences;
