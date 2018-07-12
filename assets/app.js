//Recuperar datos
//guardar datos
//imprimir datos

window.onload = () => {
    saveData();
    recoverData();
    clearData();
}

function saveData() {
    const btnSave = document.getElementById('save');
    btnSave.addEventListener('click', () => {

        localStorage.nombre = document.getElementById('first_name').value;
        localStorage.password = document.getElementById('password').value;
        console.log(localStorage.nombre);
    });
}

function recoverData() {
    const btnRecover = document.getElementById('recover');
    btnRecover.addEventListener('click', () => { 
        document.getElementById('datos').innerHTML = localStorage.nombre + localStorage.password;
    });
}

function clearData () {
    const btnClear = document.getElementById('clear');
    btnClear.addEventListener('click', () => { 
        document.getElementById('first_name').value='';
        document.getElementById('password').value='';
        document.getElementById('datos').innerHTML='';

    });
}

//function recoverData {}{}
//Cambiar el ad: click a event listener [poner en on click el nombre de la funcion]