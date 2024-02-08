const e = require('express');
const pool = require('../Client');

async function createCustomer(customer) {
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
}

async function updateCustomerByCustomerId({...customer}) {
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
}

async function getAllCustomers() {
    try {
        const result = await pool.query(`
            SELECT * FROM customers;
        `);
        return result.rows;
    } catch (e) {
        console.error('Error getting all customers!!!');
    }
}

async function getCustomerByCustomerId(customerId) {
    try {
        const result = await pool.query(`
            SELECT * FROM customers WHERE customer_ID = $1;
        `, [customerId]);
        return result.rows;
    } catch (e) {
        console.error('Error getting customer by customer ID!!!');
    }
}

async function getCustomerByInternalId(internalId) {
    try {
        const result = await pool.query(`
            SELECT * FROM customers WHERE internal_ID = $1;
        `, [internalId]);
        return result.rows;
    } catch (e) {
        console.error('Error getting customer by internal ID!!!');
    }
}

async function createReservation(reservation) {
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
}

async function updateReservation({...reservation}) {
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

async function getAllReservations() {
    try {
        const result = await pool.query(`
            SELECT * FROM reservations;
        `);
        return result.rows;
    } catch (e) {
        console.error('Error getting all reservations!!!');
    }
}

async function createUser(user) {
    try {
        const result = await pool.query(`
            INSERT INTO users (username, password, email, role)
            VALUES ($1, $2, $3, $4)
            RETURNING *;
        `, [user.username, user.password, user.email, user.role]);
        return result.rows;
    } catch (e) {
        console.error('Error creating user!!!');
    }
}

async function updateUserByUsername({...user}) {
    try{
        if(!user.username) throw new Error('username is required to update user!!!');
        const username = user.username;
        delete user.username;
        const setStr = Object.keys(user).map(
            (key, index) => `"${key}"=$${index + 1}`
          ).join(',')

        const result = await pool.query(`
            UPDATE users
            SET ${setStr}
            WHERE username = ${username}
            RETURNING *;
        `, Object.values(user));
        return result.rows;
    } catch(e){
        console.error('Error updating user!!!');
    }
}

async function getUserByUsername(username) {
    try {
        const result = await pool.query(`
            SELECT * FROM users WHERE username = $1;
        `, [username]);
        return result.rows;
    } catch (e) {
        console.error('Error getting user by username!!!');
    }
}

async function getUserByEmail(email) {
    try {
        const result = await pool.query(`
            SELECT * FROM users WHERE email = $1;
        `, [email]);
        return result.rows;
    } catch (e) {
        console.error('Error getting user by email!!!');
    }

}

async function getUserByRole(role) {
    try {
        const result = await pool.query(`
            SELECT * FROM users WHERE role = $1;
        `, [role]);
        return result.rows;
    } catch (e) {
        console.error('Error getting user by role!!!');
    }
}

module.exports = {
    createCustomer,
    updateCustomerByCustomerId,
    getAllCustomers,
    getCustomerByCustomerId,
    getCustomerByInternalId,
    createReservation,
    updateReservation,
    getAllReservations,
    createUser,
    updateUserByUsername,
    getUserByUsername,
    getUserByEmail,
    getUserByRole
}