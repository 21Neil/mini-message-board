import { Router } from 'express'
import { getDetailView } from '../controller/detailController.js'

const detailRouter = Router()

detailRouter.get('/:id', getDetailView)

export default detailRouter
