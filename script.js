var usuariosRegistrados = [];
var viajesDisponibles = [
    { origen: "Tandil, Buenos Aires", destino: "Cordoba Capital, Cordoba", horario: "12hs-17hs", costo: 50 },

];

function registrarUsuario(event) {
    event.preventDefault();

    var email = document.getElementById("inputEmail").value;
    var password = document.getElementById("inputPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var perfil = document.querySelector('input[name="perfil"]:checked').value;

    
    if (usuarioRegistrado(email)) {
        alert("El usuario ya está registrado");
    } else {
    
        if (password === confirmPassword) {
            
            usuariosRegistrados.push({ email: email, password: password, perfil: perfil });
            alert("Usuario registrado correctamente");
        } else {
            alert("Las contraseñas no coinciden");
        }
    }
}

function usuarioRegistrado(email) {
    
    return usuariosRegistrados.some(function (usuario) {
        return usuario.email === email;
    });
}

function buscarViaje(event) {
    event.preventDefault();

    console.log("Botón buscarViaje presionado");

    var usuarioEmail = document.getElementById("inputEmail4").value;
    var usuarioPassword = document.getElementById("inputPassword4").value;

    var usuarioRegistradoIndex = usuariosRegistrados.findIndex(function (usuario) {
        return usuario.email === usuarioEmail;
    });

    if (usuarioRegistradoIndex === -1) {
        alert("Usuario no registrado. Por favor, regístrate para buscar viajes.");
        return;
    }

    if (usuariosRegistrados[usuarioRegistradoIndex].password !== usuarioPassword) {
        alert("Contraseña incorrecta. Por favor, verifica tu contraseña.");
        return;
    }

    var viaje = obtenerViajeDisponible();

    var horarioElement = document.getElementById("horario");
    var horarioSeleccionado = horarioElement.options[horarioElement.selectedIndex].value;

    console.log("Usuario: ", usuarioEmail);
    console.log("Contraseña: ", usuarioPassword);
    console.log("Horario: ", horarioSeleccionado);

    var viajeEnLista = viajesDisponibles.some(function (v) {
        return (
            v.origen.toLowerCase() === document.getElementById("inputAddress").value.toLowerCase() &&
            v.destino.toLowerCase() === document.getElementById("inputAddress2").value.toLowerCase() &&
            v.horario === horarioSeleccionado
        );
    });

    if (viajeEnLista) {
        alert(`El viaje solicitado existe y es el siguiente:\nOrigen: ${viaje.origen}\nDestino: ${viaje.destino}\nHorario: ${viaje.horario}\nCosto: $${viaje.costo}`);
    } else {
        
        var listaViajes = document.getElementById("listaViajesDisponibles");
        listaViajes.innerHTML = "<strong>El viaje que busca no se encuentra disponible pero a continuación le dejamos otros que le podrían interesar:</strong><br>";

        viajesDisponibles.forEach(function (v) {
            listaViajes.innerHTML += `Origen: ${v.origen}, Destino: ${v.destino}, Horario: ${v.horario}, Costo: $${v.costo}<br>`;
        });

        listaViajes.style.display = "block";
    }
}


function obtenerViajeDisponible() {
    
    return viajesDisponibles.length > 0 ? viajesDisponibles[0] : null;
}

function irASeccion(idSeccion) {
    // Utiliza smooth scroll para un desplazamiento suave
    document.getElementById(idSeccion).scrollIntoView({ behavior: "smooth" });
}

