import React from 'react'
import '../estilos/informacion.css'
import elena from '../imagenes/elena.jpeg'
import nieves from '../imagenes/Nieves.jpeg'

function informacion() {
  return (
    <div className='infor'>
        <div className='cuadro'>
          <div className='caja1'>
            <p className='parr1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, aut, rem ipsa ipsam magni non asperiores fugit aspernatur, laboriosam illum praesentium obcaecati eaque dicta rerum similique maiores natus tempora magnam!</p>
          </div>
          <img className='elena' src={elena}/>
        </div>
        <div className='cuadro2'>
          <img className="nieves" src={nieves} />
          <div className='caja2'>
            <p className='parr2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi soluta nemo eius perferendis illo, nesciunt deleniti dolorem aliquam eos nisi quo, saepe corrupti voluptatibus error suscipit sit. Non, eligendi vel.</p>
          </div>
        </div>
    </div>
  )
}

export default informacion