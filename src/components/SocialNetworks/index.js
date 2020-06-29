import React from 'react'
import { useSelector } from 'react-redux'

import './SocialNetworks.scss'

function SocialNetworks(props) {
  let { userDetail } = useSelector((state) => state.appReducer)
  let activeShoppingId = userDetail.shoppingId

  const shoppingsList = [
    {
      shoppingId: 1,
      socialNetworks: {
        name: 'Shopping name 1',
        url: 'ShoppingName1',
      },
    },
    {
      shoppingId: 2,
      socialNetworks: {
        name: 'Shopping name 2',
        url: 'ShoppingName2',
      },
    },
    {
      shoppingId: 3,
      socialNetworks: {
        name: 'Shopping name 3',
        url: 'ShoppingName3',
      },
    },
    {
      shoppingId: 4,
      socialNetworks: {
        name: 'Shopping name 4',
        url: 'ShoppingName4',
      },
    },
    {
      shoppingId: 5,
      socialNetworks: {
        name: 'Shopping name 5',
        url: 'ShoppingName5',
      },
    },
  ]

  const mobileSocialNetworks = shoppingsList.map((item) => (
    <ul key={item.shoppingId} className="social-networks__list--mobile">
      {item.shoppingId === activeShoppingId && (
        <li className="social-networks__item">
          <a
            href={`https://www.facebook.com/${item.socialNetworks.url}/`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <figure className="social-networks__icon">
              <img
                src={require('../../assets/images/icon-facebook.svg')}
                alt="Facebook"
              />
            </figure>
          </a>
          <a
            href={`https://www.facebook.com/${item.socialNetworks.url}/`}
            target="_blank"
            className="social-networks__link"
            rel="noopener noreferrer"
          >
            {item.socialNetworks.name}
          </a>
        </li>
      )}
    </ul>
  ))

  return (
    <section className="social-networks">
      <div className="social-networks__inner">
        <ul className="social-networks__list">
          <li className="social-networks__item">
            <a
              href={`https://www.facebook.com/${item.socialNetworks.url}/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <figure className="social-networks__icon">
                <img
                  src={require('../../assets/images/icon-facebook.svg')}
                  alt="Facebook"
                />
              </figure>
            </a>
            <a
              href={`https://www.facebook.com/${item.socialNetworks.url}/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Shopping name
            </a>
          </li>
          <li className="social-networks__item">
            <a
              href={`https://www.facebook.com/${item.socialNetworks.url}/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <figure className="social-networks__icon">
                <img
                  src={require('../../assets/images/icon-facebook.svg')}
                  alt="Facebook"
                />
              </figure>
            </a>
            <a
              href={`https://www.facebook.com/${item.socialNetworks.url}/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Shopping name
            </a>
          </li>
          <li className="social-networks__item">
            <a
              href={`https://www.facebook.com/${item.socialNetworks.url}/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <figure className="social-networks__icon">
                <img
                  src={require('../../assets/images/icon-facebook.svg')}
                  alt="Facebook"
                />
              </figure>
            </a>
            <a
              href={`https://www.facebook.com/${item.socialNetworks.url}/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Shopping name
            </a>
          </li>
          <li className="social-networks__item">
            <a
              href={`https://www.facebook.com/${item.socialNetworks.url}/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <figure className="social-networks__icon">
                <img
                  src={require('../../assets/images/icon-facebook.svg')}
                  alt="Facebook"
                />
              </figure>
            </a>
            <a
              href={`https://www.facebook.com/${item.socialNetworks.url}/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Shopping name
            </a>
          </li>
          <li className="social-networks__item">
            <a
              href={`https://www.facebook.com/${item.socialNetworks.url}/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <figure className="social-networks__icon">
                <img
                  src={require('../../assets/images/icon-facebook.svg')}
                  alt="Facebook"
                />
              </figure>
            </a>
            <a
              href={`https://www.facebook.com/${item.socialNetworks.url}/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Shopping name
            </a>
          </li>
        </ul>
        {mobileSocialNetworks}
      </div>
    </section>
  )
}

export default SocialNetworks
