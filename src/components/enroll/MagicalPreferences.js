import React from 'react';

class MagicalPreferences extends React.Component {
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
        <legend onClick={this.toggleContent.bind(this)} className="pointer">Magical Preferences</legend>
        <div className={this.isActive()}>
          <label htmlFor="house">House</label>
          <div className="select-wrapper">
            <select name="house" defaultValue="">
              <option value="" disabled>-- Our choices show what we truly are --</option>
              <option value="gryffindor">Gryffindor</option>
              <option value="slytherin">Slytherin</option>
              <option value="ravenclaw">Raveclaw</option>
              <option value="hufflepuff">Hufflepuff</option>
            </select>
          </div>
          <label htmlFor="pet">Pet Companion</label>
          <div className="select-wrapper">
            <select name="pet" defaultValue="">
              <option value="" disabled>-- Choose Pet Wisely --</option>
              <option value="owl">Owl</option>
              <option value="cat">Cat</option>
              <option value="unicorn">Unicorn</option>
              <option value="toad">Toad</option>
              <option value="snake">Snake</option>
            </select>
          </div>
        </div>
      </fieldset>
    )
  }
}

export default MagicalPreferences;
