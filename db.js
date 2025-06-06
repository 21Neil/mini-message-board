const messages = [
  {
    id: 1,
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    id: 2,
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

let id = 3

const getMessage = () => messages

const pushNewMessage = (user, newMessage) => messages.push({id: id++, text: newMessage, user, added: new Date()})

const getMessageById = id => messages.find( message => message.id === id)

export {
  getMessage,
  pushNewMessage,
  getMessageById
}
