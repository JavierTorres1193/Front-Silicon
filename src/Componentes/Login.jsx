import '../Componentes/Login.css'

export function Login (){
    return(
        <>
        <div class="login-box">
<h2>Login</h2>
<form>
    <div class="user-box">
    <input type="text" name="" required="" placeholder='Usuario'/>
    <label for="floatingPassword">Usuario</label>
    </div>
    <div class="user-box">
    <input type="password" name="" required="" placeholder='Contraseña'/>
    <label for="floatingPassword">Contraseña</label>
    </div>
    <a href="#">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    Ingresar
    </a>
  </form>
</div>
</>
    )
    
}