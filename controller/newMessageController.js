import { createNewMessage } from '../db/queries.js';

const getNewMessageView = (req, res) => {
  res.render('form');
};

const postNewMessage = async (req, res) => {
  await createNewMessage(req.body.name, req.body.message);
  res.redirect('/');
};

export { getNewMessageView, postNewMessage };
