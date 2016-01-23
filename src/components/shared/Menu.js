import React from 'react';
import { Link } from 'react-router';
import Button from './Button';

class Menu extends React.Component {
  isActive(buttonName) {
    const { activeButton } = this.props;

    return buttonName == activeButton
  }

  render() {
    return (
      <div className="buttons-group">
        <Button url="/enroll" name="Enroll" isActive={this.isActive("enroll")}/>
        <Button url="/students_list" name="Students List" isActive={this.isActive("students_list")}/>
      </div>
    )
  }
};

export default Menu;
