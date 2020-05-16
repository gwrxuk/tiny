import React from 'react';
import { useTranslation } from 'react-i18next'
import './Nav.scss';

const Nav = () => {
  const { t, i18n } = useTranslation()
  return (
      <div className="nav">
        <div className="img-wrap">
          <img className="img" src="app_logo.png" alt="logo" />
        </div>
        <div className="menu">
          <div className="item">{t('profile.label')}</div>
          <div className="item">{t('help.label')}</div>
        </div>
      </div>
    ) 
}

export default Nav;
