import React from 'react';
import { avatar } from '../../assets';
import { logo } from '../../assets';
import "./Header.scss";

export const Header = () => {
  return (
    <div className="header">
      <div className="left-header">
        <img src={logo} alt="logo" />
        <p>Movie Den</p>

      </div>
      <div className="right-header">
        <img src={avatar}  alt="" height="24px" />
      </div>
      
    </div>
  )
}
