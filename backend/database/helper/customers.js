const pool = require('../../Client');

const customers = {
    create:
        async (customer) => {
            try {
                const result = await pool.query(`
                    INSERT INTO customers (customer_ID, first_name, last_name, email)
                    VALUES ($1, $2, $3, $4)
                    RETURNING *;
                `, [customer.customer_ID, customer.first_name, customer.last_name, customer.email]);
                return result.rows;
            } catch (e) {
                console.error('Error creating customer!!!');
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
                        SELECT * FROM customers WHERE customer_ID = $1;
                    `, [customerId]);
                    return result.rows;
                } catch (e) {
                    console.error('Error getting customer by customer ID!!!');
                }
            },
        __byInternalId:
            async (internalId) => {
                try {
                    const result = await pool.query(`
                        SELECT * FROM customers WHERE internal_ID = $1;
                    `, [internalId]);
                    return result.rows;
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
                    if(!customer.customer_ID || !customer.internal_ID) {
                        throw new Error('customer_ID or internal_ID is required to update customer!!!');
                    } else if(customer.customer_ID){
                        searchBy = 'customer_ID';
                        id = customer.customer_ID;
                    } else {
                        searchBy = 'internal_ID';
                        id = customer.internal_ID;
                    }
            
                    delete customer.customer_ID;
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