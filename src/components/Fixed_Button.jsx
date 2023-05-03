import React from 'react';
import PropTypes from 'prop-types';

const converter = ({ buttonText, onClick }) => {
  return (
    <button className="fixed bottom-0 right-0 p-4 bg-sandybrown text-white rounded-full" onClick={onClick}>
      {buttonText}
    </button>
  );
};

converter.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default converter;
