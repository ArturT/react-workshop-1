import React from 'react';

class Participant extends React.Component {
  render() {
    const { name, surname, house, pet } = this.props;

    return (
      <li className="student-item">
        <h2>{name} {surname}</h2>
        <p>
          <strong>House: </strong>
          {house}
        </p>
        <p>
          <strong>Pet Companion: </strong>
          {pet}
        </p>
      </li>
    )
  }
}

export default Participant;
