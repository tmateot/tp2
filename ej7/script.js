document.addEventListener('DOMContentLoaded', () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(usuarios => mostrarUsuarios(usuarios));

    function mostrarUsuarios(usuarios) {
        const usuariosDiv = document.getElementById('usuarios');
        usuarios.forEach(usuario => {
            const cartaUsuario = document.createElement('div');
            cartaUsuario.className = 'carta-usuario';
            cartaUsuario.innerHTML = `
                <p>ID: ${usuario.id}</p>
                <p>Nombre: ${usuario.name}</p>
                <p>Nombre de usuario: ${usuario.username}</p>
                <p>Email: ${usuario.email}</p>
                <p>Sitio web: ${usuario.website}</p>
                <button onclick="verTarea(${usuario.id}, this)">Ver Tarea</button>
                <div class="tarea" id="tarea-${usuario.id}"></div>
            `;
            usuariosDiv.appendChild(cartaUsuario);
        });
    }
});

function verTarea(usuarioId, boton) {
    const tareaDiv = document.getElementById(`tarea-${usuarioId}`);
    if (tareaDiv.innerHTML === '') {
        fetch(`https://jsonplaceholder.typicode.com/todos/${usuarioId}`)
            .then(response => response.json())
            .then(tarea => mostrarTarea(tarea, tareaDiv, boton));
    } else {
        tareaDiv.innerHTML = '';
        boton.innerText = 'Ver Tarea';
    }
}

function mostrarTarea(tarea, tareaDiv, boton) {
    const cartaTarea = document.createElement('div');
    cartaTarea.className = `carta-tarea ${tarea.completed ? 'completada' : 'no-completada'}`;
    cartaTarea.innerHTML = `
        <p>ID: ${tarea.id}</p>
        <p>Título: ${tarea.title}</p>
        <p>Completada: ${tarea.completed ? 'Sí' : 'No'}</p>
    `;
    tareaDiv.appendChild(cartaTarea);
    boton.innerText = 'Ocultar Tarea';
}
