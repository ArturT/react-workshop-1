import React from 'react';

/* other approach when you need only render function, and no state
export default (props) =>
  (
    <header>
      <a href="/">
        <img src="../img/lunarts-logo-collapsed.png" className="logo"/>
      </a>
      <p>NEW HEADER</p>
    </header>
  )
  */

class Header extends React.Component {
  render() {
    return (
      <header>
        <a href="/">
          <img src="../img/lunarts-logo-collapsed.png" className="logo"/>
        </a>
      </header>
    )
  }
};

export default Header;
