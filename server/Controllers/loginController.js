const bcrypt = require("bcrypt"); // library from backend library encryption
const db = require('../Config/database'); // Database connection configuration file

const loginMember = async (req, res) => {
    try {
        const { email, password } = req.body;

        const verifyQuery = "SELECT * FROM members WHERE email = ?";
        db.query(verifyQuery, [email], (error, results) => {

            if (error) {
                console.error(error);
                return res
                .status(500)
                .send("Error querying the database");
            }

            if (results.length === 0) {
                console.log("Email not found");
                return res
                .status(401)
                .send({ message: "Invalid email or password"})
            }
            

            const members = results[0];
            const isMatch = bcrypt.compare(password, members.password_hash);

            if (!isMatch) {
                console.log("Incorrect password");
                return res
                .status(401)
                .send({ message: "Invalid email or password" });
            }

            // Store member data in the session
            req.session.member = {
                userId: members.member_id
            }

            console.log(`Member ${members.first_name} logged in successfully`);
            res.send({
                message: "Logged in successfully",
                member_id: members.member_id,
                first_name: members.first_name,
            });
        });
    } catch (error) {
        console.error('Error logging in:', error);
        res
        .status(500)
        .send("Internal Server Error");
    }
};

 module.exports = {
    loginMember,
 };

 // Another method for implementing verification
/*
 bcrypt.compare(password, members.password_hash, (compareError, isMatch) => {
    if (compareError) {
        console.error('Error comparing password:', compareError);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
        return;
    }

    if (isMatch) {
        console.log('Logged in successfully');
        res.status(200).json({ success: true, userID: members.member_id });
        
        // Store member data in the session
        req.session.user = {
        userId: members.member_id
        }
    } else {
        console.log('Invalid password.');
        res.status(401).json({ success: false, error: 'Invalid Password' });
    }
    }); 
*/