import React from 'react';
import Header from '../components/shared/Header';

class Layout extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Header/>
        <section className="main" aria-role="main">
        {this.props.children}
        </section>
      </div>
    )
  }
};

export default Layout;
