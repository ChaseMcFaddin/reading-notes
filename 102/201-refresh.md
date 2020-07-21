## HTML Notes

When building the site ask yourself that 5 W's?
- Who - is your target audience
- What - content are you trying to convey to them
- When - How often are they visiting the site? daily? weekly? etc
- Where - are you going to layout your content?
- Why - are they visiting?

You can expand upon these of course, but your should always be asking questions to determine how to streamline your content to your audience.

Build a site map

> Wireframes are simple sketches much like an architech uses for a building, you'll be making a blueprint of your site layout and content

When deciding on visual desing your job is to commuicate
- Content
- Prioritize
- Organize
- Visual Hierarchy
    - Size
    - Color
    - Style
- Grouping
    - Proximity
    - Closure
    - Continuance
    - White Space
    - Colors
    - Borders
- Similarity

When designing navigation consider
- Concide
- Clear
- Selective
- Context
- Interactive
- Consistent


To make comments in HTML 
`<!-- in a galaxy far far away -->`

Attributes
- ID attritube
- class attribute

Elements
- block
- inline

- `<div>` Groups elements in a box
- `<span>` used when no other alternatives are available. Used to help edit certain text within an element with CSS
- `<iframes>` Little window on page to see another page. Example: location with google maps
- `<meta>` helpful to relay information to server - like time sensitivity for financial transactions or how the site should work

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