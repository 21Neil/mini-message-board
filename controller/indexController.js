import { getMessage } from "../db.js"

const messages = getMessage()

const getIndexView = (req, res) => {
  res.render('index', { title: 'Mini Messageboard', messages})
}

export {
  getIndexView
}
