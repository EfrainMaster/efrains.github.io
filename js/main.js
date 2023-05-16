
const btn = document.getElementById('buton');
const miForm = document.getElementById("formCont");

 miForm.addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_b9077ps';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Mensaje Enviado';
      let imagen = '<img src= "img/ok.com.png" width=30 height=30 >'
      document.getElementById("mensaje").innerHTML = "El Formulario se Completo con Exito" + imagen;
    }, (err) => {
      btn.value = 'Mensaje Enviado';
      alert(JSON.stringify(err));
    });
});


// const miForm = document.getElementById("formCont");
// miForm.addEventListener("submit", function(event) {
//     event.preventDefault();
//     let imagen = '<img src= "img/ok.com.png" width=30 height=30 >'
//     document.getElementById("mensaje").innerHTML = "El Formulario se Completo con Exito" + imagen;
// })






