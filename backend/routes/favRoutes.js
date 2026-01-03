import express from 'express'
import { getFavorites,addFavorite,removeFavorite } from '../controllers/favController.js'
import authenticateToken from '../middleware/authMiddleware.js'
const router=express.Router()
router.use(authenticateToken)
router.get('/',getFavorites)
router.post('/:gameId',addFavorite)
router.delete('/:gameId',removeFavorite)

export default router