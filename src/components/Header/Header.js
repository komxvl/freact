import React, { Component } from 'react';
import './style.css';

class Header extends Component {
  render() {
    return (
        <header className="Header">
            <h1 className="Header__logo">movie mate</h1>
            <ul className="Navigation">
                <li className="Navigation__item">
                    <a className="Navigation__link" href="{javascript.void(0)}">Login</a>
                </li>
                <li className="Navigation__item">
                    <a className="Navigation__link" href="{javascript.void(0)}">Browse</a>
                </li>
                <li className="Navigation__item">  
                    <a className="Navigation__link" href="{javascript.void(0)}">Login</a>          
                </li>
            </ul>
        </header>
    );
  }
}

export default Header;
