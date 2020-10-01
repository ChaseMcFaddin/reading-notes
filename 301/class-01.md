## Class-01


- Responsive web design is the practice of building a website suitable to work on any device or screen.


### Responsive vs Adapative vs Mobile

- Responsive is the measure of how quickly you can react and change to a situation
- Adaptiveness is the ability to mold and modify yourself to a new situation
- Mobile is built simply for mobile devices

### Flexible Layouts, Media Queries, & Flexible Media

- Flexible layouts is the practice of building a dynamic website that can resize height and width.
    - Flex grid allows us to take fixed units and scale them proportionally within a fixed container
- Media queries allows us to alter media types (styles and targets) within different browsers
    - These can use three logical operators (all, only, and not) to allow for multiple conditions to be present
      - Other media features include:
        - Omission
        - Height & Width
        - Min & Max
        - Orientation
        - Aspect Ratio
        - Pixel Ratio
        - Resolution
        - Output Colors
**Mobile First** is a popular technique used in targeting styles a smaller viewpoints and then using media queries to add on as viewpoint increases.
  - Viewpoint can now be used as a meta tag to adjust height and width. Can also use `device-height` and `device-width`.
  - Viewpoint scale propertities include:
    - minimum-scale
    - maximum-scale
    - user-scalable
    - initial scale
  - Viewpoint Resolution properties
    - target-density
    - device-cpi
    - high-dpi
    - miedium-dpi
    - low-dpi
    - target-densitydpi
**Flexible Media** includes images, videos, and other media types as we adjust the scalability and/or adjust sizing of the viewport.

### Floats

Floats are a CSS property used to layer an onject to the left or right of the screen.

Floats sister property is `clear`.

### Grids

The vast majority of sites work on a grid.

You can adjust the following properties of a grid:
  - context
  - columns
  - gutters
  - outside gutters
We can also work with `sass` and `modules` as well. 

### SMACSS

- Scalable & Modular Archieture for CSS

[Back to the main page](../README.md)