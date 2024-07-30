import React from 'react'
import '../estilos/inicionav.css'
import SearchIcon from '@material-ui/icons'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { FaBasketShopping } from "react-icons/fa6";
import { GiFlowerTwirl } from "react-icons/gi";
import {Link} from 'react-router-dom';
import { useStateValue } from './stateProvider';
import reducer from './reducer';


function Inicionav() {

const [{Basket}, dispatch] = useStateValue()


  return (
    <div className='containerNav'>
        <div className='iconoNav'>

        </div>
        <div className='opciones'>
            <div className='primeros'>
                <Link to='/' style={{textDecoration: `none`}}><div className='flor'><GiFlowerTwirl /></div></Link>
                <Link to='/'><h4 className='opcion'>Inicio</h4></Link>
                <Link to='/informacion'><h4 className='opcion'>Información</h4></Link>
                <Link to='/productos'><h4 className='opcion'>Productos</h4></Link>
                <Link to='/contacto'><h4 className='opcion'>Contacto</h4></Link>
                
            </div>
            <div className='segundos'>
                <Link to='/login'><h4 className='opcion'>Inicio Sesión</h4></Link>
                <Link to='/checkout'><div className='iconocesta'><FaBasketShopping/>
                <span className='header_optionLineTwo header__basketCount'>{Basket?.length}</span></div></Link>
            </div>
        </div>
        <div>
        </div>
        
    </div>
  )
}

export default Inicionav