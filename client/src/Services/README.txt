Service files are commonly used to encapsulate logic related to API calls, data fetching, and other external interactions. 
These files help seperate concerns, making your codebase more maintainable and modular. 

Here are the common files that a services directory might contain:
- API Service JavaScript File:
	- Thise file contains functions for making API calls using methods like 'fetch', Axios, or any other HTTP client library. It 	encapsulates the logic for interacting with your backend API
- Authentication Service JavaScript File (optional):
	- If your application involves user authentication, you might have a seperate service file for managing authentication-related 	logic, like login, logout, and token management

- LocalStorage Service JavaScript File (Optional):
	- A service for managing data in the browser's 'localStorage' or 'sessionStorage'. This can be used for storing temporary data, user 	preferences, or authentication tokens.
- Notification Service JavaScript File (optional):
	- A service for managing notifications or alerts in your application. It can provide functions to show success messages, error 	messages, or other types of notifications to users.