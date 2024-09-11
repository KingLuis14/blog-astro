---
title: "CSS Pseudoclase :has()"
description: "La pseudoclase :has() permite seleccionar elementos en función de si contienen o no ciertos elementos secundarios, ofreciendo más control sobre la apariencia condicional en CSS."
image: "https://i0.wp.com/css-tricks.com/wp-content/uploads/2021/03/has-pseudo-example.png?fit=1200%2C600&ssl=1"
tags: ['css']
date: 2024-09-11
author: "Enrique Calero"
---

# La Pseudoclase `:has()`

La pseudoclase `:has()` es una de las adiciones más interesantes en CSS, ya que permite aplicar estilos a un elemento si este contiene otros elementos específicos dentro de sí. Esta funcionalidad se puede aprovechar para hacer selecciones más complejas y condicionales, algo que antes requería JavaScript.

## Sintaxis básica

La pseudoclase `:has()` se aplica a un elemento padre, y dentro de los paréntesis se especifica un selector que será evaluado dentro de ese contexto.

### Ejemplo de uso:

```css
article:has(img) {
    border: 2px solid green;
}
```
