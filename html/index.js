

const formularioUsuario = document.getElementById('formulario')
const titulo = document.getElementById('titulo')
const nombreUsuario = document.getElementById('nombre')
const apellidoUsuario = document.getElementById('apellido')
const correoUsuario = document.getElementById('correo')
const divRemove = document.getElementById('divRemove')
const divSaludar = document.getElementById('divSaludar')

const infoUsuario = {}

formularioUsuario.onsubmit = (e) =>{
    e.preventDefault()
    if(nombreUsuario.value && apellidoUsuario.value && correoUsuario.value) {
    infoUsuario.nombre = nombreUsuario.value
    infoUsuario.apellido = apellidoUsuario.value
    infoUsuario.correo = correoUsuario.value
    console.log(infoUsuario)
    localStorage.setItem('infoUsuario',JSON.stringify(infoUsuario))
   nombreUsuario.value = ''
    apellidoUsuario.value = ''
    correoUsuario.value = ''
    
   

}
}

