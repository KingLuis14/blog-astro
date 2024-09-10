---
title: "La etiqueta <header>"
description: "El Elemento <header> nos permite identificar la cabecera de una página o documento concreto, igual a como lo haríamos con un <div class=header></div> pero añadiendo esa semántica implícita y eliminando la necesidad de añadirle una clase."
image: "https://oregoom.com/wp-content/uploads/2020/08/etiqueta-header-en-html.webp"
tags: ['html']
date: 2024-08-28
author: "Enrique calero"
---

# El Elemento `<header>`

El Elemento `<header>` nos permite identificar la cabecera de una página o documento concreto, igual a como lo haríamos con un` <div class="header"></div>`, pero añadiendo esa semántica implícita y eliminando la necesidad de añadirle una clase.

Es importante no confundir el elemento `<head>` con el elemento `<header>`, ya que la primera es la elementoseta de cabecera del documento HTML, pero la cabecera que se utiliza para almacenar metadatos y datos adicionales, que no se mostrarán visualmente en el renderizado del navegador. Por otro lado, la cabecera `<header>` es la que visualmente suele incorporar un logo, o detalles que van en la zona superior de la página.

### Ejemplo

```html

    <header>
        <img src="./img/logo.png" alt="Logo IFT">
        <nav>
            <ul>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Cursos</a></li>
                <li><a href="#">Servicios</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </nav>
    </header>
    
```

## `<header>` en elementos especificos

No obstante, aunque en el ejemplo anterior hemos definido una elementoseta `<header>` para la página actual, este elemento `<header>` puede ser definida múltiples veces en la misma página, ya que actuaría como cabecera `<header>` del elemento padre que lo contiene.

```html

    <body>
        <div class="list">
            <article>
                <header>
                    <h1>Título</h1>
                    <p class="subtitle">Subtítulo</p>
                </header>
                <p>...</p>  
            </article>

            <article>
                <header>
                    <h1>Título</h1>
                    <p class="subtitle">Subtítulo</p>
                </header>
                <p>...</p>
            </article>
        </div>
    </body>
    
```


## Recursos


- [elementoseta header MDN](https://developer.mozilla.org/es/docs/Web/HTML/Element/header)