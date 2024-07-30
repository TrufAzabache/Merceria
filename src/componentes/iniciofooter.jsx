import React from 'react'
import '../estilos/iniciofooter.css'
import { FaInstagram } from "react-icons/fa";

function iniciofooter() {
  return (
    <div className='email'>
        <a href= {'https://www.instagram.com/nievesmerceria/'} className='insta'><FaInstagram className='instaicon'/></a>
    </div>
  )
}

export default iniciofooter