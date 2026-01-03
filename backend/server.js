import express from 'express';
import dotenv from 'dotenv';
import pool from './config/db.js';
dotenv.config()

const app=express()
const PORT=process.env.PORT

app.use(express.json())

pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('Database Connection Failed:', err);
    } else {
        console.log('Database Connected Successfully!');
     
    }
});


app.listen(PORT,()=>{console.log(`Server connected on PORT :${PORT}`)})
