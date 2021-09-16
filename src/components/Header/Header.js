import React from 'react';
import { Logo } from '../Logo/Logo';
import { Nav } from '../Nav/Nav';
import { navItems } from '../../api/navItems';
import './Header.scss';

export const Header = () => (
  <header className="header">
    <div className="header__container">
      <div className="header__top">
        <div className="header__phone">
          <a
            href="tel:123-456-7890"
            className="header__link header__link-light"
          >
            <span className="fas fa-phone" />
            <span>123-456-7890</span>
          </a>
        </div>

        <Logo logoClass="header__logo" />

        <div className="header__action">
          <a href="tel:123-456-7890" className="header__link">
            call to order
          </a>
        </div>
      </div>
      <div className="header__title">
        <h1 className="header__title-text">
          Miami
          <br />
          {' '}
          Condo Kings
        </h1>
      </div>

      <Nav data={navItems} />

    </div>
  </header>
);
