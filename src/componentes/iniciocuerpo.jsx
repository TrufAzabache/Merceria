import React from 'react'
import '../estilos/iniciocuerpo.css'
import { GiFlowerTwirl } from "react-icons/gi";
import 'animate.css/animate.min.css';
import cardimg from '../imagenes/vaqueros.jpg'
import cardimg2 from '../imagenes/costura.jpg'
import cardimg3 from '../imagenes/bordado.jpg'


function iniciocuerpo() {
  return (
    <div className='bodi'>
        <div className='card1'>
            <div className='contenido'>
                <div className='icon'><GiFlowerTwirl /></div>
                <div className='animate__animated animate__rubberBand'>
                    <h1 className='nombre'>MERCERIA NIEVES</h1>
                </div>
                <p className='info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex omnis est deleniti aliquid velit voluptatum eius ducimus corporis itaque, dolorem similique, doloribus placeat illum impedit ratione. Sit iure reprehenderit iusto?</p>
            </div>
        </div>
        
    </div>
  )
}

export default iniciocuerpo