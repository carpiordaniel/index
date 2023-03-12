

let valor = document.querySelectorAll(".form_contactar")

valor.forEach(function(button) {

    button.addEventListener('click', function(e){
        e.preventDefault()
        document.getElementById('formulario').style.display = 'block'
    })
})
    
document.getElementById('cerrar-form').addEventListener('click', function(){

    document.getElementById('formulario').style.display = 'none'
})


// envia correo
document.getElementById('envia-correo').addEventListener('click', function(e){
    e.preventDefault()
    let nombre = document.getElementById('nombres')
    let correo = document.getElementById('correo')
    let mensaje = document.getElementById('mensaje')
    
    if (nombre.value == '' || correo.value == '' || mensaje.value == ''){
        alert('Debes ingresar todos los campos del formulario')

    }else{
        
        let mensaje_final = 
        `Hola Daniel, te saluda ${nombre.value}
            Te escribo porque: ${mensaje.value} 
            
            Mi correo de contacto es: ${correo.value}`
    
        fetch("https://formsubmit.co/ajax/carpiordaniel@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: "Correo desde el portafolio",
            message: mensaje_final
        })
        })
            .then(response => response.json())
            .then(data =>  {
                (data.success) ? alert('Gracias por contactarme, tu correo fue enviado con éxito') : alert ('Error al enviar el correo')
                window.location.href = 'https://carpiordaniel.github.io/index/' 
            } 
            
            )
            .catch(error => console.log(error));

    }
})


