// module.exports = function loadUsers(userIds, load, done) {
//   var result = userIds.slice();
//   var ok = 0;
//   userIds.forEach(function (id) {
//     load(id, function (user) {
//       result[result.indexOf(id)] = user;
//       ok++;
//       if (ok === result.length) {
//         done(result);
//       }
//     });
//   });
// };

// Official Solution:

function loadUsers(userIds, load, done) {
  var completed = 0
  var users = []
  userIds.forEach(function(id, index) {
    load(id, function(user) {
      users[index] = user
      if (++completed === userIds.length) return done(users)
    })
  })
}

module.exports = loadUsers
