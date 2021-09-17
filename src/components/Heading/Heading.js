import React from 'react';
import PropTypes from 'prop-types';
import './Heading.scss';

export const Heading = ({ heading }) => (
  <h2 className={`heading ${heading}__heading`}>
    {heading}
  </h2>
);

Heading.propTypes = {
  heading: PropTypes.string,
};

Heading.defaultProps = {
  heading: 'Heading',
};
