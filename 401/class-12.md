# Spring RESTful Routing & Static Files

## Overview
Some notes on Spring MVC @RequestMapping

### @RequestMapping by path
Example:<br>
`@RequestMapping(value = "/ex/example", method = RequestMethod.GET)
@ResponseBody
public String getExample{ath(){
 return "Get Example"
 }`<br>
 
 ### @RequestMapping- HTTP Method
 
 The HTTP method parameter has no default, so if we don't specifiy a value, it will map to any HTTP request.<br>
 Example: <br>
 `@RequestMapping(value = "/ex/example", method = POST)
 @ResponseBody
 public String postExample() {
     return "Post Example";
 }`
 
  

  



### Reading Links
[Spring Request Mapping](http://www.baeldung.com/spring-requestmapping) <br>
[Accessing Data with JPA](https://spring.io/guides/gs/accessing-data-jpa/) <br>
[Comparing repositories](https://www.baeldung.com/spring-data-repositories) <br>
