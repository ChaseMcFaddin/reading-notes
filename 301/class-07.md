### API's Continued

REST is a REpresentational State Transfer

The URL allows machines to communicate effeciently regardless of what language the code is written in

The HTTP is all about applying verbs to noun

Think of information flow using nouns and verbs. Wheren nouns are objects or information and the verbs communicate to the machine what to do with that data

### Superagent

Superagent is a lightweight progressive ajax API made for flexibility, readabilty, and a low-learning curve. 

Request Basics
 - .then()
 - .end()
 - await()
 - .del()

Setting Header Fields
  - .set()
  
GET Requests
  - .query()

POST/PUT Requests

Superagent formats are extensible, but by default "json" and "form" are supported


Setting the Content-Type
  - .set()
  - .type()

Superagent will automatically serialize the JSON file and forms

Retrying Requests
  - .retry()
  - callback(err,res)
  
You can also:
 + Set up Accepts
 + Build a Query String
 + Configure HTTP requests (TLS options)
 + Parse response bodies
 
- Many helpful flags and properties aare set on the **Response** object
  + Response text
  + Response body
  + Response header fields
  + Response content-type
  + Response status
  
Abort requests
  - req.abort()
  
- Timeouts are when networks and servers get "stuck" and never respond. Setting timeouts allows us to avoid waiting forever.

Authentication
  - .auth()
  
- By default, up to **5** redirects will be followed unless otherwise specified
  - res.redirects(n)
  
Superagent does not save cookies by default, but you can use the .agent() method to create a copy of Superagent that saves cookies

Piping data
  - .pipe() instead of .end/.then
  
Superagent is great for multipart requests
  - .attach()
  - .field()

- CORS allows corss-origin requests

The callback function will always be passed with two arguments: error & response.

In NodeJs its possible to direct all requests to a specific IP address using **.connect()**.

Superagent has two implementations:
  - Web browsers (using XHR)
  - NodeJs (using core http module)

