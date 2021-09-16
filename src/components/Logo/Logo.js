import React from 'react';
import PropTypes from 'prop-types';
import './Logo.scss';

export const Logo = ({ logoClass }) => (
  <div className={`logo ${logoClass}`} />
);

Logo.propTypes = {
  logoClass: PropTypes.string.isRequired,
};
