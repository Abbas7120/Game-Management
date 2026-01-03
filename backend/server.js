import express from 'express';
import dotenv from 'dotenv';
import pool from './config/db.js';
import cors from 'cors'
import authRoutes from './routes/authRoutes.js';
import gameRoutes from './routes/gameRoutes.js'
import favRoutes from './routes/favRoutes.js'
dotenv.config()

const app=express()
const PORT=process.env.PORT

app.use(express.json())
app.use(cors())
app.use('/auth',authRoutes)
app.use('/games',gameRoutes)
app.use('/favorites',favRoutes)
pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('Database Connection Failed:', err);
    } else {
        console.log('Database Connected Successfully!');
     
    }
});


app.listen(PORT,()=>{console.log(`Server connected on PORT :${PORT}`)})
