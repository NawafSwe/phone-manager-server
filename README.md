# Phone-manager-server 🚀

This is a Simple Backend handles a Phone book management.

# Project structure
in this project I have structured it as web server and each functionality can be called via endpoint

# Technology used to develop the project 😍🔥:
* I have used NODEJS and javascript as a programming language to build a web server without a framework such (expressjs,nestjs, ect).
* I have used Mongodb as main database and the official mongodb driver for <a href="https://docs.mongodb.com/drivers/node/current/">mongodb</a>
* I have dockerized the server to make the life easier for tester, since it works on a container it is 100% will work in other user's machine 🐳.

# How to run the project:
before running the project make sure you have docker installed in your own machine,
I have chosen docker to avoid tester to do manual work such as create database or config its env to make it work on his local machine.
Just make sure before following me that you do not have docker containers running on a port conflicting with this project so feel free to change the ports!
* Once you cloned the project in the root directory run the following commands
* `docker-compose -p 127.0.0.1:6060:6060 up --build`, to build the docker-compose file and set up an image of the server and an image of the mongodb database.
* To quit the server run `docker-compose down --volumes` to stop the server and remove the volumes of the db.


# How to test the project ?🐳
To be abel to test the project I have created three endpoints that handles the following functionality 
* Add a name and associate it with either one number or more than one constructed on `http://{{HOST}}:{{PORT}}/users` POST http request with the following body:
  ```json
       {
      "name":"Nawaf",
      "numbers": ["0546677100","0546677100"]
        }
     ```
    Where Name is mandatory field
* Show a list of names, constructed on ```http://{{HOST}}:{{PORT}}/users``` with GET http request, it will return saved users with their numbers and names.
* Show a name with numbers associated with it constructed on ```http://{{HOST}}:{{PORT}}/users/${userId}``` with GET http request, it will return user information (name,numbers)
* Delete User by his id on ```http://{{HOST}}:{{PORT}}/users/${userId}``` with DELETE http request
* If unknown endpoint hit you will receive 404 Not found error.

# Testing with POSTMAN:
I have included a postman collection file to be abel to test the api 🚀.
