import React from 'react';
import Header from '../components/shared/Header';
import Menu from '../components/shared/Menu';

class Participants extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <section className="main" aria-role="main">
          <Menu />
          <h1>List of enrolled students </h1>
          <ul className="students">
            <li className="student-item">
              <h2> Harry Potter </h2>
              <p>
                <strong>House:</strong>
                Gryffindor
              </p>
              <p>
                <strong> Pet Companion: </strong>
                Owl
              </p>
            </li>
            <li className="student-item">
              <h2> Draco Malfoy </h2>
              <p>
                <strong>House:</strong>
                Slythering
              </p>
              <p>
                <strong> Pet Companion: </strong>
                Unicorn
              </p>
            </li>
            <li className="student-item">
              <h2> Hermiona Granger </h2>
              <p>
                <strong>House:</strong>
                Gryffindor
              </p>
              <p>
                <strong> Pet Companion: </strong>
                Cat
              </p>
            </li>
          </ul>
        </section>
      </div>
    )
  }
}

export default Participants;
