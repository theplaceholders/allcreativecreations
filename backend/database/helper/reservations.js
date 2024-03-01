const pool = require('../../Client');

const reservations = {
    create:
        async (reservation) => {
            try {
                const result = await pool.query(`
                    INSERT INTO reservations (reservation_ID, start_date, end_date, customer_ID)
                    VALUES ($1, $2, $3, $4)
                    RETURNING *;
                `, [reservation.reservation_ID, reservation.start_date, reservation.end_date, reservation.customer_ID]);
                return result.rows;
            } catch (e) {
                console.error('Error creating reservation!!!');
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
        
    },

    update:{
        byReservationId:
            async ({...reservation}) => {
                try {
                    let searchBy = "";
                    let id = "";
                    if(!reservation.reservation_ID || !reservation.internal_ID) {
                        throw new Error('reservation_ID or internal_ID is required to update reservation!!!');
                    } else if(reservation.reservation_ID){
                        searchBy = 'reservation_ID';
                        id = reservation.reservation_ID;
                    } else {
                        searchBy = 'internal_ID';
                        id = reservation.internal_ID;
                    }

                    delete reservation.reservation_ID;
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