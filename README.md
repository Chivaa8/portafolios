# Oriol Chiva

Portfolio personal estático para presentar perfil técnico, experiencia, formación, proyectos destacados, CV, recomendaciones y stack.

## Demo local

Puedes abrir `index.html` directamente o servir la carpeta:

```bash
python -m http.server 4173
```

Después abre:

```text
http://127.0.0.1:4173/index.html
```

## Estructura

```text
Portafolio/
  index.html
  README.md
  .gitignore
  assets/
    css/
      styles.css
    js/
      data.js      # textos, traducciones, formación y skills
      main.js      # eventos, tema, idioma, búsqueda, modales y animaciones
    img/
      hero.jpg
      profile.jpg
      can-ruti.jpg
      kymos.jpg
      project-*.jpg
    docs/
      CV-Oriol-Chiva.pdf
      carta-recomendacion-oriol.pdf
      carta-recomendacion.pdf
      certificado-lsumoy.pdf
```

## Funciones

- Tema claro/oscuro.
- Idiomas: ES, EN y CA.
- Buscador de proyectos.
- Vista móvil/escritorio.
- Contadores animados.
- Modales de educación con detalles de DAW, SMR y cursos SEAS.
- Copia de email sin mostrarlo escrito en pantalla.
- CV visible y descargable.
- Cartas de recomendación y certificado enlazados.
- Proyectos con miniaturas, enlaces a código y hover animado.
- Skills renderizadas desde `assets/js/data.js`.

## Stack

HTML, CSS y JavaScript vanilla. Sin framework, sin build step y listo para publicar en hosting estático.

## Despliegue

Funciona directamente en GitHub Pages, Netlify, Vercel o cualquier servidor estático.

## Enlace

https://chivaa8.github.io/portafolios/#inicio
