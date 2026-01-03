import pool from "../config/db.js";

export const getGames=async (req,res)=>{
   const { filter } = req.query; // e.g. /games?filter=Cricket
    try {
        let query = 'SELECT * FROM games';
        let params = [];
        
        // If filter exists and is not 'All', filter by category
        if (filter && filter !== 'All') {
            query += ' WHERE category = $1';
            params.push(filter);
        }
        
        const result = await pool.query(query, params);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}