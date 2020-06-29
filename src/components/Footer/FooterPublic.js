import React from 'react'
import { Link } from 'react-router-dom'

import './Footer.scss'

const footerList = [
  {
    id: 1,
    label: "FAQ's",
    link: 'Faqs',
  },
  {
    id: 2,
    label: 'Rules',
    link: 'ModalRues',
  },
  {
    id: 3,
    label: 'Terms and Conditions',
    link: '#',
  },
  {
    id: 4,
    label: 'Cookies Policy',
    link: '/cookies-policy',
  },
  {
    id: 5,
    label: 'Privacy Policy',
    link: '#',
  },
]

function FooterPublic() {
  function openModalFaqs() {
    document.body.classList.add('no-scroll')
    document.getElementById('ModalFaqs').classList.add('open')
  }

  function openModalRules() {
    document.body.classList.add('no-scroll')
    document.getElementById('ModalRules').classList.add('open')
  }

  function openModalCookies() {
    document.body.classList.add('no-scroll')
    document.getElementById('ModalCookies').classList.add('open')
  }

  return (
    <footer className="footer footer--public">
      <div className="footer__inner">
        <ul className="footer__list">
          <li className="footer__item footer__item--topic">Informations</li>
          <li className="footer__item">
            <Link
              onClick={() => {
                openModalFaqs()
              }}
              to="/"
              className="footer__link"
            >
              FAQ's
            </Link>
          </li>
          <li className="footer__item">
            <Link
              onClick={() => {
                openModalRules()
              }}
              to="/"
              className="footer__link"
            >
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
            <Link
              onClick={() => {
                openModalCookies()
              }}
              to="/"
              className="footer__link"
            >
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

export default FooterPublic
