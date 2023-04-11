//VALIDAR NOMBRE
const userNameField = document.querySelector("[name=nombre]");
const mensaje = document.querySelector("#mensaje"); 
// Es importante destacar que el símbolo "#" se utiliza para seleccionar elementos por identificador, mientras que el símbolo "." se utiliza para seleccionar elementos por clase.

const validateField = (e) =>{ //vamos a validar el campo con una funcion de evento /La función toma un evento como argumento, que se asigna a la variable e.
  const fieldValue = e.target.value; //fieldValue es el valor del campo y funciona asi:
//'e' es un objeto evento que se dispara cuando hago blur, el target es el campo a que he disparado el evento y value es el valor del campo.

  if (fieldValue.length==0){
    mensaje.textContent = "**El campo no puede estar vacio**";
  }

  else if(fieldValue.length>50)
   mensaje.textContent = "***Debe contener máximo 50 caracteres.**";

  else{
  mensaje.textContent = "";
  }

};

userNameField.addEventListener("blur",validateField); //validateField es la función que se ejecutará cuando se produzca el evento "blur" en userNameField.

//CLICK ENTER NOMBRE
const nextInput1 = document.querySelector("[name=email]"); // Obtener el siguiente campo de entrada
const EnterName = (e)=>{
  
  if(e.keyCode==13){  // Verificar si se presionó la tecla "Enter"
    e.preventDefault(); //Prevenir comportamiento predeterminado de la tecla
    nextInput1.focus(); //Mover el foco al siguiente campo
  }

}

userNameField.addEventListener("keydown",EnterName);

//En resumen, "const" es una palabra clave que se utiliza para declarar constantes en JavaScript,
// y se utiliza en este código para declarar las variables y la variable dentro de la función.


//**************************************************************************************************************************************************************** */
//Haz tú validación en javascript acá
/*const userNameField = document.querySelector("[name=nombre]");//cte que selecciona el documento HTML.
const mensaje = document.querySelector("#mensaje");
//valor del campo
const validateEmptyField = (message,e) => { //cte que valida campo vacio
  
  const fieldValue = e.target.value; //cte que es el valor del campo

  if(fieldValue.length ==0){
    mensaje.textContent = message;
  
  }
  else{
  mensaje.textContent = "";
  }
  
}

const validateMaxField = (message,e) => {

  const fieldValue = e.target.value; //cte que es el valor del campo


if(fieldValue.length >= 50){
  mensaje.textContent = message;
}

else{
mensaje.textContent = "";
}
}


userNameField.addEventListener("blur", (e) => validateEmptyField("**El campo no puede estar vacio**",e));
userNameField.addEventListener("blur", (e) => validateMaxField("**Debe contener máximo 50 caracteres.**",e));


*/
//********************************************************* */
/*const userNameField = document.querySelector("[name=nombre]");//cte que selecciona el documento HTML.
const mensaje = document.querySelector("#mensaje");
//valor del campo
const validateEmptyField = (message,e) => { //cte que valida campo vacio
  
  const fieldValue = e.target.value; //cte que es el valor del campo
  
  if(fieldValue.length == 0){
    mensaje.textContent = message;
  }else{
    mensaje.textContent = "";
  }
}

userNameField.addEventListener("blur", (e) => validateEmptyField("**El campo no puede estar vacio**",e));*/
//********************************************************* */
/*//Haz tú validación en javascript acá

const userNameField = document.querySelector("[name=nombre]");//cte que selecciona el documento HTML.
const mensaje = document.querySelector("#mensaje");
//valor del campo
const validateEmptyField = (message,e) => { //cte que valida campo vacio
  
  const fieldValue = e.target.value; //cte que es el valor del campo
  if(fieldValue.length == 0){
    mensaje.textContent = message;
  }else{
    mensaje.textContent = "";
  }


}


userNameField.addEventListener("blur", (e) => validateEmptyField("**El campo no puede estar vacio**",e));
*/

