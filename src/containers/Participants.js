import React from 'react';
import Menu from '../components/shared/Menu';
import Participant from '../components/shared/Participant';
import MenuButtonNames from '../lib/MenuButtonNames';
import API from '../lib/API';

class Participants extends React.Component {
  constructor(props) {
    super(props);
    const api = new API();
    this.state = {
      students: api.getStudents()
    }
  }

  renderStudents() {
    return this.state.students.map((student) => {
      return (
        <Participant key={student.id} name={student.name} surname={student.surname} house={student.house} pet={student.pet}/>
      )
    })
  }

  render() {
    return (
      <div>
        <Menu activeButton={MenuButtonNames.PARTICIPANTS} />
        <h1>List of enrolled students </h1>
        <ul className="students">
          {this.renderStudents()}
        </ul>
      </div>
    )
  }
}

export default Participants;
