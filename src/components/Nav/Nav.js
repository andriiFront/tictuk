import React from 'react';
import PropTypes from 'prop-types';
import './Nav.scss';

export const Nav = ({ data }) => (
  <nav className="nav header__nav">
    <input
      className="nav__input"
      type="checkbox"
      name="checkbox-menu"
      id="checkbox-menu"
    />
    <label className="nav__label" htmlFor="checkbox-menu">
      <span className="nav__icon-bar fas fa-bars" />
      <span className="nav__icon-times fas fa-times" />
    </label>
    <ul className="nav__list">
      <li className="nav__item nav__item-active">home</li>
      {data.map(item => (
        <li key={item.id} className="nav__item">
          <a href={item.idLink} className="nav__link">
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

Nav.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.string.isRequired,
  ).isRequired,
};
