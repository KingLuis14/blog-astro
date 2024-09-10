---
title: "La etiqueta <nav>"
description: "El elemento `<nav>` nos permite crear una sección que agrupe los enlaces de navegación por la página, es decir, una especie de `<div>` contenedor orientado a desplazarse por los diferentes lugares del sitio web."
image: "https://miro.medium.com/v2/resize:fit:1100/1*f2i47G95nVCx71KzM1iXlg.png"
tags: ['html']
date: 2024-08-10
author: "Enrique calero"
---

# El elemento `<nav>`

El elemento `<nav>` nos permite crear una sección que agrupe los enlaces de navegación por la página, es decir, una especie de `<div>` contenedor orientado a desplazarse por los diferentes lugares del sitio web.

#### Ejemplo

```html

    <nav>
        <ul>
            <li>Nosotros</li>
            <li>Cursos</li>
            <li>Servicios</li>
            <li>Contacto</li>
        </ul>
    </nav>
    
```

## Múltiples elementos `<nav>`

Es posible tener varios elementos `<nav>` en nuestro sitio, ya que por ejemplo, quizás necesitemos una segunda o tercera agrupación de enlaces de navegación porque visualmente están separados de los demás bloques. En ese caso, se pueden utilizar nuevos elementos `<nav>` para agrupar enlaces de navegación.

```html

    <div>
        <nav>
            <ul>
                <li>Ofimatica</li>
                <li>Diseño Web</li>
                <li>Programacion</li>
                <li>Diseño Gráfico</li>
            </ul>
        </nav>
        <nav>
            <ul>
                <li>Lima</li>
                <li>Arequipa</li>
                <li>Puno</li>
                <li>Ica</li>
            </ul>
        </nav>
    </div>
    
```


## Recursos


- [Elemento nav MDN](https://developer.mozilla.org/es/docs/Web/HTML/Element/nav)

