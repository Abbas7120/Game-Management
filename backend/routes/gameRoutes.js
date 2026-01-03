import express from 'express'
import { getGames } from '../controllers/gameController.js'
import authenticateToken from '../middleware/authMiddleware.js'
const router=express.Router()

router.get("/",authenticateToken,getGames)

export default router