const pool = require('../../Client');

const services = {
    create:
        async (service) => {
            try {
                const result = await pool.query(`
                    INSERT INTO services (service_id, name, note)
                    VALUES ($1, $2, $3)
                    RETURNING *;
                `, [service.service_id, service.name, service.note]);
                return result.rows;
            } catch (e) {
                console.error('Error creating service!!!', e);
            }
        },
}

module.exports = services;