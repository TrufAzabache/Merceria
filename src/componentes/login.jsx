import React, { useState } from 'react'
import '../estilos/login.css';
import 'animate.css';
import appFirebase from '../componentes/credenciales';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const auth = getAuth(appFirebase)

const Login = () => {

    const history = useHistory();
    const [registrando, setRegistrando] = useState(false)
    
    const functAutenticacion = async(e) =>{
        e.preventDefault();
        
        const correo = e.target.email.value;
        const contraseña = e.target.password.value;
        console.log(correo, contraseña);
        if (registrando) {
            await createUserWithEmailAndPassword(auth, correo, contraseña)
        }
        else {
            await signInWithEmailAndPassword (auth, correo, contraseña)
        }
    }

  return (
    <div className='container-login'>
        
            <div className='cuadroLogin'>
                <div className='dentro'>
                    <form className='form' onSubmit={functAutenticacion}>
                        <div className='take1'>
                            <div className='inp1'>
                                <input type="text" placeholder='Email' className='entrada1' id='email'/>
                            </div>
                            <div className='inp2'>
                                <input type="password" placeholder='Contraseña' className='entrada1' id='password'/>
                            </div>
                        </div>
                        <div className='take2'>
                            <div className='inp4'>
                                <button className='entrada2'>{registrando ? "Regístrate" : "Inicia Sesión"}</button>
                            </div>
                            <div className='inp3'>
                                <h6 className='linea'>{registrando ? "Si ya tienes cuenta," : "No tienes cuenta,"}<button className='entrada3' onClick={()=>setRegistrando(!registrando)}>{registrando ? "Inicia Sesión" : "Regístrate"} </button></h6>
                            </div>
                            
                        </div>
                    </form>
                </div>

            </div>
        
    </div>
  )
}

export default Login