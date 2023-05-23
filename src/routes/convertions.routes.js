import { Router } from 'express'
import { postConvertion, getConvertions } from '../controllers/convertions.controller.js'


const router = Router()

router.get('/convertion/admin', getConvertions)
router.post('/convertion', postConvertion)




export default router