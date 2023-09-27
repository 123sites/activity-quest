module.exports = {
    configureDB: async function (db) {
        await db.query("CREATE DATABASE IF NOT EXISTS ACTIVITY_MAIN");
        await db.changeUser({ database: "ACTIVITY_MAIN" }); 
    },

    createTable: async function (db) { 
        await db.query(
            `CREATE TABLE IF NOT EXISTS 
            user (
                user_id INT AUTO_INCREMENT,
                user_name VARCHAR(255) NOT NULL,
                user_password VARCHAR(255) NOT NULL,
                user_email VARCHAR(255) NOT NULL,
                PRIMARY KEY (user_id)
            )`
        );
        console.log(`USER TABLE FOUND`);

        await db.query(
            `CREATE TABLE IF NOT EXISTS
            past_events (
                event_id INT AUTO_INCREMENT,
                user_id INT,
                event_name VARCHAR(255),
                event_date VARCHAR(255),
                attended BOOLEAN,
                PRIMARY KEY (event_id),
                FOREIGN KEY (user_id) REFERENCES user(user_id) ON DELETE CASCADE
            )`
        );
        console.log(`PAST EVENTS TABLE FOUND`);

        await db.query(
            `CREATE TABLE IF NOT EXISTS
            user_preferences (
                form_id INT AUTO_INCREMENT,
                user_id INT,
                activity_type VARCHAR(255),
                price VARCHAR(255),
                location VARCHAR(255),
                people_preference_1 VARCHAR(255),
                people_preference_2 VARCHAR(255),
                people_preference_3 VARCHAR(255),
                PRIMARY KEY (form_id),
                FOREIGN KEY (user_id) REFERENCES user(user_id) ON DELETE CASCADE
            )`
        );
        console.log(`USER PREFERENCE TABLE FOUND`)

        await db.query(
            `CREATE TABLE IF NOT EXITS
            interested_events (
                upcoming_events_id INT AUTO_INCREMENT,
                user_id INT,
                event_name VARCHAR(255);
                event_time VARCHAR(255);
                PRIMARY KEY (upcoming_events_id);
                FOREIGN KEY (user_id) REFERENCES user(user_id) ON DELETE CASCADE
            )`
        );
        console.log(`INTERESTED EVENTS TABLE FOUND`)
    }
}
