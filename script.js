var usuariosRegistrados = [];
var viajesDisponibles = [
    { origen: "Tandil, Buenos Aires", destino: "Cordoba Capital, Cordoba", horario: "12hs-17hs", costo: 50 },
    // Agrega más viajes simulados según sea necesario
];

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

function buscarViaje(event) {
    event.preventDefault();

    var usuarioEmail = document.getElementById("inputEmail4").value;

    // Verifica si el usuario está registrado
    console.log("Usuario registrado:", usuarioRegistrado(usuarioEmail));

    if (!usuarioRegistrado(usuarioEmail)) {
        alert("Usuario no registrado. Por favor, regístrate para buscar viajes.");
        return;
    }

    // Obtén detalles del viaje simulado (puedes ajustar la lógica según tus necesidades)
    var viaje = obtenerViajeDisponible();

    // Muestra la información del viaje si está disponible
    console.log("Viaje disponible:", viaje);

    if (viaje) {
        alert(`Viaje disponible:\nOrigen: ${viaje.origen}\nDestino: ${viaje.destino}\nHorario: ${viaje.horario}\nCosto: $${viaje.costo}`);
    } else {
        alert("Lo sentimos, no hay viajes disponibles en este momento.");
    }
}


function obtenerViajeDisponible() {
    // Simulación simple: Devuelve el primer viaje disponible
    return viajesDisponibles.length > 0 ? viajesDisponibles[0] : null;
}

function irASeccion(idSeccion) {
    // Utiliza smooth scroll para un desplazamiento suave
    document.getElementById(idSeccion).scrollIntoView({ behavior: "smooth" });
}

