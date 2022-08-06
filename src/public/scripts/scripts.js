let enviar = document.getElementById("enviar")
let nombre = document.getElementById("nombre")
nombre.text="Hola uwu"


enviar.addEventListener("onclick", 
    alert("Le hiciste click a enviar mensajes: " + nombre.value)
)

function prueba_func(text){
    alert("El mensaje es un " + text)
}