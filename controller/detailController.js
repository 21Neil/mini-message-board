import { getMessageById } from "../db/queries.js"

const getDetailView = async (req, res) => {
  const message = (await getMessageById(Number(req.params.id))).rows[0]
  console.log(message)
  res.render('detail', { title: 'Detail', message })
}

export {
  getDetailView
}
