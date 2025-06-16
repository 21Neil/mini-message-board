import pool from './pool.js';

const getMessages = async () => {
  return await pool.query('SELECT * FROM messages;')
}

const createNewMessage = async (name, message) => {
  await pool.query(`INSERT INTO messages (text, username, added) VALUES ($1, $2, $3);`, [message, name, new Date()])
}

const getMessageById = async (id) => {
  return await pool.query('SELECT * FROM messages WHERE id = $1;', [id])
}

export {
  getMessages,
  createNewMessage,
  getMessageById
}
