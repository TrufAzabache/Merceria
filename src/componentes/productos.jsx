import Artic from './artic'
import '../estilos/productsss.css'
import ropabebe from '../imagenes/ropabebe.jpeg';
import pijama from '../imagenes/pijama.jpeg';
import vestido from '../imagenes/vestido.jpeg';
import encargo from '../imagenes/vestidoencargo.jpeg';
import monederos from '../imagenes/monederos.jpeg';
import conjunto from '../imagenes/conjunto.jpeg';
import React from 'react'

function productos() {
  return (
    <div className='products'>
      <div className='product__row'>
        <Artic
            id="121314"
            title="Conjunto de Bebé"
            price={8.99}
            rating={4}
            image={ropabebe}
        />
        <Artic
            id="121315"
            title="Monedero"
            price={12.99}
            rating={4}
            image={monederos}
        />
        <Artic
            id="121316"
            title="Monedero"
            price={10.99}
            rating={5}
            image={pijama}
        />
      </div>
      <div className='product__row'>
        <Artic
            id="121317"
            title="Vestido"
            price={17.99}
            rating={4}
            image={vestido}
        />
        <Artic
            id="121318"
            title="Conjunto"
            price={12.99}
            rating={5}
            image={conjunto}
        />
        <Artic
            id="121319"
            title="Encargo"
            price={10.99}
            rating={5}
            image={encargo}
        />
      </div>
      <div className='product__row'>
        <Artic
            id="121317"
            title="Vestido"
            price={17.99}
            rating={4}
            image={vestido}
        />
        <Artic
            id="121319"
            title="Encargo"
            price={10.99}
            rating={5}
            image={encargo}
        />
      </div>
    </div>
  )
}

export default productos