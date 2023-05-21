import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client'

const FooterBanner = ({footerBanner}) => { 
  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        <div className='left'>
          <p>texto p</p>
          <h3>TEXTO</h3>
          <h3>TEXTO H3</h3>
          <p>texto p</p>
        </div>
        <div className='rigth'>
          <p>texto p</p>
          <h3>TEXTO H3</h3>
          <p>texto p</p>
          <Link href={``}>
            <button type="button">BOTÃO</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FooterBanner