import React from 'react';
import PropTypes from 'prop-types';
import Hover from './Hover';
// import withHover from './withHover';

const styles = {
  container: {
    position: 'relative',
    display: 'flex',
  },
  tooltip: {
    boxSizing: 'border-box',
    position: 'absolute',
    width: '160px',
    bottom: '100%',
    left: '50%',
    marginLeft: '-80px',
    borderRadius: '3px',
    backgroundColor: 'hsla(0, 0%, 20%, 0.9)',
    padding: '7px',
    marginBottom: '5px',
    color: '#fff',
    textAlign: 'center',
    fontSize: '14px',
  },
};
// CLASS BASED TOOLTIP COMPONENT, hover logic is coupled in this component and we cant use it with some other component
// export default class Tooltip extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       hovering: false,
//     };

//     this.mouseOver = this.mouseOver.bind(this);
//     this.mouseOut = this.mouseOut.bind(this);
//   }

//   mouseOver() {
//     this.setState({
//       hovering: true,
//     });
//   }

//   mouseOut() {
//     this.setState({
//       hovering: false,
//     });
//   }

//   render() {
//     const { text, children } = this.props;
//     const { hovering } = this.state;

//     return (
//       <div
//         onFocus={this.mouseOver}
//         onBlur={this.mouseOut}
//         onMouseOver={this.mouseOver}
//         onMouseOut={this.mouseOut}
//         style={styles.container}
//       >
//         {hovering === true && <div style={styles.tooltip}>{text}</div>}
//         {children}
//       </div>
//     );
//   }
// }

// HOC approch, to reuse hover logic we can use HOC
// function Tooltip({ text, children, isHover }) {
//   return (
//     <div style={styles.container}>
//       {isHover === true && <div style={styles.tooltip}>{text}</div>}
//       {children}
//     </div>
//   );
// }

// Render prop approach, to solve the naming collision and be more explixit about how component is render
export default function Tooltip({ text, children }) {
  return (
    <Hover>
      {isHover => (
        <div style={styles.container}>
          {isHover === true && <div style={styles.tooltip}>{text}</div>}
          {children}
        </div>
      )}
    </Hover>
  );
}

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  // isHover: PropTypes.bool.isRequired, only need in HOC, because now we are not passing it to the component
};

// export default withHover(Tooltip, 'isHover'); HOC method
