const titulo = document.getElementById('tituloH1')
console.log(titulo)
console.log(titulo.innerText)


document.getElementById('saludarBtn')
.addEventListener('click', ()=>{
    const formSaludo = document.forms['formSaludo']
    const nombre = formSaludo['nombre'].value
    console.log(formSaludo)
    console.log(nombre)
    const tituloDos =  document.getElementById('saludoH2')
    if(!nombre){
        tituloDos.classList.remove('mostrarSaludo')
        alert('Debe ingresar el nombre')
    }else{
       tituloDos.innerText = 'Hola '+ nombre + '!!!!!!!!!!!!!'
       tituloDos.classList.add('mostrarSaludo')
       tituloDos.style.color = '#ff0f80'
    }
})