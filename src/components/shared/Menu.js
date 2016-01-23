import React from 'react';

class Menu extends React.Component {
  render() {
    return (
      <div className="buttons-group">
        <a href="/enroll" className="button primary">Enroll</a>
        <a href="/students_list" className="button secondary">See Students</a>
      </div>
    )
  }
};

export default Menu;
