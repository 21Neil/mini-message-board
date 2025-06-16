import { getMessages } from "../db/queries.js"

const getIndexView = async (req, res) => {
  const messages = (await getMessages()).rows
  res.render('index', { title: 'Mini Messageboard', messages})
}

export {
  getIndexView
}
