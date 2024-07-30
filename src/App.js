import {useState} from 'react'
import appFirebase from '../src/componentes/credenciales'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import Inicionav from './componentes/inicionav'
import fondo from './imagenes/pexels-fotios-photos-1083822.jpg'
import './estilos/App.css'
import Iniciocuerpo from './componentes/iniciocuerpo'
import Iniciofooter from './componentes/iniciofooter'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Informacion from './componentes/informacion';
import Productos from './componentes/productos';
import Contacto from './componentes/contacto';
import Login from '../src/componentes/login';
import Checkout from './componentes/checkout';

const auth = getAuth(appFirebase)

function App() {
  const [usuario, setUsuario] = useState (null)

  onAuthStateChanged(auth, (usuarioFirebase)=> {
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase)
    }
    else {
      setUsuario(null)
    }
  })
  return (
    <Router>
      <div className='todo' style={{ backgroundImage: `url(${fondo})`, backgroundSize: `cover`, backgroundRepeat: `no-repeat`}}>
        <Inicionav/>
        <Switch>
          <Route exact path="/">
            <Iniciocuerpo/>
          </Route>
          <Route path="/informacion">
            <Informacion/>
          </Route>
          <Route path="/productos">
            <Productos/>
          </Route>
          <Route path="/contacto">
            <Contacto/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/checkout">
            <Checkout/>
          </Route>
        </Switch>
        <Iniciofooter/>
      </div>
    </Router>
  )
}

export default App
