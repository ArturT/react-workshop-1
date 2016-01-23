import React from 'react';
import { Link } from 'react-router';

class Button extends React.Component {
  buttonClass() {
    const { isActive } = this.props;

    if (isActive) {
      return "button primary";
    } else {
      return "button secondary";
    }
  }

  render() {
    const { url, name } = this.props;

    return (
      <Link to={url} className={this.buttonClass()}>{name}</Link>
    )
  }
};

Button.propTypes = {
  isActive: React.PropTypes.bool,
  url: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired
};

export default Button;
