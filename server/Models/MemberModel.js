/*
By using callbacks, you allow the calling code to handle the results of the asynchronous database operation.
For example, when calling memberModel in your controller or route, you would typically provide a callback 
function that defines how to respond based on the success or failure of the database operation.
*/
// const db = require('../Config/database') // Database connection configuration file


// Old code
/*
const memberModel = (memberData) => {
    const {
        first_name,
        last_name,
        address,
        email,
        password,
        pdf_license,
    } = memberData;

    // Check if the email already exist in the database
    const emailCheckSql = 'SELECT * FROM members WHERE email = ?';
    const emailCheckValues = [email];

    // Error Handling for the email availability
    db.query(emailCheckSql, emailCheckValues, (err, results) => {
        if (err) {
            console.log('Error checking email existence: ', err);
            return;
        }

        if (results.length > 0) {
            // Email already exists, send an error response
            const error = new Error('Email already exists');
            error.statusCode = 400; // Bad Request
            return;
        }
    })

    // Email doesn't exist, proceed with the registration
    const query = 
    'INSERT INTO members (first_name, last_name, address, email, password, pdf_license) VALUES (?, ?, ?, ?, ?, ?)';
    const values = [first_name, last_name, address, email, password, pdf_license];

    console.log("Inserting INTO members data")

    db.query(query, values, (err, result) => {

        if (err) {
            console.log('Error inserting member data:', err);
            return;
        }

        console.log('Member registered successfully');
    });
};
    
module.exports = memberModel;
*/

/*
console.log('Reaches Modules')

const addMember = (memberData) => {
    
    console.log('Reaches addMember module');

    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO members (first_name, last_name, address, email, password, pdf_license) VALUES (?, ?, ?, ?, ?, ?)';

        db.query(query, [memberData.first_name, memberData.last_name, memberData.address, memberData.email, memberData.password, memberData.pdf_license], (error, results) => {
            if (error) {
                reject(error);
                return;
            }

            resolve(results);
        });
    });
};

const checkEmailExists = (email) => {

    console.log('Reaches checkEmailExists module');


    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM members WHERE email = ?';

        db.query(query, [email], (error, results) => {
            if (error) {
                reject(error);
                return;
            }

            resolve(results[0]); // Unique email, expecting at most one result
        });
    });
};

module.exports = {
    addMember,
    checkEmailExists,
};
*/



// Old code
/*
const memberModel = (memberData) => {
    const {
        firstName,
        lastName,
        address,
        email,
        hashedPassword,
        licensePDF,
    } = memberData;

    // Check if the email already exist in the database
    const emailCheckSql = 'SELECT * FROM members WHERE email = ?';
    const emailCheckValues = [email];

    // Error Handling for the email availability
    db.query(emailCheckSql, emailCheckValues, (err, results) => {
        if (err) {
            console.log('Error checking email existence: ', err);
            return;
        }

        if (results.length > 0) {
            // Email already exists, send an error response
            const error = new Error('Email already exists');
            error.statusCode = 400; // Bad Request
            return;
        }
    })

    // Email doesn't exist, proceed with the registration
    const query = 
    'INSERT INTO members (first_name, last_name, address, email, password_hash, pdf_license) VALUES (?, ?, ?, ?, ?, ?)';
    const values = [firstName, lastName, address, email, hashedPassword, licensePDF];

    console.log("Inserting INTO members data")

    db.query(query, values, (err, result) => {

        if (err) {
            console.log('Error inserting member data:', err);
            return;
        }

        console.log('Member registered successfully');
    });
};
    
module.exports = memberModel;
*/

/*
const registerMember = async(
    firstName,
    lastName,
    address,
    email,
    password,
    licensePDF,
) => {
    try {
        // Hash the password with the salt
        const hashedPassword = await bcrypt.hash(password, 10); // 10 refers to the salt amount

        // Insert the new member into the database
        const [Result] = await db.execute (
            'INSERT INTO members (first_name, last_name, address, email, password_hash, pdf_license) VALUES (?, ?, ?, ?, ?, ?)',
            [firstName, lastName, address, email, hashedPassword, licensePDF]);

        return Result.insertId; // propery that holds value of the auto-incremented primary key for the last insert operation
    }   catch (error) {
        throw error;
    }
};

const checkEmailExists = async (email) => {
    try {
        // Check if email already exists
        const [rows] = (await db).execute(
            'SELECT * FROM memebers WHERE email = ?', 
            [email]);

        return rows.length > 0;
    } catch (error) {
        throw error;
    }
};

module.exports = { registerMember, checkEmailExists };
*/

/*
    {
    // Insert member into the database
    async createMember(
        firstName,
        lastName,
        address,
        email,
        hashedPassword,
        licensePDF,
    ) {
        try {
            // Check if email already exists
            const existingMember = await query(
                'SELECT * FROM members WHERE email = ?', [email]
            );
            if (existingMember.length > 0) {
                throw new Error('Email already exists');
            }

            // Insert new member
            const result = await query(
            'INSERT INTO members (first_name, last_name, address, email, password_hash, pdf_license) VALUES (?, ?, ?, ?, ?, ?)',
            [firstName, lastName, address, email, hashedPassword, licensePDF]
            );

            // Return the ID of the newly inserted member
            return result.insertId;
        } catch (error) {
            throw error;
        }
    },
};

module.exports = { memberModel };
*/

