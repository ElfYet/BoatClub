A.K.A. DatabaseHandlers
The 'models' folder is a common convention used to store files related to data models. Data models represent the structure of 
your appication's data and define how data is stored, retrieved, and manipulated in the database. 

Here's what you might typically find in a 'models' folder in a server-side application:
- Database Schema Definitions:
	- These files define the structure of the data that will be stored in the database. For example, in a MongoDB application, you might 	define the schema for a User entity, specifying the fields, data types, and validation rules.
- Data Validation and Transformation Logic (Validations functions and data transformation utilities):
	- Files containing functions to validate data before saving it to the database. These functions can also transform data into the 	format expected by the database.
- Database Query Logic (Files for database query functions):
	- These files contain functions to interact with the database, including querying, updating, deleting, and retrieving data.
- Database Connections Logic (Database connection setup):
	- Files where the connection to the database is established. These files configure the database connection settings.
