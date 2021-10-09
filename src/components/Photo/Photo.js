import React from 'react';
import PropTypes from 'prop-types';
import './Photo.scss';

export const Photo = ({ data }) => (
  <div className="photos gallery__photos">

    {data.map(item => (
      <>
        <div className={`photos__block ${item.photoSubClass}`}>
          <img src={item.img1} alt={item.imgAlt} className="photos__img" />
          <img src={item.img2} alt={item.imgAlt} className="photos__img" />
        </div>

        <p className="photos__text">
          {item.headerText}
          <a
            href={item.googleMapsLink}
            className="photos__link blue__theme"
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.address}
          </a>
        </p>
      </>
    ))}

  </div>
);

Photo.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    photoSubClass: PropTypes.string.isRequired,
    img1: PropTypes.string.isRequired,
    img2: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
    headerText: PropTypes.string.isRequired,
    googleMapsLink: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};
