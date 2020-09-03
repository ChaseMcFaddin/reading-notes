**CSS Transforms, Transitions, & Animations**

**Transforms**

The transform property comes in wo different settings: 
- 2D
  + works on x, y axis
- 3D
  + works on x, y, z axis with radius

**2D Transforms**

2D Transform methods
1. Rotate
  - Positive value rotates clockwise and vice versa
2. Scale
  - Default value is 1
3. Translate (think relative positioning)
  - Works on x, y, axis with translateX, translateY
4. Skew
  - Works on x, y axis with skewX, skewY

**Combining Transforms**

When using multiple transforms, use the comma otherwise it will end the declaration and only run the last stated transform property

**3D Transforms**

In order to understand 3D transforms, you have to understand perspective, how to set it and then adjust accordingly.

Perspective Depth Value starts as none and then can be adjusted to move the image closer or further away.

3D Transform methods
1. Rotate
  - rotateX, rotateY, rotateZ
2. Scale
  - scaleZ
3. Translate
  - translateZ
4. Skew
  - Can't be completed in 3D, only 2D, but can combine 2D transforms with rotate3D, scale3D, transition3D, & matrix3D

+ backface-visibility can be set to hidden

**Animations**

Animations allow the appearance an behavior of an element to be altered by multiple keyframes

- Transitions
  + target using hover, focus, active, and target

*transition-property* allow specific properties to be affected by transitions, instead of an element's entire state

*transition-duration* is set in seconds(s) and milliseconds(ms)

*transition-timing* sets the speed of the transition
  + linear
  + ease-in
  + ease-out
  + ease-in-out

*transition-delay* determines how long a transition will stall before rendering

**Key-Frames**

Key-frames are used to set multiple animation aspects an element should undergo

Key-frames have several factors:
1. Animation name
  - determines which animation is to be applied
2. Duration
3. Timing
4. Function
5. Delay

- By defualt, animations run once, use `animation-iteration` to set it to run multiple times

You can also set the direction of an animation with `animation-direction` and choose between: normal, reverse, alternate, and alternate-reverse

You can stop and pause and animation with `animation-play-state`

`Animation-fill-mode` describes the styling of an animation

**8 Cool Animation Techniques**

1. Fade in

Fade in effects are coded in two steps, first set the initial state, then set your change

```
.fade
{
  opacity:0.5;
}

.fade:hover
{
  opacity:1;
}
```
2. Change color

This is simply done now with a hover 

```
.color:hover{
  background:teal;
}
```
3. Grow & Shrink

4. Rotate Elements

5. Change Shapes

6. 3D Shadow

```
.threed:hover{
  box-shadow:
  1px 1px blue,
  2px 2px blue,
  3px 3px blue;
  -webkit-transform: translateX(5px);
  transform: translateX(5px);
}
```

7. Swing

8. Inset border

```
.border:hover{
  box-shadow: inset 0 0 0 25px lightslategrey;
}
```





[Back to the main page](../README.md)