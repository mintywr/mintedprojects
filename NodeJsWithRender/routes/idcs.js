import express from 'express'
import { idcsValidateToken } from '../controllers/idcs.js'
const router = express.Router()

///idcs/validate
router.get("/validate" , idcsValidateToken );

export default router;