# web_api_nodejs

# Part 5: Middlewares in Express.js

## ⭐ What is a Middleware ?

Middlewares are functions that are executed in between i.e in the middle of receiving a request and sending back a response. They are used to manipulate request or response object or to execute any other code.

Middleware functions can perform the following tasks:

- Execute any code.
- Make changes to the request and the response objects.
- End the request-response cycle.
- Call the next middleware function in the stack.

In this part, we have included some middlewares in our Express app.

To understand more about creating the web server, you may refer <a href="https://github.com/OpenGenus/web_api_nodejs/tree/master/part_1">part 1</a>.

To understand more about implementation of Routes in Node, you may refer <a href="https://github.com/OpenGenus/web_api_nodejs/tree/master/part_2">part 2</a>.

To understand more about creating a Web Api in Node, you may refer <a href="https://github.com/OpenGenus/web_api_nodejs/tree/master/part_3">part 3</a>.

To understand more about implementing routing in Express.js , you may refer <a href="https://github.com/OpenGenus/web_api_nodejs/tree/master/part_4_express">part 4</a>.

## 🚀 Get Started

1. Clone or download the repository.

2. Once you've downloaded the repo, Open it in an editor of your choice.

3. Open the terminal and traverse to **part_5_express_middleware** directory.

4. Now run command `npm install` to install all the required dependencies.

5. Now run command `node app.js` to start the server.

6. Open Postman and go to `127.0.0.1:3000` to see your server running.

7. Go to `GET 127.0.0.1:3000`, `POST 127.0.0.1:3000/data`, `GET 127.0.0.1:3000/some-random-route` to test the working of the middlewares.

## 📝 Learn More

To Learn more about how to include middlewares in Express.js, you may refer this <a href="https://iq.opengenus.org/p/d1f54e16-0990-4eac-aebd-b60f92055dc4/"> article</a>.