/*Campo Nombre no debe estar en blanco o vacío.
Debe contener máximo 50 caracteres.
Mostrar mensaje de error específico cuando alguna de estas condiciones no sea cumplida*/

/*Campo e-mail no debe estar en blanco o vacío.
Deber estar en formato e-mail conteniendo el caracter especial @ seguido de un dominio o proveedor seguido de un punto(.)
Ejemplo: texto@texto.com
Mostrar mensaje de error específico cuando alguna de estas condiciones no sea cumplida*/


//VALIDAR EMAIL
const userEmailField = document.querySelector("[name=email]");
const mensaje2 = document.querySelector("#mensaje2"); 

const validateField2 = (e) =>{
  const EmailField = e.target.value;

    if(EmailField.length==0){
      mensaje2.textContent = "**El campo e-mail no debe estar en blanco o vacío.**"
    }
    else if(!EmailField.includes("@") || !EmailField.includes(".")){
      mensaje2.textContent = "**Debe contener @ seguido de un dominio o proveedor seguido de un punto(.)**"
    }
    else{
      mensaje2.textContent = "";

    }

}

userEmailField.addEventListener("blur",validateField2);


//CLICK ENTER EMAIL
const nextInput2 = document.querySelector("[name=asunto]"); // Obtener el siguiente campo de entrada
const Entermail = (e)=>{
  
  if(e.keyCode==13){  // Verificar si se presionó la tecla "Enter"
    e.preventDefault(); //Prevenir comportamiento predeterminado de la tecla
    nextInput2.focus(); //Mover el foco al siguiente campo
  }

}

userEmailField.addEventListener("keydown",Entermail);


//VALIDAR ASUNTO
/*function validarEmail(email) {
  if (email.trim() === "") {
    return "El campo e-mail no debe estar en blanco o vacío.";
  }
  if (!email.includes("@") || !email.includes(".")) {
    return "El formato del e-mail es incorrecto. Debe contener el caracter especial @ seguido de un dominio o proveedor seguido de un punto(.). Ejemplo: texto@texto.com";
  }
  return "";*/

/*Ahora vamos a la entrada del formulario en el campo de asunto:

Es muy importante validar los errores en los formularios; si no está bien rellenado, no olvides agregar un mensaje para informar al usuario.

Campo Asunto no debe estar en blanco o vacío.
Debe contener máximo 50 caracteres.
Mostrar mensaje de error específico cuando alguna de estas condiciones no sea cumplida*/


const userAsuntoField = document.querySelector("[name=asunto]");
const mensaje3 = document.querySelector("#mensaje3");

const validateField3 = (e) =>{
  const AsuntoField = e.target.value;
    if(AsuntoField.length==0){
      mensaje3.textContent = "**El campo no puede estar vacio**";
    }
    else if(AsuntoField.length>50)
    mensaje3.textContent = "***Debe contener máximo 50 caracteres.**";

    else{
    mensaje3.textContent = "";
    }

}

userAsuntoField.addEventListener("blur",validateField3);

//CLICK ENTER ASUNTO
const nextInput3 = document.querySelector("[name=mensaje]"); // Obtener el siguiente campo de entrada
const EnterAsunto = (e)=>{
  
  if(e.keyCode==13){  // Verificar si se presionó la tecla "Enter"
    e.preventDefault(); //Prevenir comportamiento predeterminado de la tecla
    nextInput3.focus(); //Mover el foco al siguiente campo
  }

}

userAsuntoField.addEventListener("keydown",EnterAsunto);

// Agregar evento keydown
/*userAsuntoField.addEventListener("keydown", function(event) {
  // Verificar si se presionó la tecla "Enter"
  if (event.keyCode === 13) {
    // Prevenir comportamiento predeterminado de la tecla
    event.preventDefault();
    // Obtener el siguiente campo de entrada
    const nextInput = document.querySelector("[name=mensaje]");
    // Mover el foco al siguiente campo
    nextInput.focus();
  }
});*/

