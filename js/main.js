const miForm = document.getElementById("formCont");
miForm.addEventListener("submit", function(event) {
    event.preventDefault();
    // alert("Formulario Enviado");
    let imagen = '<img src= "img/ok.com.png" width=30 height=30 >'
    document.getElementById("mensaje").innerHTML = "El Formulario se Completo con Exito" + imagen;
})

