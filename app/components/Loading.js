import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  content: {
    fontSize: '35px',
    position: 'absolute',
    left: '0',
    right: '0',
    marginTop: '20px',
    textAlign: 'center',
  },
};

export default function Loading({ text = 'Loading', speed = 300 }) {
  const [content, setContent] = React.useState(text);

  React.useEffect(() => {
    const intId = window.setInterval(() => {
      setContent(preContent =>
        preContent === `${text}...` ? text : `${preContent}.`
      );
    }, speed);

    return () => window.clearInterval(intId);
  }, [text, speed]);

  return <p style={styles.content}>{content}</p>;
}

Loading.propTypes = {
  text: PropTypes.string,
  speed: PropTypes.number,
};
