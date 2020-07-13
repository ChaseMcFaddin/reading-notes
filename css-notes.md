## CSS Notes

- CSS
> Cascading Style Sheets
- RGB
> Red Green Blue
    - These are the foundations to make any color combination possible `background-color: rgb(214, 233, 176):`
- HSL
> Hue Saturation Lights
- Hex codes hexidecimal code 
    - #000000 or #000
- Layout
    - Similiar to a wireframe, the general organization of the page
1. Rule
2. Selector
3. Property & Value
    - The three are the anatomy of your styling
- Curly braces `{ }`

CSS allows you to create rules that specify how your page will appear.
One key to understanding CSS is to imagine an invisible box around each html element
Examples of CSS styles
- Boxes
    - width
    - height
    - border
    - background color & images
    - position in the browser window
- Text
    - Typeface
    - Size
    - Color
    - Italics, Bold, Uppercase, Lowercase
- Specfic
    - You can even style specific lists, tables, & forms

A CSS rule contains a selector & a declaration
- Selector is typically the HTML tag & declaration describes the action
Within the declaration is a property & value
- An example of this is Property (color) and Value (yellow)

CSS selectors
- Univeral Selector `* {}`
    - applies to all elements in a document
- Type Selector: `h1, h2, h3 {}`
    - Matches element names
- Class Selector `.note {}`
    - Mathces elements whose class attribute has a value
- ID Selector `#introduction {}`
    - Matches an element whose id attribute is attached to one specified after `#`
- Child Selector
    - 
- Descendent Selector
    - 
- Adjacent Sibling Selector
    - 
- General Sibling Selector
    - 

If there are two rules for the same element the **LAST** one will take precendence. It is **IMPORTANT** to remember, however, that **SPECIFICITY** trumps *LAST RULE*

- **Saturation** - Refers to the amount of gray in a color
- **Brightness** - Refers to the amount of black in a color
- **Lightness** - Refers to the amount of white in a color
- **Contrast** - The decepency between the foreground and background colors 
- **Opacity** - The amount of almost see-through affect in a color

HSL - Hue Saturation Lightness
    - Works like RGB

Example of RGB & HSL on page 260

```

p {
    color: red;
    width: 150px;
}
```

[Back to Main page](README.md)











