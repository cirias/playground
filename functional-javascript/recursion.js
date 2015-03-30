module.exports = function getDependencies (tree) {
  if (tree.dependencies === undefined) {
    return [];
  } else {
    return Object.keys(tree.dependencies).reduce(function (output, key) {
      return output.concat(getDependencies(tree.dependencies[key])).concat(key + '@' + tree.dependencies[key].version);
    }, []).sort().unique();
  }
};

Object.defineProperty(Array.prototype, 'unique', {
  enumerable: false,
  configurable: false,
  writable: false,
  value: function() {
    var a = this.concat();
    for(var i=0; i<a.length; ++i) {
      for(var j=i+1; j<a.length; ++j) {
        if(a[i] === a[j])
          a.splice(j--, 1);
      }
    }

    return a;
  }
});

// Official Solution:

// function getDependencies(mod, result) {
//   result = result || []
//   var dependencies = mod.dependencies || []
//   Object.keys(dependencies).forEach(function(dep) {
//     var key = dep + '@' + mod.dependencies[dep].version
//     if (result.indexOf(key) === -1) result.push(key)
//     getDependencies(mod.dependencies[dep], result)
//   })
//   return result.sort()
// }
//
// module.exports = getDependencies
