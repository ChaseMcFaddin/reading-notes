## Read 04:Regex

#### Regex

Regular expressions or regex are usefule in extracting information fron any text by searching for aprticular pattern. 

anchors: ^ and $

```
^The        matches any string that starts with The -> Try it!
end$        matches a string that ends with end
^The end$   exact string match (starts and ends with The end)
roar        matches any string that has the text roar in it
```

Quantifiers: * and ? and {}

```
abc*        matches a string that has ab followed by zero or more c -> Try it!
abc+        matches a string that has ab followed by one or more c
abc?        matches a string that has ab followed by zero or one c
abc{2}      matches a string that has ab followed by 2 c
abc{2,}     matches a string that has ab followed by 2 or more c
abc{2,5}    matches a string that has ab followed by 2 up to 5 c
a(bc)*      matches a string that has a followed by zero or more copies of the sequence bc
a(bc){2,5}  matches a string that has a followed by 2 up to 5 copies of the sequence bc
```

OR operators: | and []

```
a(b|c)     matches a string that has a followed by b or c (and captures b or c) -> Try it!
a[bc]      same as previous, but without capturing b or c
```

Character classes: \d and \w and \s and .

Intermiediate Topics
- Grouping & capturing
- Bracket expressions
- Greedy & Lazy match

Advanced Topics
- Boundaries
- Back-references
- Look-ahead
- Look-behind

Top ten used regex expressions
1. Trim spaces: ^[\s]*(.*?)[\s]*$
2. HTML Tag: <([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)
3. Hexadecimal value: \B#(?:[a-fA-F0–9]{6}|[a-fA-F0–9]{3})\b
4. Valid email: \b[\w.!#$%&’*+\/=?^`{|}~-]+@[\w-]+(?:\.[\w-]+)*\b
5. Valid username: /^[a-z0-9_-]{3,16}$/
6. Strong password: (?=^.{6,}$)((?=.*\w)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[|!"$%&\/\(\)\?\^\'\\\+\-\*]))^.*
7. 2 of a kind: ^(?=([0-9]*[a-z]){2,})([a-zA-Z0-9]{8,32})$
8. IPv4 address: \b(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\b
9. Defanged URL or IPv4 address: ^(((h..ps?|f.p):\/\/)?(?:([\w\-\.])+(\[?\.\]?)([\w]){2,4}|(?:(?:25[0–5]|2[0–4]\d|[01]?\d\d?)\[?\.\]?){3}(?:25[0–5]|2[0–4]\d|[01]?\d\d?)))*([\w\/+=%&_\.~?\-]*)$
10. SSN: ^((?<area>[\d]{3})[-][\d]{2}[-][\d]{4})$

Bonus: Alpha-numeric, literals, digits, lowercase, uppcase letters only:
```
\w                //alpha-numeric only
[a-zA-Z]          //literals only
\d                //digits only
[a-z]             //lowercase literal only
[A-Z]             //uppercase literal only
```

#### CSS Grid

CSS Grid Layout is a two-dimendional grid-based layout system that aims to completely change the way we design user interfaces. 

Grid Properties of Parent
- Display
- Grid-template-columns
- Grid-template-rows
- Grid-template-areas
- Grid-template
  - column-gap
  - row-gap
  - grid-colun-gap
  - grid-row-gap
- Gap
- Grid-gap
- Justify-items
  - start
  - end
  - center
  - stretch
- Align-items
  - start
  - end
  - center
  - stretch
- Place-items
- Justify-content
  - start
  - end
  - center
  - stretch
  - space-around
  - space-between
  - space-evenly
- Align-content
  - start
  - end
  - center
  - stretch
  - space-around
  - space-between
  - space-evenly
- Place-content
- Grid-auto-columns
- Grid-auto-rows
- Grid-auto-flow
  - Row
  - Column
  - Dense

Properties for Children
- Grid-column-start
- Grid-column-end
- Grid-row-start
- Grid-row-end
- Grid-column
- Grid-row
- Grid area
- Justify-self
  - start
  - end
  - center
  - stretch
- Align-self
  - start
  - end
  - center
  - stretch
- Place-self
  - auto
  - align-self
  - justify-self






















