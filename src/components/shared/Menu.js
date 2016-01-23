import React from 'react';
import { Link } from 'react-router';
import Button from './Button';

class Menu extends React.Component {
  render() {
    return (
      <div className="buttons-group">
        <Button url="/enroll" name="Enroll" isActive={true}/>
        <Button url="/students_list" name="Students List" isActive={false}/>
      </div>
    )
  }
};

export default Menu;
