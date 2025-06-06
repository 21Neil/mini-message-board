import { Router } from 'express'
import { getIndexView } from '../controller/indexController.js'

const indexRouter = Router()

indexRouter.get('/', getIndexView)

export default indexRouter
