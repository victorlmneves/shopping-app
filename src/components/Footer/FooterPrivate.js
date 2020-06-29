import React from 'react'
import { Link } from 'react-router-dom'

import './Footer.scss'

function FooterPrivate() {
  function openModal() {
    document.body.classList.add('no-scroll')
    document.querySelector('.js-game').classList.add('open')
  }

  return (
    <footer className="footer">
      <div className="footer__inner">
        <ul className="footer__list">
          <li className="footer__item footer__item--topic">Jogo</li>
          <li className="footer__item">
            <Link to={'/play#instructions'} className="footer__link">
              Instructions
            </Link>
          </li>
          <li className="footer__item">
            <Link to={'/play'} className="footer__link">
              Play
            </Link>
          </li>
          <li className="footer__item">
            <Link to={'/play'} className="footer__link">
              Practice
            </Link>
          </li>
          <li className="footer__item">
            <Link to={'/prizes'} className="footer__link">
              Prizes
            </Link>
          </li>
        </ul>
        <ul className="footer__list">
          <li className="footer__item footer__item--topic">Perfil</li>
          <li className="footer__item">
            <Link to={'/register-coupon'} className="footer__link">
              Upload Receipts
            </Link>
          </li>
          <li className="footer__item">
            <Link to={'/account#personaldata'} className="footer__link">
              Dados Pessoais
            </Link>
          </li>
          <li className="footer__item">
            <Link to={'/account#upload'} className="footer__link">
              Participations
            </Link>
          </li>
          <li className="footer__item">
            <Link to={'/account#results'} className="footer__link">
              Game Results
            </Link>
          </li>
        </ul>
        <ul className="footer__list">
          <li className="footer__item footer__item--topic">Rankings</li>
          <li className="footer__item">
            <Link to={'/ranking#actual'} className="footer__link">
              Actual Ranking
            </Link>
          </li>
          <li className="footer__item">
            <Link to={'/ranking#me'} className="footer__link">
              My POsition
            </Link>
          </li>
          <li className="footer__item">
            <Link to={'/ranking#previous'} className="footer__link">
              Previous Weeks
            </Link>
          </li>
        </ul>
        <ul className="footer__list">
          <li className="footer__item footer__item--topic">Informations</li>
          <li className="footer__item">
            <Link to={'/faqs'} className="footer__link">
              FAQ's
            </Link>
          </li>
          <li className="footer__item">
            <Link to={'/rules'} className="footer__link">
              Rules
            </Link>
          </li>
          <li className="footer__item">
            <a
              target="_blank"
              href="#"
              rel="noopener noreferrer"
              className="footer__link"
            >
              Terms and Conditions
            </a>
          </li>
          <li className="footer__item">
            <Link to={'/cookies-policy'} className="footer__link">
              Cookies Policy
            </Link>
          </li>
          <li className="footer__item">
            <a
              target="_blank"
              href="#"
              rel="noopener noreferrer"
              className="footer__link"
            >
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default FooterPrivate
