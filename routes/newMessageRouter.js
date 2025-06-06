import { Router } from 'express'
import { createNewMessage, getNewMessageView } from '../controller/newMessageController.js'

const newMessageRouter = Router()

newMessageRouter.get('/', getNewMessageView)
newMessageRouter.post('/', createNewMessage)

export default newMessageRouter
