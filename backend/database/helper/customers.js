const pool = require('../../Client');

const customers = {
    create:
        async (customer) => {
            try {
                const result = await pool.query(`
                    INSERT INTO customers (customer_id, first_name, last_name, email)
                    VALUES ($1, $2, $3, $4)
                    RETURNING *;
                `, [customer.customer_id, customer.first_name, customer.last_name, customer.email]);
                return result.rows;
            } catch (e) {
                console.error('Error creating customer!!!', e);
            }
        },
    
    get:{
        all:
            async () => {
                try {
                    const result = await pool.query(`
                        SELECT * FROM customers;
                    `);
                    return result.rows;
                } catch (e) {
                    console.error('Error getting all customers!!!');
                }
            },
        
        byCustomerId:
            async (customerId) => {
                try {
                    const result = await pool.query(`
                        SELECT * FROM customers WHERE customer_id = $1;
                    `, [customerId]);
                    return result.rows;
                } catch (e) {
                    console.error('Error getting customer by customer ID!!!');
                }
            },
        __byInternalId:
            async (internalId) => {
                try {
                    const {rows:[customer]} = await pool.query(`
                        SELECT * FROM customers WHERE internal_id = $1;
                    `, [internalId]);
                    return customer;
                } catch (e) {
                    console.error('Error getting customer by internal ID!!!');
                }
            }
    },

    update:{
        byCustomerId:
            async ({...customer}) => {
                try {
                    let searchBy = "";
                    let id = "";
                    if(!customer.customer_id || !customer.internal_id) {
                        throw new Error('customer_id or internal_id is required to update customer!!!');
                    } else if(customer.customer_id){
                        searchBy = 'customer_id';
                        id = customer.customer_id;
                    } else {
                        searchBy = 'internal_id';
                        id = customer.internal_id;
                    }
            
                    delete customer.customer_id;
                    const setStr = Object.keys(customer).map(
                        (key, index) => `"${key}"=$${index + 1}`
                      ).join(',')
            
                    const result = await pool.query(`
                        UPDATE customers
                        SET ${setStr}
                        WHERE ${searchBy} = ${id}
                        RETURNING *;
                    `, Object.values(customer));
                    return result.rows;
                } catch (e) {
                    console.error('Error updating customer!!!');
                }
            },
    }
}

module.exports = customers;