let personas = [];
let proyectos = [];
let asociaciones = [];

function guardarPersona(event) {
    event.preventDefault();
    const id = document.getElementById('idPersona').value;
    const nombre = document.getElementById('nombrePersona').value;
    const apellido = document.getElementById('apellidoPersona').value;
    const edad = document.getElementById('edadPersona').value;

    personas.push({ id, nombre, apellido, edad });
    limpiarFormularioPersona();
    mostrarPersonas();
    alert('Persona Guardada Exitosamente!');
}

function mostrarPersonas() {
    const lista = document.getElementById('listaPersonas');
    lista.innerHTML = '';

    personas.forEach((persona, index) => {
        lista.innerHTML += `
                    <tr>
                        <td>${persona.id}</td>
                        <td>${persona.nombre}</td>
                        <td>${persona.apellido}</td>
                        <td>${persona.edad}</td>
                        <td>
                            <button class="btn-update" onclick="editarPersona(${index})">Actualizar</button>
                            <button class="btn-delete" onclick="eliminarPersona(${index})">Eliminar</button>
                        </td>
                    </tr>
                `;
    });
}

function editarPersona(index) {
    const persona = personas[index];
    document.getElementById('idPersona').value = persona.id;
    document.getElementById('nombrePersona').value = persona.nombre;
    document.getElementById('apellidoPersona').value = persona.apellido;
    document.getElementById('edadPersona').value = persona.edad;
    document.getElementById('personaIndex').value = index;
}

function actualizarPersona() {
    const index = document.getElementById('personaIndex').value;
    if (index !== '') {
        const id = document.getElementById('idPersona').value;
        const nombre = document.getElementById('nombrePersona').value;
        const apellido = document.getElementById('apellidoPersona').value;
        const edad = document.getElementById('edadPersona').value;

        personas[index] = { id, nombre, apellido, edad };
        limpiarFormularioPersona();
        mostrarPersonas();
        alert('Persona Actualizada Exitosamente!');
    }
}

function eliminarPersona(index) {
    personas.splice(index, 1);
    mostrarPersonas();
    alert('Persona Eliminada Exitosamente!');
}

function limpiarFormularioPersona() {
    document.getElementById('idPersona').value = '';
    document.getElementById('nombrePersona').value = '';
    document.getElementById('apellidoPersona').value = '';
    document.getElementById('edadPersona').value = '';
    document.getElementById('personaIndex').value = '';
}

function guardarProyecto(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombreProyecto').value;
    const descripcion = document.getElementById('descripcionProyecto').value;
    const fechaInicio = document.getElementById('fechaInicioProyecto').value;

    proyectos.push({ nombre, descripcion, fechaInicio });
    limpiarFormularioProyecto();
    mostrarProyectos();
    alert('Proyecto Guardado Exitosamente!');
}

function mostrarProyectos() {
    const lista = document.getElementById('listaProyectos');
    lista.innerHTML = '';

    proyectos.forEach((proyecto, index) => {
        lista.innerHTML += `
                    <tr>
                        <td>${proyecto.nombre}</td>
                        <td>${proyecto.descripcion}</td>
                        <td>${proyecto.fechaInicio}</td>
                        <td>
                            <button class="btn-update" onclick="editarProyecto(${index})">Actualizar</button>
                            <button class="btn-delete" onclick="eliminarProyecto(${index})">Eliminar</button>
                        </td>
                    </tr>
                `;
    });
}

function editarProyecto(index) {
    const proyecto = proyectos[index];
    document.getElementById('nombreProyecto').value = proyecto.nombre;
    document.getElementById('descripcionProyecto').value = proyecto.descripcion;
    document.getElementById('fechaInicioProyecto').value = proyecto.fechaInicio;
    document.getElementById('proyectoIndex').value = index;
}

function actualizarProyecto() {
    const index = document.getElementById('proyectoIndex').value;
    if (index !== '') {
        const nombre = document.getElementById('nombreProyecto').value;
        const descripcion = document.getElementById('descripcionProyecto').value;
        const fechaInicio = document.getElementById('fechaInicioProyecto').value;

        proyectos[index] = { nombre, descripcion, fechaInicio };
        limpiarFormularioProyecto();
        mostrarProyectos();
        alert('Proyecto Actualizado Exitosamente!');
    }
}

function eliminarProyecto(index) {
    proyectos.splice(index, 1);
    mostrarProyectos();
    alert('Proyecto Eliminado Exitosamente!');
}

function limpiarFormularioProyecto() {
    document.getElementById('nombreProyecto').value = '';
    document.getElementById('descripcionProyecto').value = '';
    document.getElementById('fechaInicioProyecto').value = '';
    document.getElementById('proyectoIndex').value = '';
}

function guardarAsociacion(event) {
    event.preventDefault();
    const personaIndex = document.getElementById('personaSelect').value;
    const proyectoIndex = document.getElementById('proyectoSelect').value;

    if (personaIndex !== '' && proyectoIndex !== '') {
        asociaciones.push({
            persona: personas[personaIndex].nombre,
            proyecto: proyectos[proyectoIndex].nombre
        });
        mostrarAsociaciones();
        alert('Asociación Guardada Exitosamente!');
    }
}

function mostrarAsociaciones() {
    const lista = document.getElementById('listaAsociaciones');
    lista.innerHTML = '';

    asociaciones.forEach((asociacion, index) => {
        lista.innerHTML += `
                    <tr>
                        <td>${asociacion.persona}</td>
                        <td>${asociacion.proyecto}</td>
                        <td>
                            <button class="btn-delete" onclick="eliminarAsociacion(${index})">Eliminar</button>
                        </td>
                    </tr>
                `;
    });
}

function eliminarAsociacion(index) {
    asociaciones.splice(index, 1);
    mostrarAsociaciones();
    alert('Asociación Eliminada Exitosamente!');
}

function showSection(section) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(s => s.classList.remove('active'));
    document.getElementById(section).classList.add('active');

    if (section === 'asociaciones') {
        cargarSelects();
    }
}

function cargarSelects() {
    const personaSelect = document.getElementById('personaSelect');
    const proyectoSelect = document.getElementById('proyectoSelect');

    personaSelect.innerHTML = '';
    proyectoSelect.innerHTML = '';

    personas.forEach((persona, index) => {
        personaSelect.innerHTML += `<option value="${index}">${persona.nombre} ${persona.apellido}</option>`;
    });

    proyectos.forEach((proyecto, index) => {
        proyectoSelect.innerHTML += `<option value="${index}">${proyecto.nombre}</option>`;
    });
}