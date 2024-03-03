In a server-side application, the routes folder is used to organize the endpoint routes and route handlers. 
Routes define how your server responds to client requests for specific resources or functionalities. 
Organizing routes into separate files based on their related features or resources can make your server code more modular, readable, 
and maintainable.

Here's what you might find in a routes folder in a server-side project directory:
- Route Handler Files (e.g. 'userRoutes.js'):
	- These files contain the route definitions and corresponding handler functions for specific resources or features of your 	application. Each route file typically handles requests related to a specific entity or functionality.
- Route Controller Files (e.g. 'UserControllers.js'):
	- These files contain functions (controllers) that handle the logic for processing requests and sending responses. Controllers are 	responsible for interacting with databases, performing business logic, and returning appropriate HTTP responses.
	- Note: Although Route Controller Files may be placed in the Routes folder, this particular project will have a seperate folder for these files***
- Index File (Optional):
	- The index.js file in the routes folder can be used to export multiple route files. It simplifies the process of importing routes into your main server file (app.js or server.js).