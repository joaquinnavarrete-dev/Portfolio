/* --- data.js o al principio de tu script --- */
const proyectosData = {
  "filmfinder": {
    titulo: "FilmFinder",
    // Descripción redactada basada en tus capturas:
    descripcion: "Plataforma web Full Stack diseñada para la exploración de catálogos cinematográficos. El sistema permite a los usuarios buscar películas en tiempo real, aplicar filtros por categoría o calificación, y acceder a fichas técnicas detalladas (sinopsis, trailers, reparto). Incluye un módulo social para dejar comentarios en las películas y un formulario de contacto funcional. El diseño de interfaz (UI) fue prototipado en Figma priorizando la experiencia de usuario en modo oscuro.",
    
    // La imagen del Home
    imgPrincipal: "../img/inicio-film-finderpng.jpg", 
    
    galeria: [
      "../img/film-finder-catalogo.jpg",      // Captura del catálogo con filtros
      "../img/filmfinder_pagina_pelicula.jpg", // Detalle de Avengers con comentarios
      "../img/FilmFinder.png"                 // El logo para branding
    ],
    
    tecnologias: [
      { nombre: "Python", icono: "../icons/python.png" },
      { nombre: "Flask", icono: "../icons/python.png" }, // Si conseguís el icono de Flask, cambiá la ruta acá
      { nombre: "JavaScript", icono: "../icons/js.png" },
      { nombre: "HTML5", icono: "../icons/html5.png" },
      { nombre: "CSS3", icono: "../icons/css3.png" },
      { nombre: "Figma", icono: "../icons/figma.png" }
    ],
    
    // Poné acá tus links reales
    repoLink: "https://github.com/tuusuario/filmfinder", 
    demoLink: "https://filmfinder-demo.com" 
  },
  "2": {
    titulo: "App de Gestión de Tareas",
    descripcion: "Aplicación para organizar el día a día, permitiendo crear, editar y eliminar tareas con recordatorios.",
    imgPrincipal: "../img/proy2_main.jpg",
    galeria: [
      "../img/proy2_cap1.jpg",
      "../img/proy2_cap2.jpg"
    ],
    tecnologias: [
      { nombre: "Python", icono: "../icons/python.png" },
      { nombre: "Django", icono: "../icons/django.png" } // Asumiendo que tenés este icono
    ],
    repoLink: "https://github.com/tuusuario/repo2",
    demoLink: null // Si no tiene deploy, ponemos null
  },
   "3": {
    titulo: "App de Gestión de Tareas",
    descripcion: "Aplicación para organizar el día a día, permitiendo crear, editar y eliminar tareas con recordatorios.",
    imgPrincipal: "../img/proy2_main.jpg",
    galeria: [
      "../img/proy2_cap1.jpg",
      "../img/proy2_cap2.jpg"
    ],
    tecnologias: [
      { nombre: "Python", icono: "../icons/python.png" },
      { nombre: "Django", icono: "../icons/django.png" } // Asumiendo que tenés este icono
    ],
    repoLink: "https://github.com/tuusuario/repo2",
    demoLink: null // Si no tiene deploy, ponemos null
  }

 
};