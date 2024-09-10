---
title: "Css grid"
description: "Como su mismo nombre indica, un selector CSS es una referencia a uno o varios elementos HTML, escrito generalmente desde código CSS (también pueden utilizarse desde ciertos lugares en Javascript). Es una forma rápida y cómoda de hacer referencia a elementos individuales o grupos de elementos, para posteriormente darles estilo."
image: "https://blog.desafiolatam.com/wp-content/uploads/2023/09/CSS-GRID-3.png"
tags: ['css']
date: 2020-01-05
author: "Enrique calero"
---

# Contenedor de CSS Grid

Para empezar a usar CSS Grid, necesitas definir un contenedor de grid. Esto se hace aplicando la propiedad `display: grid;` a un elemento contenedor. Los elementos hijos de este contenedor se convertirán automáticamente en elementos de la cuadrícula (grid items).

## Propiedades del Contenedor de Grid

### Definir Filas y Columnas

`grid-template-columns` y `grid-template-rows`: Estas propiedades definen el número de columnas y filas del grid, así como su tamaño. Puedes usar unidades como px, %, fr (fracción), auto, etc.

```css
    .grid-container {
    display: grid;
    grid-template-columns: 200px 1fr 100px;
    grid-template-rows: auto 100px;
}

```

En este ejemplo, la cuadrícula tiene tres columnas: la primera de 200px, la segunda ocupa el espacio restante (1fr), y la tercera de 100px. También tiene dos filas: la primera es automática (ajusta su altura según el contenido) y la segunda tiene una altura fija de 100px.

### Espaciado entre Filas y Columnas

`gap` Esta propiedad establece el espacio entre las filas y columnas de la cuadrícula. Puedes especificar row-gap y column-gap por separado o usar gap para ambas.

```css
   .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px 20px; /* 10px entre filas, 20px entre columnas */
}

```

### Usando Areas 

`grid-template-areas`: Esta propiedad te permite nombrar áreas específicas de la cuadrícula y organizar los elementos en esas áreas.

```css
   .grid-container {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: auto;
    grid-template-areas: 
        "header header"
        "sidebar main"
        "footer footer";
}
```

Luego puedes asignar cada área a un elemento de la cuadrícula usando la propiedad `grid-area`.

```css
   .header {
    grid-area: header;
}
.sidebar {
    grid-area: sidebar;
}
.main {
    grid-area: main;
}
.footer {
    grid-area: footer;
}
```

### Recursos Adicionales

- [Guía de CSS Grid de MDN](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Grid_Layout)
- [CSS Tricks: A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Guía Rápida de CSS Grid de W3Schools](https://www.w3schools.com/css/css_grid.asp)
- [Grid by Example](https://gridbyexample.com/)
- [CSS Grid Layout: una guía visual](https://frontendmasters.com/guides/css/grid/)
