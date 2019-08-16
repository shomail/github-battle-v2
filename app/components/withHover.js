import React from 'react';

export default function withHover(Component, propName = 'hovering') {
  return class WithHover extends React.Component {
    state = {
      hovering: false,
    };

    mouseOver = () => {
      this.setState({
        hovering: true,
      });
    };

    mouseOut = () => {
      this.setState({
        hovering: false,
      });
    };

    render() {
      const { hovering } = this.state;
      const props = {
        [propName]: hovering,
        ...this.props,
      };
      return (
        <div
          onFocus={this.mouseOver}
          onBlur={this.mouseOut}
          onMouseOver={this.mouseOver}
          onMouseOut={this.mouseOut}
        >
          <Component {...props} />
        </div>
      );
    }
  };
}
