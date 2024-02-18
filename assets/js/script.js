document.addEventListener('DOMContentLoaded', function () {
    const formularioElement = document.getElementById('formulario');

    formularioElement.addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar el comportamiento por defecto del formulario

        // obtener valores de los campos
        const nombreInput = document.getElementById('nombre').value.trim();
        const asuntoInput = document.getElementById('asunto').value.trim();
        const mensajeInput = document.getElementById('mensaje').value.trim();

        // expresión regular para caracteres alfabéticos
        const regexAlfabeticos = /^[a-zA-Z]+$/;

        // mensajes de error
        const mostrarError = (campo, mensaje) => {
            const errorElement = document.querySelector(`.error${campo}`);
            errorElement.textContent = mensaje;
        };

        // para validar campos
        const validarCampo = (campo, valor) => {
            if (valor === '') {
                mostrarError(campo, `El ${campo.toLowerCase()} es requerido.`);
                return false;
            } else if (!regexAlfabeticos.test(valor)) {
                mostrarError(campo, `Ingrese solo caracteres alfabéticos.`);
                return false;
            }

            mostrarError(campo, ''); // Limpiar mensajes de error si todo está bien
            return true;
        };

        // validar cada campo
        const nombreValido = validarCampo('Nombre', nombreInput);
        const asuntoValido = validarCampo('Asunto', asuntoInput);
        const mensajeValido = validarCampo('Mensaje', mensajeInput);

        // verificar si el formulario pasa la validación
        if (nombreValido && asuntoValido && mensajeValido) {
            // Mostrar mensaje de éxito
            const resultadoElement = document.querySelector('.resultado');
            resultadoElement.textContent = 'Mensaje enviado con éxito !!!';
        } else {
            // mostrar mensaje de error general
            const resultadoElement = document.querySelector('.resultado');
    

        }
    });
});

//calculadora
    document.addEventListener('DOMContentLoaded', function () {
        const caja = document.getElementById('caja');
        const botones = document.querySelectorAll('button');

        botones.forEach(function (boton) {
            boton.addEventListener('click', function () {
                const color = boton.style.backgroundColor;
                cambiarColorCaja(color);
            });
        });

        function cambiarColorCaja(color) {
            caja.style.backgroundColor = color;
        }
    });

    document.addEventListener('DOMContentLoaded', function () {
        const inputValor1 = document.getElementById('valor1');
        const inputValor2 = document.getElementById('valor2');
        const resultadoElemento = document.querySelector('.resultado');
        const btnSumar = document.getElementById('btn-sumar');
        const btnRestar = document.getElementById('btn-restar');

        btnSumar.addEventListener('click', function () {
            realizarOperacion('sumar');
        });

        btnRestar.addEventListener('click', function () {
            realizarOperacion('restar');
        });

        function realizarOperacion(operacion) {
            const valor1 = parseFloat(inputValor1.value) || 0;
            const valor2 = parseFloat(inputValor2.value) || 0;

            let resultado;

            if (operacion === 'sumar') {
                resultado = valor1 + valor2;
            } else if (operacion === 'restar') {
                resultado = Math.max(valor1 - valor2, 0);
            }

            mostrarResultado(resultado);
        }

        function mostrarResultado(resultado) {
            resultadoElemento.textContent = resultado;
        }
    });