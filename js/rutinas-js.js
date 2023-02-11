//Inicializamos los "listener" una vez que la pagina completa este cargada !!
window.onload=incializarJS;

//resaltar texto de la pagina
function resaltar_texto (destino) {
    let isDark= document.getElementById('checkbox-tema').checked;
    
    if(isDark) {
        document.getElementById(destino).classList.toggle("estilo-resaltar");
        //ajustamos encabezados de secciones segun corresponda
        document.getElementById('menu_nav_idiomas').onclick= function() {
            document.getElementById('idiomas').style.color='#000000';
        };
        document.getElementById('menu-nav-comp').onclick= function() {
            document.getElementById('competencias').style.color='#000000';
        };
        document.getElementById('menu-nav-est').onclick= function() {
            document.getElementById('estudios').style.color='#000000';
        };
        document.getElementById('menu-nav-exp').onclick= function() {
            document.getElementById('experiencias').style.color='#000000';
        };
        document.getElementById('menu-nav-redes').onclick= function() {
            document.getElementById('redessociales').style.color='#000000';
        };
        document.getElementById('menu_nav_contacto').onclick= function() {
            document.getElementById('contacto').style.color='#000000';
        };
        //aplicamos efecto por 2 segundos y limpiamos texto(destino);
        setTimeout(() => {
            document.getElementById(destino).classList.toggle("estilo-resaltar");
            //ajustamos encabezados de secciones segun corresponda
            document.getElementById('idiomas').style.color='#ffffff';
            document.getElementById('competencias').style.color='#ffffff';
            document.getElementById('estudios').style.color='#ffffff';
            document.getElementById('experiencias').style.color='#ffffff';
            document.getElementById('redessociales').style.color='#ffffff';
            document.getElementById('contacto').style.color='#ffffff';
        }, 2000)
    } else {
        document.getElementById(destino).classList.toggle("estilo-resaltar");
        //limpiar_texto(destino);
        setTimeout(() => {
            document.getElementById(destino).classList.toggle("estilo-resaltar");
        }, 2000)
    }
}

function cambiarTemaFondo() {
    //
    let isDark= document.body.classList.toggle('darkmode');
    var barraNavegacion = document.querySelector('nav');
    //
    if(isDark) {
        cambiarTemaFondo.checked=true;
        document.getElementById('checkbox-tema').setAttribute('checked', 'checked');
        barraNavegacion.classList.add('bg-dark', 'shadow');
        //ajustamos encabezados de secciones segun corresponda
        document.getElementById('idiomas').style.color='#ffffff';
        document.getElementById('competencias').style.color='#ffffff';
        document.getElementById('estudios').style.color='#ffffff';
        document.getElementById('experiencias').style.color='#ffffff';
        document.getElementById('redessociales').style.color='#ffffff';
        document.getElementById('contacto').style.color='#ffffff';
    } else {
        cambiarTemaFondo.checked=true;
        barraNavegacion.classList.remove('bg-dark', 'shadow');
        //ajustamos encabezados de secciones segun corresponda
        document.getElementById('idiomas').style.color='#000000';
        document.getElementById('competencias').style.color='#000000';
        document.getElementById('estudios').style.color='#000000';
        document.getElementById('experiencias').style.color='#000000';
        document.getElementById('redessociales').style.color='#000000';
        document.getElementById('contacto').style.color='#000000';
    }
}

//validaciones a nivel del FORMULARIO
function validarFormulario(event){
    if (!formulario.checkValidity()) { 
        document.getElementById("boton_enviar_form").enabled=false;      
        event.preventDefault();
        event.stopPropagation();
    }
    formulario.classList.add('was-validated');
}

function validarEnviarFormulario() {
    //  Analizamos todo el formulario con validacion de la clase "Bootstrap"
    const forms = document.querySelectorAll('.needs-validation');
    // recorremos todos los elementos y de corresponder bloqueamos boton "submit"
    Array.from(forms).forEach(form => {
        if (form.checkValidity()) {        
            const myModal = new bootstrap.Modal('#modalFormOK', {
                keyboard: false
              });
            myModal.show();
        } else {
            const myModal = new bootstrap.Modal('#modalFormError', {
                keyboard: false
              });
            myModal.show();
        }
    })
}

//Funcion para limpiar texto
function limpiar_texto (destino) {
    const elemento= document.getElementById(destino);
    setTimeout(elemento.style.background="", 4000);
}

//elemento checkbox para cambiar tema de fondo
const checkboxTema= document.getElementById('checkbox-tema');
//elementos del menu de navegacion
const menu_nav_idiomas= document.getElementById('menu_nav_idiomas');
const menu_nav_comp= document.getElementById('menu-nav-comp');
const menu_nav_est= document.getElementById('menu-nav-est');
const menu_nav_exp= document.getElementById('menu-nav-exp');
const menu_nav_redes= document.getElementById('menu-nav-redes');
const menu_nav_contacto= document.getElementById('menu_nav_contacto');
const formulario = document.getElementById("form_contacto");
const formulariobtmEnviar = document.getElementById("boton_enviar_form");

//Funcion de inicializacion
function incializarJS (){
    //agregamos "listener" a los elementos del formulario de Contacto
    formulario.addEventListener('blur',function() {validarFormulario(event)}, true);
    formulariobtmEnviar.addEventListener('click',function() {validarEnviarFormulario()}, true);
    //agregamos "listener" al checkbox para cambiar tema de fondo
    checkboxTema.addEventListener('click',function() {cambiarTemaFondo()});
    //agregamos los "listener" para redireccionar al lugar dentro de la pagina html
    menu_nav_idiomas.addEventListener('click',function() {resaltar_texto('idiomas')});
    menu_nav_comp.addEventListener('click',function() {resaltar_texto('competencias')});
    menu_nav_est.addEventListener('click',function() {resaltar_texto('estudios')});
    menu_nav_exp.addEventListener('click',function() {resaltar_texto('experiencias')});
    menu_nav_redes.addEventListener('click',function() {resaltar_texto('redessociales')});
    menu_nav_contacto.addEventListener('click',function() {resaltar_texto('contacto')});
}