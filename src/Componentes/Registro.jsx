import { useState } from "react"
import { Link } from "react-router-dom";
import * as API from '../Servicios/Servicios'

export function Registro(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [apellido_nombre, setApellidonombre] = useState('');
    const [mensajeSuccess, setmensajeSuccess] = useState('');


    const registroForm  = async (event)=>{
        event.preventDefault();
        const user = await API.Registro({username, password, email, apellido_nombre})
        if(user.status){
            setmensajeSuccess(user.mensaje)
            setTimeout(()=>{
                setmensajeSuccess('');
            }, 4000)
            window.location.reload(true)
        }
    }
    return(
        <>
        <div className="container">
        {
            mensajeSuccess?
            <div className="alert alert-success" role="alert">
                {mensajeSuccess}
            </div>:''
        }
        <div class="login-box">
    <h2>Crear Usuario</h2>
    <form onSubmit={registroForm}>
    <div class="user-box">
    <input 
    type="text" 
    name="" 
    required=""
    placeholder="Nombre del Usuario" 
    value={username} 
    onChange={(event)=>setUsername(event.target.value)}
    />
    <small id="helpId" className="text-muted">&nbsp;</small>
    <label>Nombre de Usuario</label>
    </div>


    <div class="user-box">
    <input 
    type="password" 
    name="" 
    required=""
    value={password}
    placeholder="Contraseña" 
    onChange={(event)=>setPassword(event.target.value)}
    />
    <small id="helpId" className="text-muted">&nbsp;</small>
    <label>Contraseña</label>
    </div>

    <div class="user-box">
    <input 
    type="email" 
    name="" 
    required=""
    placeholder="Correo Electronico" 
    value={email}
    onChange={(event)=>setEmail(event.target.value)}
    />
    <small id="helpId" className="text-muted">&nbsp;</small>
    <label>Email</label>
    </div>

    <div class="user-box">
    <input 
    type="text" 
    name="" 
    required=""
    placeholder="Apellido y Nombre del Usuario" 
    value={apellido_nombre}
    onChange={(event)=>setApellidonombre(event.target.value)}
    />
    <small id="helpId" className="text-muted">&nbsp;</small>
    <label>Apellido y nombre</label>
    </div>

    

    <a href="#" type="submit">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    Guardar
    </a>

    <Link to={'/login'}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    Volver
    </Link>



  </form>
</div>

        </div>
        </>
    )
}
