## Class-02: jQuery

> jQuery serves as a way to approach JS tasks quickly and consistenyl


### What is jQuery?

- It is a JS library full of files.
- Using jQuery, we can find CSS selectors and use methods on them
- We link the jQuery to our html or through DOM
- To access jQuery we start with `$()` This is a shortcut version of using `jQuery()`
- The `$` function allows us to find elements in the page and creates an object called jQuery which holds references to those elements.
- The jQuery object has many methods that we can use with selected elements

### Breaking Down the format:

1. First, find elements using [CSS selectors](https://www.w3schools.com/cssref/css_selectors.asp). It looks like this:

``` 
$('ul.recipe')
// The jQuery function holds one parameter which is a CSS selector
// This selector finds all elements with the class of recipe
```
2. Use methods:
```
$('ul.recipe').addClass('sweet');
// The first set of parenthesis holds the jQuery object
// After the member operator is the method
// Each method will then have parameter(s)
```

### What makes jQuery Faster?

> We can use JS alone to complette our code, but jQuery allows us to write shorter, clearer code.

- jQuery makes it easier to find elements especially across all major browsers.
- jQuery uses CSS selectors which are faster at selecting elements and require less code than DOM elements.
- CSS selectors are already used by front-end developers so there is no need to learn an entirely new language.
- Provides easier ways to run through commonly performed tasks such as loops, handle events, handling Ajax requests, etc.
- jQuery allows us to chain methods together so once we select some elements we can apply multiple methods at once.
- It has cross-browser compatibility 

### Common jQuery Methods:
- [link](https://www.tutorialsteacher.com/jquery/jquery-methods)

### Learning more about selecting elements:

- When we select more than one element, a jQuery object is returned. This is also known as a **matched set** or a **jQuery selection**
- If a selector returns only one element, the jQuery object has a reference to one element node
- If **more** than one element is selected, the jQuery object will have references to each element
- Some jQuery methods **retrieve** information and others **set** information
- jQuery has a method called `.ready()`
  - This method checks that the page is ready for your code to be received
  - Thid method can make the page appear to load faster


### Paired Programming Benefits

1. It allows greater effeciency
2. Gives you to the opportunity to learn new skills
3. Helps develop or refine social skills
4. Allows for more workplace commraderie and collaboration
5. Helps prepare you for potential job interviews
6. Helps prepare you for the workplace

[Back to the main page](../README.md)