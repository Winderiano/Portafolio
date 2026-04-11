document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const enviarBtn = document.getElementById('btn-enviar');

    // Función para validar el formulario y limpiar campos si es válido
    enviarBtn.addEventListener('click', function (event) {
        event.preventDefault(); // Prevenir el envío del formulario

        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const asunto = document.getElementById('asunto').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();

        // Expresiones regulares para validaciones
        const nombreRegex = /^[a-zA-Z\s]+$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Verificar si algún campo está vacío o es inválido
        const campos = [
            { valor: nombre, nombre: 'Nombre', regex: nombreRegex, mensaje: 'Solo se permiten letras y espacios.' },
            { valor: email, nombre: 'Email', regex: emailRegex, mensaje: 'El correo electrónico no es válido.' },
            { valor: asunto, nombre: 'Asunto' },
            { valor: mensaje, nombre: 'Mensaje' }
        ];

        const campoInvalido = campos.find(campo => {
            if (!campo.valor) {
                alert(`El campo "${campo.nombre}" es obligatorio.`);
                return true;
            } else if (campo.regex && !campo.regex.test(campo.valor)) {
                alert(campo.mensaje);
                return true;
            }
        });

        if (campoInvalido) return;

        alert('La solicitud fue enviada correctamente.');

        // Resetear el formulario
        form.reset();
    });
});
