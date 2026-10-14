# Actividad 4 | Introduccion a React

## Acerca del Proyecto

**Gestión de Tareas Pendientes con React + Vite**
Proyecto web individual correspondiente a la Actividad 4.

**Datos del estudiante:**
- **Nombre:** Canseco Reyes Juan Carlos


**Descripción breve:**
Aplicación interactiva desarrollada en React que permite administrar una lista de tareas pendientes con guardado automático en `localStorage`. La interfaz implementa los conceptos fundamentales del framework: componentes funcionales, paso de propiedades (`props`), gestión de estado local (`useState`), Hooks de efectos (`useEffect`) y renderizado dinámico de listas con `.map()`.



## Estructura del Proyecto

```text
t3_act4_react/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   ├── Encabezado.jsx       # Componente A: Funcional simple
│   │   ├── InfoUsuario.jsx      # Componente B: Recibe y muestra props
│   │   └── ContadorAcciones.jsx # Componente C: Manejo de estado useState
│   ├── App.jsx                  # Componente D: Integradora con lista (.map())
│   ├── index.css                # Estilos globales y variables CSS
│   └── main.jsx                 # Punto de entrada de la aplicación React
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## Componentes de la Aplicación

| Componente | Requisito cumplido | Descripción |
| --- | --- | --- |
| `Encabezado.jsx` | Componente funcional simple | Muestra el título principal y el subtítulo estático del proyecto. |
| `InfoUsuario.jsx` | Componente con `props` | Recibe `usuario` y `totalTareas` para mostrar información dinámica proveniente del componente padre. |
| `ContadorAcciones.jsx` | Componente con `useState` | Muestra un botón que incrementa un contador interactivo de clics cada vez que se presiona. |
| `App.jsx` | Lista dinámica con `.map()` | Gestiona el estado global de las tareas, la validación del formulario y la iteración del arreglo de tareas. |

---

## Preguntas Teóricas sobre React

### a) ¿Qué diferencia hay entre `props` y `state` en React?

* **`props` (Propiedades):** Son parámetros o datos de entrada que un componente padre transmite a un componente hijo. Son **inmutables** (de solo lectura) dentro del componente que las recibe. Se utilizan para configurar un componente o compartir datos hacia abajo en el árbol de componentes.
* **`state` (Estado):** Es una estructura de datos interna y privada gestionada directamente dentro del propio componente. Es **mutable** únicamente mediante su función actualizadora (por ejemplo, `setEstado`). Cada vez que el estado cambia, React vuelve a renderizar el componente para reflejar las modificaciones en pantalla.

---

### b) ¿Por qué es importante usar una `key` al renderizar una lista de elementos?

La propiedad `key` asigna un identificador único e inconfundible a cada elemento generado dinámicamente al iterar con `.map()`. 

Su importancia radica en el algoritmo de reconciliación de React (*Virtual DOM*):
1. **Optimización y Rendimiento:** Permite a React saber exactamente qué elemento individual cambió, se agregó o se eliminó de la lista, evitando re-renderizar todo el árbol DOM innecesariamente.
2. **Consistencia Visual:** Previene fallos en el estado de los componentes hijos y asegura que los elementos mantengan su identidad e información al reordenarse.

---

### c) Explica con tus propias palabras qué hace la función `useState` y da un ejemplo de dónde la usaste en tu mini aplicación.

`useState` es un Hook que le otorga una "memoria interna" a los componentes funcionales de React. Nos permite declarar variables de estado que persisten entre re-renderizados y nos brinda una función asociada para actualizar dicho valor de forma reactiva.
