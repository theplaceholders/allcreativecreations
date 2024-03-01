const pool = require('../../Client');

const users = {
    create:
        async (user) => {
            try {
                const result = await pool.query(`
                    INSERT INTO users (username, password, email, role)
                    VALUES ($1, $2, $3, $4)
                    RETURNING *;
                `, [user.username, user.password, user.email, user.role]);
                return result.rows;
            } catch (e) {
                console.error('Error creating user!!!', e);
            }
        },

    get:{
        byUsername:
            async (username) => {
                try {
                    const result = await pool.query(`
                        SELECT * FROM users WHERE username = $1;
                    `, [username]);
                    return result.rows;
                } catch (e) {
                    console.error('Error getting user by username!!!');
                }
            },
        
        byEmail:
            async (email) => {
                try {
                    const result = await pool.query(`
                        SELECT * FROM users WHERE email = $1;
                    `, [email]);
                    return result.rows;
                } catch (e) {
                    console.error('Error getting user by email!!!');
                }
            },
        
        byRole:
            async (role) => {
                try {
                    const result = await pool.query(`
                        SELECT * FROM users WHERE role = $1;
                    `, [role]);
                    return result.rows;
                } catch (e) {
                    console.error('Error getting user by role!!!');
                }
            }
    },
    
    update:{
        byUsername:
            async ({...user}) => {
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
    }
}

module.exports = users;