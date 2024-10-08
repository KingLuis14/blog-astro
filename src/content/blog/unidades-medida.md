---
title: "Unidades de medida css"
description: "Cuando se trata de diseñar páginas web con CSS, es fundamental comprender las diferentes unidades de medida que se pueden utilizar para definir tamaños y espacios. Hoy exploraremos las unidades más comunes: píxeles (px), porcentajes (%), em y rem. Entender cómo y cuándo usar cada una de estas unidades te permitirá crear diseños más flexibles y adaptativos."
image: "https://media.dev.to/cdn-cgi/image/width=1600,height=900,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F0ehluzw3usr7pwzz9s9z.png"
tags: ['css']
date: 2024-08-12
author: "Enrique calero"
---

# Unidades de CSS: Píxeles, Porcentajes, em y rem

Cuando se trata de diseñar páginas web con CSS, es fundamental comprender las diferentes unidades de medida que se pueden utilizar para definir tamaños y espacios. Hoy exploraremos las unidades más comunes: píxeles (px), porcentajes (%), em y rem. Entender cómo y cuándo usar cada una de estas unidades te permitirá crear diseños más flexibles y adaptativos.

## Píxeles (px)
Los píxeles son una unidad de medida absoluta, lo que significa que no cambian en función de otros elementos en la página. Un píxel representa el punto más pequeño en la pantalla y es ideal para definir tamaños fijos. Por ejemplo, si deseas que un cuadro tenga un ancho exacto de 200 píxeles, puedes especificarlo en CSS como width: 200px;.

Los píxeles son útiles cuando necesitas un control preciso sobre el tamaño de un elemento, pero ten en cuenta que pueden no ser la mejor opción para diseños responsivos, ya que no se ajustan automáticamente a diferentes tamaños de pantalla.

```css

    div {
  width: 200px;
  height: 100px;
  background-color: lightblue;
}
```

## Porcentajes (%)

Las unidades de porcentaje son relativas al tamaño del elemento contenedor. Por ejemplo, si tienes un contenedor con un ancho del 100%, cualquier elemento hijo definido con un ancho del 50% ocupará la mitad del contenedor.

Usar porcentajes es excelente para diseños flexibles y adaptativos, ya que permiten que los elementos se redimensionen en función del tamaño de su contenedor. Esto es particularmente útil en diseños responsivos, donde los elementos necesitan ajustarse a diferentes tamaños de pantalla.

```css
.container {
  width: 100%;
}

.child {
  width: 50%; /* El ancho del hijo será el 50% del ancho del contenedor */
  height: 100px;
  background-color: lightcoral;
}

```

## em

La unidad em es relativa al tamaño de fuente del elemento padre. Por ejemplo, si el tamaño de fuente del elemento padre es de 16 píxeles, entonces 1em será igual a 16 píxeles. Si defines un elemento con 2em, su tamaño será el doble del tamaño de fuente del elemento padre, es decir, 32 píxeles.

Las unidades em son útiles para crear diseños que se adapten al tamaño de texto del usuario, pero pueden ser un poco complicadas debido a su naturaleza acumulativa. Si un elemento tiene un tamaño de fuente de 2em y su hijo tiene un tamaño de 2em, el tamaño del texto del hijo será 4 veces el tamaño del texto del elemento padre original.

```css

    .parent {
  font-size: 20px;
}

.child {
  font-size: 2em; /* El tamaño de fuente será 40px */
}
```

## rem

La unidad rem es similar a em, pero en lugar de ser relativa al tamaño de fuente del elemento padre, es relativa al tamaño de fuente de la raíz (el elemento `<html>`). Esto significa que 1rem siempre será igual al tamaño de fuente definido en el `<html>`.

Usar rem puede hacer que los diseños sean más predecibles y fáciles de manejar, ya que elimina la naturaleza acumulativa de em. Es una excelente opción para mantener la coherencia en el tamaño de los elementos a lo largo de todo el diseño.

```css

html {
  font-size: 16px;
}

.element {
  font-size: 2rem; /* El tamaño de fuente será 32px, independientemente del tamaño de fuente del padre */
}
```

<p class="codepen" data-height="500" data-default-tab="css" data-slug-hash="LYoozge" data-pen-title="Untitled" data-editable="true" data-user="Luis-Enrique-Calero-Anchelia" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/Luis-Enrique-Calero-Anchelia/pen/LYoozge">
  Untitled</a> by Luis Enrique Calero Anchelia (<a href="https://codepen.io/Luis-Enrique-Calero-Anchelia">@Luis-Enrique-Calero-Anchelia</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>