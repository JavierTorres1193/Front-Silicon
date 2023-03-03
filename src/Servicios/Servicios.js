const API_URL = 'http://localhost:3300'

//Exportar nuestras funciones


////////////////////////////////////////////////////////
/////////////////////CLIENTES /////////////////////////
//////////////////////////////////////////////////////


export async function clientes(){
    try{
    const response = await fetch(`${API_URL}/Clientes`);
    const data = await response.json();
    return data;
}   catch (error){
    console.log('Nuestro error es',error);
}
}



//Funcion que trae datos
export async function getClientes(){
    // const token = JSON.parse(localStorage.getItem('token'));
    
    const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
        //   Authorization: `Bearer ${token}`,
        },
      };
      
    try{
        const response = await fetch(`${API_URL}/clientes`, requestOptions);
        const data = await response.json();
        return data;
    }catch(error){
        console.log('Nuestro error', error);
    }
}

// Baja y alta

export async function BajaCliente(idClientes){
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',

        }
    };
    try{
        const response = await fetch(`${API_URL}/bajaclientes/${idClientes}`, requestOptions)
        const data = await response.json();
        console.log(data)
        return data;
    } catch(e){

        alert('No se puede conectar con el servidor')
    }
}

export async function AltaCliente(idClientes){
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try{
        const response = await fetch(`${API_URL}/altaclientes/${idClientes}`, requestOptions)
        const data = await response.json();
        // console.log(data)
        return data;
    } catch(e){

        alert('No se puede conectar con el servidor')
    }
}


////////////////////////////////////////////////////////
/////////////////////PROVEEDORES //////////////////////
//////////////////////////////////////////////////////




export async function proveedores(){
    try{
        const response = await fetch(`${API_URL}/Proveedores`);
        const data = await response.json();
        return data;
}   catch (error){
    console.log('Nuestro error es',error);
}
}



//Funcion que trae datos
export async function getProovedores(){
    // const token = JSON.parse(localStorage.getItem('token'));
    
    const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
        //   Authorization: `Bearer ${token}`,
        },
      };
      
    try{
        const response = await fetch(`${API_URL}/proveedores`, requestOptions);
        const data = await response.json();
        return data;
    }catch(error){
        console.log('Nuestro error', error);
    }
}




// Baja y alta

export async function BajaProveedores(idProveedores){
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',

        }
    };
    try{
        const response = await fetch(`${API_URL}/bajaproveedores/${idProveedores}`, requestOptions)
        const data = await response.json();
        console.log(data)
        return data;
    } catch(e){

        alert('No se puede conectar con el servidor')
    }
}

export async function AltaProveedores(idProveedores){
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try{
        const response = await fetch(`${API_URL}/altaproveedores/${idProveedores}`, requestOptions)
        const data = await response.json();
        // console.log(data)
        return data;
    } catch(e){

        alert('No se puede conectar con el servidor')
    }
}



////////////////////////////////////////////////////////
/////////////////////PRODUCTOS /////////////////////////
//////////////////////////////////////////////////////





export async function buzosycamperas(){
    try{
        const response = await fetch(`${API_URL}/buzosycamperas`);
        const data = await response.json();
        return data;
}   catch (error){
    console.log('Nuestro error es',error);
}
}

//Funcion que trae datos
export async function getBuzosyCamperas(){
    // const token = JSON.parse(localStorage.getItem('token'));
    
    const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
        //   Authorization: `Bearer ${token}`,
        },
      };
      
    try{
        const response = await fetch(`${API_URL}/buzosycamperas`, requestOptions);
        const data = await response.json();
        return data;
    }catch(error){
        console.log('Nuestro error', error);
    }
}

// Baja y alta

export async function BajaBuzosyCamperas(idBuzosyCamperas){
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',

        }
    };
    try{
        const response = await fetch(`${API_URL}/bajabuzosycamperas/${idBuzosyCamperas}`, requestOptions)
        const data = await response.json();
        console.log(data)
        return data;
    } catch(e){

        alert('No se puede conectar con el servidor')
    }
}

export async function AltaBuzosyCamperas(idBuzosyCamperas){
    const requestOptions={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try{
        const response = await fetch(`${API_URL}/altabuzosycamperas/${idBuzosyCamperas}`, requestOptions)
        const data = await response.json();
        // console.log(data)
        return data;
    } catch(e){

        alert('No se puede conectar con el servidor')
    }
}







export async function chanclas(){
    try{
        const response = await fetch(`${API_URL}/chanclas`);
        const data = await response.json();
        return data;
}   catch (error){
    console.log('Nuestro error es',error);
}
}




export async function mallas(){
    try{
        const response = await fetch(`${API_URL}/mallas`);
        const data = await response.json();
        return data;
}   catch (error){
    console.log('Nuestro error es',error);
}
}


export async function pantalones(){
    try{
        const response = await fetch(`${API_URL}/pantalones`);
        const data = await response.json();
        return data;
}   catch (error){
    console.log('Nuestro error es',error);
}
}

export async function remeras(){
    try{
        const response = await fetch(`${API_URL}/remeras`);
        const data = await response.json();
        return data;
}   catch (error){
    console.log('Nuestro error es',error);
}
}


export async function Login(datos){
    const requestOptions={
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos)
    };
    try{
    const response = await fetch(`${API_URL}/login`, requestOptions)
    const data = await response.json();
    console.log(data)
    return data;
    } catch(e){

        alert('No se puede conectar con el servidor')
    }
}

export async function Registro(datos){
    const requestOptions={
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos)
    };
    try{
    const response = await fetch(`${API_URL}/registro`, requestOptions)
    const data = await response.json();
    console.log(data)
    return data;
    } catch(e){
        // console.log('no funciona')
    }
}