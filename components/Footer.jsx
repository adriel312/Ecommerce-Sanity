import React from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillFacebook } from 'react-icons/ai'
import { AiOutlineWhatsApp } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>Todos direitos reservados</p>
      <p className='icons'>
        <a href='www.instagram.com'><AiFillInstagram/></a>
        <a href='www.facebook.com'><AiFillFacebook /></a>
        <a href=''><AiOutlineWhatsApp /></a>
      </p>

    </div>
  )
}

export default Footer