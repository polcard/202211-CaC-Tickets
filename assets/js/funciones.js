// Defino variables para la validacion

const valorTicket = 200;

// Descuentos

let descuentoEstudiante = 80;
let descuentoTrainee = 50;
let descuentoJunior = 15;

// Levanto los campos

let nombre = document.getElementById('nombreTicket');
let apellido = document.getElementById('apellidoTicket');
let mail = document.getElementById('emailTicket');
let cantidad = document.getElementById('cantidadTicket');
let categoria = document.getElementById('categoriaTicket');

// funcion para sacar el estilo de error a elementos del form

function quitarClaseError(){
    let x = document.querySelectorAll(".form-control, .form-select");
    let i;
    for(i = 0; i<x.length; i++){
        x[i].classList.remove('is-invalid');
    }
}

function validaMail(correo){
    return /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(correo);
}

function calculaMonto(){
    // primero llama funcion para limpiar errores
    quitarClaseError();

    // Verifica los campos
    if(nombre.value === ""){
        alert('Por favor, completa tu nombre');
        nombre.classList.add('is-invalid');
        nombre.focus();
        return;
    }

    if(apellido.value === ""){
        alert('Por favor, completa tu apellido');
        apellido.classList.add('is-invalid');
        apellido.focus();
        return;
    }

    if(mail.value === ""){
        alert('Por favor, completa tu mail');
        mail.classList.add('is-invalid');
        mail.focus();
        return;
    }

    // se determina si el mail es correcto
    if( !validaMail(mail.value) ){
        alert('Por favor, ingresar un correo electrónico válido');
        mail.classList.add('is-invalid');
        mail.focus();
        return;
    }

    if(cantidad.value === ""){
        alert('Por favor, Ingresar la cantidad a comprar');
        cantidad.classList.add('is-invalid');
        cantidad.focus();
        return;
    }

    if(categoria.value === ""){
        alert('Por favor, Seleccionar una categoría');
        categoria.classList.add('is-invalid');
        categoria.focus();
        return;
    }

    // calcula los valores de tickets
    let totalValorTickets = (cantidad.value) * valorTicket;

    // aplica descuentos
    switch (categoria.value) {
        case "1":
            totalValorTickets = totalValorTickets - (totalValorTickets*descuentoEstudiante / 100);       
            totalAPagar.innerHTML = totalValorTickets;
          break;
        case "2":
            totalValorTickets = totalValorTickets - (totalValorTickets*descuentoTrainee / 100);       
            totalAPagar.innerHTML = totalValorTickets;
          break;
        case "3":
            totalValorTickets = totalValorTickets - (totalValorTickets*descuentoJunior / 100);       
            totalAPagar.innerHTML = totalValorTickets;
          break;
        default:
          alert("No seleccionó Categoría");
      }

}
// Boton que escucha y ejecuta el cálculo
botonResumen.addEventListener('click', calculaMonto);

// borrar formulario
function limpia_formulario(){
    quitarClaseError();
    totalAPagar.innerHTML = '';
    let x = document.querySelectorAll(".form-control, .form-select");
    let i;
    for(i = 0; i<x.length; i++){
        x[i].value = '';
    }
    nombre.focus();
}

botonBorrar.addEventListener('click', limpia_formulario);