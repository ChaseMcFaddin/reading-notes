## Read 05: Heroku Deployment

Heroku allows us to make a client side server and deploy it with the help of NodeJS

Within this we will make a server.js file
- http (allows http functionality)
- fs (interacts with the file system)
- path (handles file paths)
- mime (determines a file's MIME-type)

In the package.json file we have:
- name
- version
- description
- dependencies

Then we write some functions
- send404()
- sendPage()

Next we create out http server
Then assign a port number

To start server locally: `node server.js`


Helpful Heroku commands:
+ heroku login
+ heroku create
+ git push heroku master/main
+ heroku apps:rename myfirstserver
+ heroku open

DIRT
Data-Intensive Real-Time applications





