import { pushNewMessage } from '../db.js'

const getNewMessageView = (req, res) => {
  res.render('form')
}

const createNewMessage = (req, res) => {
  pushNewMessage(req.body.name, req.body.message)
  res.redirect('/')
}

export {
  getNewMessageView,
  createNewMessage
}