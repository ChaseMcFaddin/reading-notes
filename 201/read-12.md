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

The canvas element we incorporte makes a "grid" or **coordinate space** that we can draw in.

We can use this to draw seemingly endless shapes:

1. Rectangles
  - fillRect(x, y, width, height)
      + draws a filled rectangle
  - strokeRect(x, y, width, height)
      + draws a rectangle outline
  - clearRect(x, y, width, height)
      + Clears the rectangle area making it transparent
2. Paths
  - beginPath()
    + Creates a new path
  - closePath()
    + Methods to set different paths for obects
  - stroke()
    + Draw the shape by stroking its outline
  - fill()
    + Draws a solid shape by filling content area
3. Triangles
  - moveTo(x, y)
    + Moves the pen to the coordinates
4. Lines 
 - lineTo(x, y)
  + Draws a line from the current location to the specified coordinate
5. Arcs
  - arc(x, y, radius, startAngle, endAngle, anticlockwise)
    + Draws an arc which is centered on x,y position with radius and startAngle ending at endAngle going in the direction listed
  - arcTo(x1, x2, y1, y2, radius)
    + Draws an arc with the given control points and radius and connected to the previous point by a line
6. Bezier & Quadratic curves
  - quadracticCurveTo(cplx, cply, x, y)
    + Draws a quadratic Bezier curve from the current position to the end point specified by x, y
  - bezierCurveTo(cplx, cply, cp2x, cp2y, x, y)
    + Draws a cubic bezier curve from the current postion to the end point specified by x,y.

**Drawing Text**

fillText(text, x, y [, maxWidth])
  - fills a given text at the x,y position
strokeText(text, x, y[, maxWidth])
  - Strokes a given text at the x,y position

**Styling Text**

1. font = value
  - The text style when drawing
2. textAlign = value
  - the Text alignment setting
3. textBaseline = value
  - The baseline alignment setting
4. direction = value
  - Directionality

measureText()
  - Returns a **TextMetrics** object containing the width

**Colors**

1. fillStyle = color
  - Fill color
2. strokeStyle = color
  - Border color
3. globalAlpha = transparencyValue
  - Applies transparency to all shapes in canvas

**Line Styles**

1. lineWidth = value
  - Sets the width of lines drawn
2. lineCap = type
  - Sets the appearance of end lines
3. lineJoin = type
  - Sets appearance of "corners"
4. miterLimit = value
  - Establishes a limit on miter when two lines join
5. getLineDash()
  - Returns current line dash pattern array containing an even number of non-negative numbers
6. setLineDash(segments)
  - Sets line dash pattern
7. lineDashoffset = value
  - Sets starting point for line dash

**Gradients**

createsLinearGradient(x1, y1, x2, y2)
  - Creates a linear gradient object with starting point x1, y1, and resulting end point 
createRadialGradient(x1, y1, r1, x2, y2, r2)
  - Creates a radial gradient. Parameters represent two circles.
gradient.addColorStop(position, color)
  - Creates a new color stop on the gradient object

**Patterns**

1. repeat
2. repeat-x
3. repeat-y
4. no-repeat

+ Self explanatory referring to tiles in canvas

**Shadows**

1. shadowOffsetX = float
  - distance horizontally between shadow and object
2. shadowOffsetY = float
  - distance vertically between shadow and object
3. shadowblur = float
  - Size of blurring effect
4. shadowColor = color
  - Color of shadow


[Back to the main page](../README.md)