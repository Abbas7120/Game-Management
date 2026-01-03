import pool from '../config/db.js'

export const getFavorites=async (req,res)=>{
    try{
const result=await pool.query('SELECT game_id FROM favorites where user_id=$1',[req.user.id])
res.json(result.rows.map(row=>row.game_id))  
}
    catch(err){
        res.status(500).json({error:err.message})
    }
}

export const addFavorite=async(req,res)=>{
    try{
await pool.query('INSERT INTO favorites (user_id,game_id) VALUES ($1,$2) ON CONFLICT DO NOTHING',[req.user.id,req.params.gameId])

 res.json({success:true,message:"Added to favorites"})   }
    catch(err){
        res.status(500).json({error:err.message})  
    }


}

export const removeFavorite=async (req,res)=>{
    try{
await pool.query('DELETE FROM favorites where user_id=$1 AND game_id=$2',[req.user.id,req.params.gameId])
res.json({success:true,message:"Remove from favorites"})  
}
    catch(err){
        res.status(500).json({error:err.message})  
    }
}
