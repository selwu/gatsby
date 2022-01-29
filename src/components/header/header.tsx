import * as React from 'react';
import { Link } from 'gatsby';
import './header.scss';
import logo from '../../images/Superlive-logo.png';

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="logo" />
      </Link>
      <span>
        <i className="header__menu-icon fas fa-bars" />
      </span>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li>
            <Link className="header__menu-link" activeClassName="header__menu-active" to={'/'}>
              Продукт
            </Link>
          </li>
          <li>
            <Link
              className="header__menu-link"
              activeClassName="header__menu-active"
              to={'/meetup'}
            >
              ICE 2022
            </Link>
          </li>
          <li>
            <Link
              className="header__menu-link"
              activeClassName="header__menu-active"
              to={'/contacts'}
            >
              Контакты
            </Link>
          </li>
          <li>
            <Link
              className="header__language-link"
              activeClassName="header__language-active"
              to={'/'}
            >
              En
            </Link>
          </li>
          <li>
            <Link
              className="header__language-link"
              activeClassName="header__language-active"
              to={'/'}
            >
              Ru
            </Link>
          </li>
          <li>
            <Link
              className="header__language-link"
              activeClassName="header__language-active"
              to={'/'}
            >
              Es
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