/*************************************************************************/

//VALIDAR MENSAJE
const userMensajeField = document.querySelector("[name=mensaje]");
const mensaje4 = document.querySelector("#mensaje4");

const validateField4 = (e) =>{
  const MensajeField = e.target.value;
    if(MensajeField.length==0){
      mensaje4.textContent = "**El campo no puede estar vacio**";
    }
    else if(MensajeField.length>300)
    mensaje4.textContent = "***Debe contener máximo 300 caracteres.**";

    else{
    mensaje4.textContent = "";
    }

}

userMensajeField.addEventListener("blur",validateField4);

//CLICK ENTER MENSAJE

const nextInput4 = document.querySelector("[name=boton]"); // Obtener el siguiente campo de entrada
const EnterMensaje = (e)=>{
  
  if(e.keyCode==13){  // Verificar si se presionó la tecla "Enter"
    e.preventDefault(); //Prevenir comportamiento predeterminado de la tecla
    nextInput4.focus(); //Mover el foco al siguiente campo name=boton
  }

}

userMensajeField.addEventListener("keydown",EnterMensaje);

//BOTON 
/*El botón enviar solo debe ser activado cuando todos los campos del formulário estén llenos
El botón debe enviar el mensaje.*/

// Obtener elementos de formulario y botón de envío
const form = document.querySelector("[name=form]"); 
const nomInput = document.getElementById('nom');
const mailInput = document.getElementById('mail');
const asunInput = document.getElementById('asun');
const mensagemTextarea = document.getElementById('mensagem');
const botonEnvio = document.getElementById('Envio');


// Función para validar los campos y habilitar/deshabilitar el botón de envío
function validarCampos() {
  // Verificar si los campos requeridos están completos
  if (nomInput.value !== '' && mailInput.value !== '' && asunInput.value !== '' && mensagemTextarea.value !== '') {
    // Habilitar el botón de envío
    botonEnvio.removeAttribute('disabled'); //remueve el atributo 'disable'
  } else {
    // Deshabilitar el botón de envío
    botonEnvio.setAttribute('disabled'); //si esta vacio se adiciona del atributo "disabled" al botón y asignándole el valor "true"('disabled',true).
  }
}

// Agregar controladores de eventos "input" a los campos requeridos
//Los controladores de eventos "input" se agregan a los campos requeridos nombre, correo electrónico, asunto y mensaje) para validar
// los campos y habilitar o deshabilitar el botón de envío del formulario en función de si se han completado o no todos los campos requeridos.
nomInput.addEventListener('input', validarCampos);
mailInput.addEventListener('input', validarCampos);
asunInput.addEventListener('input', validarCampos);
mensagemTextarea.addEventListener('input', validarCampos);






// También puede agregar una validación adicional en el evento "submit" del formulario para asegurarse de que se completen todos los campos requeridos antes de enviar el formulario.
/*form.addEventListener('submit', function(event) {
  if (nomInput.value === '' || mailInput.value === '' || asunInput.value === '' || mensagemTextarea.value === '') {
    event.preventDefault(); // Evitar que se envíe el formulario si no se han completado todos los campos requeridos
    alert('Por favor complete todos los campos requeridos.');
  }
});*/





/*const userBtnfield = document.querySelector("[name=boton");

const validBtn = (e) => {
  const userBtnfield = e.target.value
if(fieldValue.length !==0  && EmailField.length !==0 && AsuntoField.length !==0 && MensajeField.length !==0 ){
  userBtnfield.disabled = false;
}
else{
  userBtnfield.disabled = true;

}


}
userNameField.addEventListener("submit",validBtn);
userEmailField.addEventListener("submit",validBtn);
userAsuntoField.addEventListener("submit",validBtn);
userMensajeField.addEventListener("submit",validBtn);
*/


/*************************** *********************************************************/








