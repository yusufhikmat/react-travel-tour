import React from 'react'

const FooterDetails = (props) => {
  return (
    <div>
        <h3 className='footer-link-heading'>{props.title}</h3>
            <ul className='footer-link'>
                <li className='footer-list'>
                    <a href="/">{props.link1}</a>
                </li>
                <li className='footer-list'>
                    <a href="/">{props.link2}</a>
                </li>
                <li className='footer-list'>
                    <a href="/">{props.link3}</a>
                </li>
                <li className='footer-list'>
                    <a href="/">{props.link4}</a>
                </li>
            </ul>
    </div>
  )
}

export default FooterDetails