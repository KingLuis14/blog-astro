---
title: "El Box Model"
description: "El modelo de caja de CSS es un concepto fundamental que describe cómo se estructuran y se renderizan los elementos en una página web. Cada elemento se representa como una caja rectangular, y el modelo de caja proporciona un marco para entender y manipular estas cajas."
image: "https://blog.stackfindover.com/wp-content/uploads/2021/11/responsive-HTML-Footer.jpg"
tags: ['css']
date: 2024-05-19
author: "Enrique calero"
---



# El Modelo de Caja de CSS

![Texto alternativo](/img/box-model.webp)

El modelo de caja de CSS es un concepto fundamental que describe cómo se estructuran y se renderizan los elementos en una página web. Cada elemento se representa como una caja rectangular, y el modelo de caja proporciona un marco para entender y manipular estas cajas.

## Componentes del Modelo de Caja

El modelo de caja está compuesto por cuatro áreas principales:

### 1. Contenido (Content)

El contenido es el área donde se muestra el texto, la imagen u otros elementos anidados. El tamaño del contenido puede ser controlado utilizando las propiedades `width` y `height`.

```css
element {
    width: 100px;
    height: 50px;
}
```


### 2. Relleno (Padding)

El relleno es el espacio entre el contenido y el borde (border) del elemento. Se puede utilizar para crear espacio interno alrededor del contenido. El relleno se puede definir individualmente para cada lado (superior, derecho, inferior, izquierdo) o de manera uniforme.

```css
	element {
    padding: 10px; /* Padding uniforme */
    padding-top: 5px; /* Padding superior */
    padding-right: 15px; /* Padding derecho */
    padding-bottom: 20px; /* Padding inferior */
    padding-left: 25px; /* Padding izquierdo */
}
```

### 3. Borde (Border)

El borde es la línea que rodea el contenido y el relleno del elemento. El borde se puede estilizar con propiedades como width (ancho), style (estilo) y color (color).

```css

element {
    border-width: 2px;
    border-style: solid;
    border-color: #000; /* Negro */
}
```
### 4. Margen (Margin)

El margen es el espacio exterior que rodea el borde del elemento. Se utiliza para crear espacio entre el elemento y otros elementos circundantes. Al igual que el relleno, los márenes se pueden definir individualmente para cada lado o de manera uniforme.

```css
element {
    margin: 10px; /* Margen uniforme */
    margin-top: 5px; /* Margen superior */
    margin-right: 15px; /* Margen derecho */
    margin-bottom: 20px; /* Margen inferior */
    margin-left: 25px; /* Margen izquierdo */
}
```

## Modelo de Caja Estándar vs. Modelo de Caja de Bordes

### Modelo de Caja Estándar

Por defecto, el tamaño de la caja se calcula sumando el ancho del contenido, el relleno, el borde y los márgenes. Esto puede complicar el control del tamaño total del elemento.

```css
div{
    background-color: rgb(252, 216, 11);
    width: 100px;
    height: 100px;
    padding: 10px;
    box-sizing: content-box; /* por defecto*/
}
```

export const contentBox = {
    imgName: "content-box",
    alt: "content box",
    type: ["avif", "webp"],
    get imagen() {
        return this.type.map((ty) => {
            return { url: `${this.imgName}.${ty}`, type: ty };
        });
    }
};


<PictureImg {...contentBox} aspectRatio="Auto"/>

### Modelo de Caja de Bordes

El modelo de caja de bordes (border-box) incluye el contenido, el relleno y el borde en el ancho y alto especificados. Esto facilita el control del tamaño total del elemento.

```css
div{
    background-color: rgb(252, 216, 11);
    width: 100px;
    height: 100px;
    padding: 10px;
    box-sizing: border-box;
}
```




El `box-sizing: border-box;` se recomienda usarlo en en siguiente selector, para un reset basico para diseñar sitios webs, asi nos aseguramos que todos los elementos tengan el tamaño que le indicamos.

```css
*{
    box-sizing: border-box;
}
```



### Recursos

- We also support syntax highlighting in MDX out-of-the-box! This example uses the default [Shiki](https://shiki.style) theme. See the [MDX integration docs](https://docs.astro.build/en/guides/integrations-guide/mdx/#syntax-highlighting) for configuration options.


- [CSS Box Model - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/box_model)  
  Documentación detallada sobre el modelo de caja en CSS, proporcionada por MDN Web Docs.

- [Understanding the CSS Box Model - W3Schools](https://www.w3schools.com/css/css_boxmodel.asp)  
  Explicación clara y ejemplos prácticos del modelo de caja en CSS en W3Schools.

- [The CSS Box Model: A Comprehensive Guide - CSS-Tricks](https://css-tricks.com/the-css-box-model/)  
  Guía completa sobre el modelo de caja en CSS, incluyendo aspectos avanzados y ejemplos prácticos en CSS-Tricks.

- [CSS Box Sizing - CSS Tricks](https://css-tricks.com/almanac/properties/b/box-sizing/)  
  Información específica sobre la propiedad `box-sizing` y cómo afecta al modelo de caja en CSS-Tricks.





