// const bcrypt = require('bcrypt');
const pool = require('../Client');
const client = pool;


async function dropTables() {
  try {
    console.log('Starting to drop tables...');

    await client.query(`
      DROP TABLE IF EXISTS reservations;
      DROP TABLE IF EXISTS customers;
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

    await client.query(`
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

    // const hashedPassword = await bcrypt.hash('admin123', 10);

    // await createUser({ username:"admin", password:hashedPassword, email:"admin@example.com", isAdmin:true})

    // const pokemonData = await getPokemonData();


    // await createProducts(pokemonData);

    
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