import { useState, useEffect } from 'react';
import Encabezado from './components/Encabezado.jsx';
import InfoUsuario from './components/InfoUsuario.jsx';
import ContadorAcciones from './components/ContadorAcciones.jsx';

const ARREGLO = 'ejercicio17_tareas';

function App() {
  // Cargar tareas guardadas al iniciar
  const [tareas, setTareas] = useState(() => {
    const tareasGuardadas = localStorage.getItem(ARREGLO);
    if (!tareasGuardadas) return [];
    try {
      return JSON.parse(tareasGuardadas);
    } catch {
      return [];
    }
  });

  const [textoTarea, setTextoTarea] = useState('');

  // Guardar en localStorage cuando cambien las tareas
  useEffect(() => {
    localStorage.setItem(ARREGLO, JSON.stringify(tareas));
  }, [tareas]);

  // Agregar nueva tarea (Validación con alert nativo)
  const manejarEnvio = (e) => {
    e.preventDefault();
    const textoLimpio = textoTarea.trim();

    if (!textoLimpio) {
      alert('Escribe una tarea antes de agregarla.');
      return;
    }

    const nuevaTareaObj = {
      id: crypto.randomUUID(),
      texto: textoLimpio,
    };

    setTareas([...tareas, nuevaTareaObj]);
    setTextoTarea('');
  };

  // Eliminar tarea (Confirmación con confirm nativo)
  const eliminarTarea = (id) => {
    const confirmado = window.confirm('¿Eliminar tarea? Esta acción no se puede deshacer.');
    if (confirmado) {
      setTareas(tareas.filter((tarea) => tarea.id !== id));
    }
  };

  return (
    <div className="contenedor">
      <Encabezado />

      <InfoUsuario usuario="Juan Carlos" totalTareas={tareas.length} />

      <ContadorAcciones />

      {/* Formulario */}
      <form onSubmit={manejarEnvio} id="formulario-tarea">
        <h2>Nueva tarea:</h2>
        <div className="lectura">
          <input
            type="text"
            id="tarea"
            name="tarea"
            autoComplete="off"
            maxLength={120}
            value={textoTarea}
            onChange={(e) => setTextoTarea(e.target.value)}
            placeholder="Escribe tu tarea aquí..."
          />
          <button type="submit" className="btn">
            Agregar tarea
          </button>
        </div>
      </form>
      
      <section aria-labelledby="titulo-lista">
        <h1>Tareas pendientes</h1>

        {tareas.length === 0 ? (
          <p id="lista-vacia" className="lista-vacia">
            No hay tareas pendientes.
          </p>
        ) : (
          <ul className="lista-tareas">
            {tareas.map((tarea) => (
              <li key={tarea.id} className="tarea">
                <span>{tarea.texto}</span>
                <button
                  type="button"
                  className="btneliminar"
                  onClick={() => eliminarTarea(tarea.id)}
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export default App;