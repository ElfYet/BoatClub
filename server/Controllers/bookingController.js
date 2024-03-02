const db = require('../Config/database');

const createBooking = async (req, res) => {
  try {
    const { boat_id, booking_date } = req.body;
    const { member_id } = req.session.members; // Retrieve member_id from the session

    const query = 'INSERT INTO bookings (fk_member_id, fk_boat_id, booking_date) VALUES (?, ?, ?)';
    db.query(query, [member_id, boat_id, booking_date], (error, results) => {
      if (error) {
        console.error('Error making booking:', error);
        return res.status(500).send('Error making booking');
      }

      console.log('Booking successful');
      res.json({ message: 'Booking successful' });
    });
  } catch (error) {
    console.error('Error making booking:', error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  createBooking,
};
