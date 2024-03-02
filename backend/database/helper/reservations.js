const pool = require('../../Client');

const reservations = {
    create:
        async (reservation) => {
            try {
                const result = await pool.query(`
                    INSERT INTO reservations (reservation_id, start_date, end_date, customer_id)
                    VALUES ($1, $2, $3, $4)
                    RETURNING *;
                `, [reservation.reservation_id, reservation.start_date, reservation.end_date, reservation.customer_id]);
                return result.rows;
            } catch (e) {
                console.error('Error creating reservation!!!', e);
            }
        },

    get:{
        all:
            async () => {
                try {
                    const result = await pool.query(`
                        SELECT * FROM reservations;
                    `);
                    return result.rows;
                } catch (e) {
                    console.error('Error getting all reservations!!!');
                }
            },
        
        servicesByReservationId: async (reservationId) => {
                try {
                    const result = await pool.query(`
                        SELECT services.* FROM services
                        INNER JOIN reservation_services ON services.internal_id = reservation_services.service_id
                        WHERE reservation_services.reservation_id = $1;
                    `, [reservationId]);
                    return result.rows;
                } catch (e) {
                    console.error('Error getting services by reservation ID!!!');
                }
            },
    },
    update:{
        byReservationId:
            async ({...reservation}) => {
                try {
                    let searchBy = "";
                    let id = "";
                    if(!reservation.reservation_id || !reservation.internal_id) {
                        throw new Error('reservation_id or internal_id is required to update reservation!!!');
                    } else if(reservation.reservation_id){
                        searchBy = 'reservation_id';
                        id = reservation.reservation_id;
                    } else {
                        searchBy = 'internal_id';
                        id = reservation.internal_id;
                    }

                    delete reservation.reservation_id;
                    const setStr = Object.keys(reservation).map(
                        (key, index) => `"${key}"=$${index + 1}`
                      ).join(',')

                    const result = await pool.query(`
                        UPDATE reservations
                        SET ${setStr}
                        WHERE ${searchBy} = ${id}
                        RETURNING *;
                    `, Object.values(reservation));
                    return result.rows;
                } catch (e) {
                    console.error('Error updating reservation!!!');
                }
            }
    }
    
}

module.exports = reservations;