# Todo App - Actividad 10

## Descripción

Aplicación desarrollada en **React con Vite** como parte de la Actividad 10.  
Permite gestionar tareas (todos), consumir una API externa y registrar usuarios mediante formularios controlados con validación.

## Funcionalidades principales

- Página de inicio (`Home.jsx`)\*\*

  - Navegación hacia `/todos` y `/registro`.

- Página de tareas (`Todos.jsx`)\*\*

  - Consumo de API REST (`jsonplaceholder.typicode.com/todos`).
  - Listado modular con componentes `TodoList` y `TodoItem`.
  - Formulario (`TodoForm`) para agregar nuevas tareas con validación.
  - Botones para **completar/desmarcar** y **eliminar** tareas.

- Página de registro (`Registro.jsx`)\*\*
  - Formulario controlado con `useState`.
  - Validación de campos obligatorios y contraseña mínima de 6 caracteres.
  - Muestra los datos en consola al registrarse.

---

## Tecnologías utilizadas

- React + Vite
- Hooks: `useState`, `useEffect`
- Componentes modulares
- API REST (JSONPlaceholder)

---

## Estructura del proyecto

src/ ├── components/ │ ├── TodoForm.jsx │ ├── TodoItem.jsx │ └── TodoList.jsx ├── pages/ │ ├── Home.jsx │ ├── Todos.jsx │ └── Registro.jsx └── App.jsx

---

## Cómo ejecutar el proyecto

1. Clonar el repositorio:
   ```bash
   git clone <url-del-repo>
   ```

## Instalar dependencia

npm install

## Ejecutar

npm run dev
