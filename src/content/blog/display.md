---
title: "Display css"
description: "Crean una nueva linea para cada elemento"
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJk_Vvldw3r1vAKBwOPUM5VbmWPNwHB7NBDg&s"
tags: ['css', 'html']
date: 2024-08-17
author: "Enrique calero"
---

# Elementos de Bloque, Linea y Hibrido

## Elementos de Bloque

Display: block

- Crean una nueva linea para cada elemento
- Ocupan todo el espacio horizontal disponible
- Tienen ancho y alto.

```css
    h1{
    background-color: rgb(252, 27, 72);
    /* display: block;  por defecto*/
}

p{
    background-color: yellow;
    /* display: block;  por defecto*/
}

```

<PictureImg {...Block} aspectRatio="Auto"/>

## Elementos de Linea

Display: Inline

- No crean nuevas líneas para cada elemento
- No tienen ancho ni alto
- Se ajustan al contenido

```css
    span{
    background-color: rgb(27, 197, 27);
    /* display: inline; por defecto*/
}
```
<PictureImg {...Inline} aspectRatio="Auto"/>

## Propiedad Display

Esta propiedad puede ser : inline | block | inline-block | none | flex | grid

### Display Inline y block 

#### Ejemplo

```css
    h1{
    background-color: rgb(252, 27, 72);
    display: inline;
}

p{
    background-color: yellow;
    display: inline;
}

span{
    background-color: rgb(27, 197, 27);
    display: block;
}
```

<PictureImg {...DisplayConfig} aspectRatio="Auto"/>

### Display None 

#### Ejemplo

```css
    h1{
    background-color: rgb(252, 27, 72);
    display: none;
}
```

### Display Inline block 

##### Ejemplo

```css
   img{
    display: inline-block;
    width: 150px;
}
```

<PictureImg {...InlineBlock} aspectRatio="Auto"/>


