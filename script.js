var usuariosRegistrados = [];

function registrarUsuario(event) {
    event.preventDefault();

    var email = document.getElementById("inputEmail").value;
    var password = document.getElementById("inputPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var perfil = document.querySelector('input[name="perfil"]:checked').value;

    // Verifica si el usuario ya está registrado
    if (usuarioRegistrado(email)) {
        alert("El usuario ya está registrado");
    } else {
        // Verifica si las contraseñas coinciden
        if (password === confirmPassword) {
            // Agrega el usuario al array (simulando el registro en una base de datos)
            usuariosRegistrados.push({ email: email, password: password, perfil: perfil });
            alert("Usuario registrado correctamente");
        } else {
            alert("Las contraseñas no coinciden");
        }
    }
}

function usuarioRegistrado(email) {
    // Verifica si el email ya está registrado en el array
    return usuariosRegistrados.some(function (usuario) {
        return usuario.email === email;
    });
}

function irASeccion(idSeccion) {
    // Utiliza smooth scroll para un desplazamiento suave
    document.getElementById(idSeccion).scrollIntoView({ behavior: "smooth" });
}

