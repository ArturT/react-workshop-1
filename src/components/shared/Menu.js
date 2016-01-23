import React from 'react';
import { Link } from 'react-router';

class Menu extends React.Component {
  render() {
    return (
      <div className="buttons-group">
        <Link to="/enroll" className="button primary">Enroll</Link>
        <Link to="/students_list" className="button secondary">See Students</Link>
      </div>
    )
  }
};

export default Menu;
