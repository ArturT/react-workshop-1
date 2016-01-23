import React from 'react';
import Menu from '../components/shared/Menu';
import BasicInfo from '../components/enroll/BasicInfo';
import MagicalPreferences from '../components/enroll/MagicalPreferences';
import MenuButtonNames from '../lib/MenuButtonNames';

class Enroll extends React.Component {
  render() {
    return (
      <div>
        <Menu activeButton={MenuButtonNames.ENROLL} />
        <form>
          <BasicInfo/>
          <MagicalPreferences/>
          <div className="action-holder">
            <input type="submit" value="Enroll" />
          </div>
        </form>
      </div>
    )
  }
}

export default Enroll;
