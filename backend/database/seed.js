const bcrypt = require('bcrypt');
require('dotenv').config();
const pool = require('../Client');
const { createUser, createCustomer, createReservation } = require('./db');


async function dropTables() {
  try {
    console.log('Starting to drop tables...');

    await pool.query(`
      DROP TABLE IF EXISTS reservations;
      DROP TABLE IF EXISTS customers;
      DROP TABLE IF EXISTS users;
    `);

    console.log('Finished dropping tables!');
  } catch (e) {
    console.error('Error dropping tables!!!');
    throw e;
  }
}

async function createTables() {
  try {
    console.log('Starting to build tables...');

    await pool.query(`
        CREATE TABLE users(
            internal_ID UUID DEFAULT gen_random_uuid() PRIMARY KEY,
            username VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            role VARCHAR(10) DEFAULT 'user'
        );
        CREATE TABLE customers(
            internal_ID UUID DEFAULT gen_random_uuid() PRIMARY KEY,
            customer_ID INTEGER UNIQUE NOT NULL,
            first_name VARCHAR(255) NOT NULL,
            last_name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL
            CONSTRAINT email_format CHECK (email LIKE '%_@__%.__%')
        );
        CREATE TABLE reservations(
            internal_ID UUID DEFAULT gen_random_uuid() PRIMARY KEY,
            reservation_ID INTEGER UNIQUE NOT NULL,
            start_date DATE NOT NULL,
            end_date DATE NOT NULL,
            customer_ID UUID REFERENCES customers(internal_ID) NOT NULL
            CONSTRAINT check_dates CHECK (start_date < end_date)
        );
    `);

    console.log('Finished building tables!');
  } catch (e) {
    console.error('Error building tables!!!');
    throw e;
  }
}

async function insertInitialData() {
  try {
    console.log('Starting to insert initial data...');

    //+process.env.SALT_ROUNDS << the + before process.env.SALT_ROUNDS is to convert the string to a number
    const hashedPassword = await bcrypt.hash('admin', +process.env.SALT_ROUNDS);

    await createUser({ username:"admin", password:hashedPassword, email:"admin@example.com", role:"admin"})
    .then((result) => {console.log(result)})

    const customers = [
      { customer_ID: 1, first_name: 'John', last_name: 'Doe', email: 'test@example.com' },
      { customer_ID: 2, first_name: 'John1', last_name: 'Doe1', email: 'test1@example.com' },
      { customer_ID: 3, first_name: 'John2', last_name: 'Doe2', email: 'test2@example.com' },
      { customer_ID: 4, first_name: 'John3', last_name: 'Doe3', email: 'test3@example.com' },
      { customer_ID: 5, first_name: 'John4', last_name: 'Doe4', email: 'test4@example.com' },
      { customer_ID: 6, first_name: 'John5', last_name: 'Doe5', email: 'test5@example.com' },
      { customer_ID: 7, first_name: 'John6', last_name: 'Doe6', email: 'test6@example.com' },
      { customer_ID: 8, first_name: 'John7', last_name: 'Doe7', email: 'test7@example.com' },
      { customer_ID: 9, first_name: 'John8', last_name: 'Doe8', email: 'test8@example.com' },
    ]

    customers.map(async (customer) => {
      await createCustomer(customer)
      .then((result) => {console.log(result)})
    })
    
    console.log('Finished inserting initial data!');
  } catch (e) {
    console.error('Error inserting initial data!!!');
    throw e;
  }
}

async function seed() {
  try {
    await dropTables();
    await createTables();
    await insertInitialData();
    console.log('Database seeded successfully!');
  } catch (e) {
    console.error('Error seeding database!!!');
    throw e;
  }
}

module.exports = seed;