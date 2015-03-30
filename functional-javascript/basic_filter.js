function getShortMessages(messages) {
  return messages.map(function (data) {
    return data.message;
  }).filter(function (message) {
    return message.length < 50;
  });
}

module.exports = getShortMessages;
