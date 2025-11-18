## Actividad 08 – Hoja de Vida en React

## Descripción

Este proyecto consiste en una hoja de vida interactiva construida con React.
El objetivo fue mostrar mi perfil profesional, experiencia laboral, formación académica y habilidades técnicas de una manera clara, organizada y dinámica.

Lo que hice paso a paso

## Configuración inicial

Abrí el proyecto en mi computador.
Instalé la librería react-icons para usar íconos visuales.
Arranqué el servidor con npm run dev y probé todo en el navegador.
Encabezado y perfil Coloqué mi nombre, título y datos de contacto.
Añadí un párrafo con mi perfil personal.
Usé colores y estilos para que se viera más atractivo.

## Experiencia y formación

Organicé mi experiencia laboral con fechas y funciones.
Agregué mi formación académica con títulos y años.
Todo quedó alineado a la izquierda para que sea fácil de leer.

## Sección de habilidades

Creé un botón para mostrar u ocultar habilidades.
Añadí íconos a cada habilidad (React, Node.js, Express, SQLite).
Implementé una animación suave al aparecer.

## Stack tecnológico

Mostré las tecnologías que manejo en una sección especial.
Cada tecnología aparece con su ícono y estilo moderno.
Formulario para agregar tecnologías
Agregué un campo de texto y un botón “Agregar”.
Validé que no se puedan agregar duplicados ni campos vacíos.
Mostré un mensaje de confirmación con animación.

## Animaciones y detalles visuales

El botón cambia de color y tamaño al pasar el mouse.
Las habilidades aparecen con un efecto de entrada.
Los mensajes de confirmación se muestran y desaparecen automáticamente.

## Resultado final

Hoja de vida clara, organizada y profesional.
Interactividad: mostrar/ocultar secciones y agregar nuevas tecnologías.
Íconos y animaciones que hacen que todo se vea moderno y dinámico.
Cumple con lo pedido en la actividad 08 y además incluye mejoras extra.

## Conclusión

La actividad me permitió aplicar lo aprendido en React:
Manejo de componentes.
Uso de estados (useState).
Validación de datos.
Estilos y animaciones en CSS.
El resultado es una hoja de vida interactiva que refleja tanto mi perfil profesional como mis avances en desarrollo web.

[ App.jsx ]
│
├── [ Header ]
├── [ Perfil ]
├── [ Experiencia ]
├── [ Formacion ]
│
├── [ ToggleHabilidades ]
│ │
│ └── [ Habilidades ]
│
├── [ FormularioTecnologia ]
│
└── [ StackTecnologias ]

App.jsx es el centro del proyecto.
De ahí salen los componentes principales: Header, Perfil, Experiencia, Formacion.
El bloque ToggleHabilidades controla si se muestran las Habilidades.
El FormularioTecnologia permite agregar nuevas tecnologías.
El StackTecnologias muestra todas las tecnologías con sus íconos.
