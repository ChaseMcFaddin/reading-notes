## Read 12: Chart JS & Canvas

- Charts help us effectively display data and information to the user 

First thing we need to do is download Chart.js

```
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Chart.js demo</title>
        <script src='Chart.min.js'></script>
    </head>
    <body>
    </body>
</html>
```

To use a line graph, we will need a canvas element 

```
<canvas id="buyers" width="600" height="400"></canvas>
```

Then we will need a script

```
<script>
    var buyers = document.getElementById('buyers').getContext('2d');
    new Chart(buyers).Line(buyerData);
</script>
```

- We can create many different types of graphs, such as pie, bar, donut, etc.

To get to chartjs use this link:
https://www.chartjs.org/docs/latest/

**Canvas**

At first sight a `<canvas>` element looks like an `<img>` element but the difference being that there isn't a `src` or `alt` attribute. 

Canvas elements can be styled like any other image in CSS

We can use the canvas element to apply fallback content for older browsers.

Unlike an img element, the canvas element needs a closing element.

The canvas element creates a fixed-sized drawing surface that exposes one or more **rendering contexts**.

```
var canvas = document.getElementById('tutorial');
var ctx = canvas.getContext('2d');
``` 

This is used to display and render the type on context using `getContext`.

**Drawing Shapes**











