'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div className="container">
        <Link href="/" className="navbar-brand brand-mono-bold wordmark">
          <span className="brand-white">Cyber</span>
          <span className="brand-dot-white">.</span>
          <span className="brand-white">Board</span>
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-controls="base-navbars" 
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="base-navbars">
          <div className="d-none d-md-block" style={{borderLeft: '2px solid white', height: '20px', margin: '0px 20px'}}></div>
          
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link href="/challenges" className="nav-link">
                <span className="d-block" title="Challenges">
                  <i className="fas fa-flag d-none d-md-block d-lg-none" style={{width: '20px'}}></i>
                </span>
                <span className="d-sm-block d-md-none d-lg-block text-nowrap">
                  <i className="fas fa-flag pr-1"></i>
                  Challenges
                </span>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/leaderboard" className="nav-link">
                <span className="d-block" title="Leaderboard">
                  <i className="fas fa-trophy d-none d-md-block d-lg-none" style={{width: '20px'}}></i>
                </span>
                <span className="d-sm-block d-md-none d-lg-block text-nowrap">
                  <i className="fas fa-trophy pr-1"></i>
                  Leaderboard
                </span>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/content" className="nav-link">
                <span className="d-block" title="Content">
                  <i className="fas fa-book d-none d-md-block d-lg-none" style={{width: '20px'}}></i>
                </span>
                <span className="d-sm-block d-md-none d-lg-block text-nowrap">
                  <i className="fas fa-book pr-1"></i>
                  Content
                </span>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/help" className="nav-link" target="_blank">
                <span className="d-block" title="Help">
                  <i className="fas fa-question d-none d-md-block d-lg-none" style={{width: '20px'}}></i>
                </span>
                <span className="d-sm-block d-md-none d-lg-block text-nowrap">
                  <i className="fas fa-question pr-1"></i>
                  Help
                </span>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/discord" className="nav-link" target="_blank">
                <span className="d-block" title="Discord">
                  <i className="fas fa-comments d-none d-md-block d-lg-none" style={{width: '20px'}}></i>
                </span>
                <span className="d-sm-block d-md-none d-lg-block text-nowrap">
                  <i className="fas fa-comments pr-1"></i>
                  Discord
                </span>
              </Link>
            </li>
          </ul>
          
          <hr className="d-sm-flex d-md-flex d-lg-none" />
          
          <ul className="navbar-nav ml-md-auto d-block d-sm-flex d-md-flex">
            <li className="nav-item">
              <Link href="/register" className="nav-link">
                <span className="d-block" title="Register">
                  <i className="fas fa-user-plus d-none d-md-block d-lg-none" style={{width: '20px'}}></i>
                </span>
                <span className="d-sm-block d-md-none d-lg-block text-nowrap">
                  <i className="fas fa-user-plus pr-1"></i>
                  Register
                </span>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/login" className="nav-link">
                <span className="d-block" title="Login">
                  <i className="fas fa-sign-in-alt d-none d-md-block d-lg-none" style={{width: '20px'}}></i>
                </span>
                <span className="d-sm-block d-md-none d-lg-block text-nowrap">
                  <i className="fas fa-sign-in-alt pr-1"></i>
                  Login
                </span>
              </Link>
            </li>

            <li className="nav-item">
              <button 
                className="nav-link close-link" 
                onClick={() => setIsMenuOpen(false)}
                style={{background: 'none', border: 'none', color: 'inherit'}}
              >
                <span className="d-block" title="Hide Navbar">
                  <i className="fas fa-caret-up d-none d-md-block d-lg-none"></i>
                </span>
                <span className="d-sm-block d-md-none d-lg-block text-nowrap">
                  <i className="fas fa-caret-up pr-1"></i>
                  <span className="d-lg-none">Hide Navbar</span>
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}