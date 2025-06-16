import { Router } from 'express'
import { postNewMessage, getNewMessageView } from '../controller/newMessageController.js'

const newMessageRouter = Router()

newMessageRouter.get('/', getNewMessageView)
newMessageRouter.post('/', postNewMessage)

export default newMessageRouter
