//const MemberModel = require('../Models/MemberModel') // import the memberModel
const bcrypt = require('bcrypt'); // library from backend library encryption
/*
Some other valid encryptions:
oauth, auth-js, firebase (paid?), aws (full db encryption service)
*/
const db = require('../Config/database') // Database connection configuration file

const registerMember = async (req, res) => {

    try{
        let { first_name, last_name, address, email, password } = req.body;

        const queryCheckEmail = "SELECT email FROM members WHERE email = ?";
        db.query(queryCheckEmail, [email], async (error, results) => {
            if (error) {
                console.error(error);
                return res.status(500).send("Error executing query");
            }

            if (results.length > 0) {
                console.log("An account with this email already exists");
                return res
                    .status(400)
                    .send("An account with this email already exists");
            }

            first_name = first_name.toLowerCase();
            last_name = last_name.toLowerCase();
            email = email.toLowerCase();
            address = address.toLowerCase();

            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(password.trim(), saltRounds);

            const queryInsert = `
            INSERT INTO members (first_name, last_name, address, email, password_hash) 
            VALUES (?, ?, ?, ?, ?)
            `;
            db.query(queryInsert, [first_name, last_name, address, email, hashedPassword], (error, results) => {
                if (error) {
                    console.error(error);
                    return res.status(500).send("Error registering user");
                }

                // Store user data in the session
                req.session.member = {
                    userId: results.insertId,
                };

                console.log(`Member ${first_name} registered successfully`);
                res.json({ message: "Member registered successfully" });
            });
        });
    } catch (error) {
        console.error('Error registering member:', error);
        res
        .status(500)
        .send("Internal Server Error")
    }
};

module.exports = {
    registerMember,
};

/*
const registerMember = async (req, res) => {

    console.log('Reaches Controller');

    try {
        const { first_name, last_name, address, email, password} = req.body;

        // Check if the email is already registerd
        const existingMember = await MemberModel.checkEmailExists(email);
        if (existingMember) {
            return res.status(400).json({success: false, error: 'Email address is already registered' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10); // 10 refers to saltrounds

        // Access the uploaded file content from req.file.buffer
        const pdfFile = req.file ? req.file.buffer : null;

        // Prepare member data for insertion
        const memberData = {
            first_name,
            last_name,
            address,
            email,
            password: hashedPassword,
            pdf_license: pdfFile,
        };

        // Insert the member into the database
        const result = await MemberModel.addMember(memberData);

        // Redirect to the account page upon successful registration
        res.redirect('/account');

        res.status(201).json({success: true, member: result });
    } catch (error) {
        console.error('Error during member registration: ', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};

module.exports = {
    registerMember,
};
*/


// Old code
/*
const registerMember = async (req, res) => {

    console.log("The thingy gets to registration.js file")
    
        const {
            firstName,
            lastName,
            address,
            email,
            password: plainPassword,
        } = req.body;
    
        // Hash the password
        const saltRounds = 10; // Amount of randomly added string characters
        const hashedPassword = await bcrpyt.hash(plainPassword, saltRounds);
    
        // Process the uploaded PDF file (in memory)
        const pdfFile = req.file; // req.file contains the file details
    
        const memberData = {
            firstName,
            lastName,
            address,
            email,
            hashedPassword,
            licensePDF: pdfFile.buffer,
        };
    
        MemberModel.registerMember(memberData, (err, result) => {
            if (err) {
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }
    
            res.status(200).json({ message: 'Registration successful' });
            
            // Redirect to the account page agter successful registration
            //res.redirect('/account');
        });
    };
    
    module.exports = { registerMember };
*/

/*
const registerMember = async (req, res) => {
    const { 
        firstName,
        lastName,
        address,
        email,
        password,
    } = req.body;

    try {
        // check if email already exists
        const emailExists = await MemberModel.checkEmailExists(email);

        if (emailExists) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        // Register the new memeber
        const memberId = await MemberModel.registerMember(
            firstName,
            lastName,
            address,
            email,
            password,
            req.file // Access the uploaded file from the request
        );

        res.status(201).json({ message: 'Registration successful', memberId });

        // Redirect to the account page
        res.redirect('/account');
        
    }   catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { registerMember };
*/


/*
            // Redirect to the account page after successful registration
            res.redirect('/account');
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error')
        });
    }
};
*/