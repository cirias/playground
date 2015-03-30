// function checkUsersValid (goodUsers) {
//   var goodUserIds = goodUsers.map(function (user) {
//     return user.id;
//   });
//   return function (submittedUsers) {
//     var valid = true;
//     submittedUsers.forEach(function (user) {
//       valid = (valid && (goodUserIds.indexOf(user.id) >= 0));
//     });
//     return valid;
//   };
// }
//
// module.exports = checkUsersValid;

// Official Solution:

module.exports = function checkUsersValid(goodUsers) {
  return function(submittedUsers) {
    return submittedUsers.every(function(submittedUser) {
      return goodUsers.some(function(goodUser) {
        return goodUser.id === submittedUser.id
      })
    })
  }
}
