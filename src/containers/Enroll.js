import React from 'react';
import Menu from '../components/shared/Menu';
import MenuButtonNames from '../lib/MenuButtonNames';
import BasicInfo from '../components/enroll/BasicInfo';
import Preferences from '../components/enroll/Preferences';
import API from '../lib/API';
import history from '../history';

class Enroll extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    //console.log(this.refs);
    //console.log(this.refs.basic.value());
    //console.log(this.refs.preferences.value());
    let student = Object.assign({}, this.refs.basic.value(), this.refs.preferences.value());
    console.log(student);
    const api = new API();
    const result = api.addStudent(student.name, student.surname, student.house, student.pet);
    history.pushState(null, '/participants')
  }

  render() {
    return (
      <div>
        <Menu activeButton={MenuButtonNames.ENROLL} />
        <form>
          <BasicInfo ref="basic" />
          <Preferences ref="preferences" />
          <div className="action-holder">
            <input onClick={this.handleSubmit.bind(this)} type="submit" value="Enroll" />
          </div>
        </form>
      </div>
    )
  }
}

export default Enroll;
