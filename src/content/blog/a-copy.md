---
title: "selector etiqueta"
description: "Como su mismo nombre indica, un selector CSS es una referencia a uno o varios elementos HTML, escrito generalmente desde código CSS (también pueden utilizarse desde ciertos lugares en Javascript). Es una forma rápida y cómoda de hacer referencia a elementos individuales o grupos de elementos, para posteriormente darles estilo."
image: "https://miro.medium.com/v2/resize:fit:1100/1*f2i47G95nVCx71KzM1iXlg.png"
tags: ['html']
date: 2024-06-12
author: "Enrique calero"
---

# El elemento `<a>`


El elemento `<a>` es uno más importantes de HTML **(si no es la que más)**, ya que nos permite realizar referencias a otras páginas web o recursos como documentos, imágenes, videos, etc. Estas referencias se suelen denominar enlaces, vínculos o hipervínculos. Para ello, tenemos que indicar la URL de la dirección del recurso a enlazar y el texto o contenido que vamos a convertir en enlazable.

<p class="codepen" data-height="500" data-default-tab="html,result" data-slug-hash="xxeoVPN" data-pen-title="Galeria Instagram" data-user="Luis-Enrique-Calero-Anchelia" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/Luis-Enrique-Calero-Anchelia/pen/xxeoVPN">
  Galeria Instagram</a> by Luis Enrique Calero Anchelia (<a href="https://codepen.io/Luis-Enrique-Calero-Anchelia">@Luis-Enrique-Calero-Anchelia</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## El atributo `href`

El elemento `<a>` debe tener, como mínimo, el atributo href, que es el atributo con el que se indica la dirección URL a la página, documento o recursos que se quiere enlazar. Por esta razón, siempre debería estar indicada.


```html

   <a href="https://www.ift.pe/">Ir al sitio web de IFT</a>
    
```

## El atributo `target`

Mediante el atributo target podemos modificar el lugar donde se va a abrir el recurso del enlace. Por defecto, si no incluímos el atributo `target`, los enlaces se abren en la misma ventana/pestaña en la que estamos. Sin embargo, podemos alterar ese comportamiento con los valores del atributo target.

Por ejemplo, el valor _blank nos permite abrir en una nueva pestaña/ventana:


```html

   <a href="https://www.ift.pe/" target="_blank">Ir al sitio web de IFT</a>
    
```

## El atributo `download`

Por defecto, un navegador intentará abrir el recurso enlazado mediante el navegador. Esto es, si enlazamos una página o documento .html, lo intentará renderizar en el navegador visualmente, si enlazamos un archivo .pdf, lo intentará abrir con el propio navegador para mostrarlo sin abandonar el navegador, etc.

Si en un elemento `<a>` incluimos el atributo download, estaremos indicando al navegador que nuestra intención no es renderizarlo en el navegador, sino descargarlo como fichero en el sistema del usuario:

```html

   <a href="https://www.ift.pe/">Ir al sitio web de IFT</a>
    
```

## Recursos

- [Elemento a MDN](https://developer.mozilla.org/es/docs/Web/HTML/Element/a)

