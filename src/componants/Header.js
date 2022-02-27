import React from 'react';
import '../styles/Header.css'
import iconSet from "../selection.json";
import IcomoonReact, { iconList } from "icomoon-react";

export default function Header(props) {
  return (
    <>
    <header className={`th-mode-${props.mode}`}>
      <nav className="navbar navbar-expand-lg">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-content" aria-controls="navbar-content" aria-expanded="false" aria-label="toggle-navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar-content">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Contacts</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Blogs</a>
            </li>
          </ul>
          
        </div>
        <div className='myLogo mb-4'>
          <a href="/">
            <IcomoonReact iconSet={iconSet} color="rgb(253 255 0)" size={50} icon="react" />
          </a>
        </div>
      </nav>
      <div className="box">
        <div className="box-1"></div>
        <div className="box-2"></div>
      </div>
    </header>
    </>
  )
}
