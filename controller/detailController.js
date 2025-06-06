import { getMessageById } from "../db.js"

const getDetailView = (req, res) => {
  const message = getMessageById(Number(req.params.id))
  res.render('detail', { title: 'Detail', message })
}

export {
  getDetailView
}
