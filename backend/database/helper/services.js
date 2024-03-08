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

    get:{
        all:
            async () => {
                try {
                    const result = await pool.query(`
                        SELECT * FROM services;
                    `);
                    return result.rows;
                } catch (e) {
                    console.error('Error getting all services!!!');
                }
            },
        
        byServiceId:
            async (serviceId) => {
                try {
                    const result = await pool.query(`
                        SELECT * FROM services WHERE service_id = $1;
                    `, [serviceId]);
                    return result.rows;
                } catch (e) {
                    console.error('Error getting service by service ID!!!');
                }
            },
        __byInternalId:
            async (internalId) => {
                try {
                    const {rows:[service]} = await pool.query(`
                        SELECT * FROM services WHERE internal_id = $1;
                    `, [internalId]);
                    return service;
                } catch (e) {
                    console.error('Error getting service by internal ID!!!');
                }
            }
    },
}

module.exports = services;