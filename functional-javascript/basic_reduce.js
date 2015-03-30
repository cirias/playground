module.exports = function countWords (inputWords) {
  return inputWords.reduce(function (output, word) {
    output[word] = (output[word] || 0) + 1;
    return output;
  }, {});
};
