const pool = require('../../Client');

const reservationServices = {
    create:
        async ({service_id, reservation_id}) => {
            try {
                const result = await pool.query(`
                    INSERT INTO reservation_services (service_id, reservation_id)
                    VALUES ($1, $2)
                    RETURNING *;
                `, [service_id, reservation_id]);
                return result.rows;
            } catch (e) {
                console.error('Error creating reservation service!!!', e);
            }
        }
};

module.exports = reservationServices;