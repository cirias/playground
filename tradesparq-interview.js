var matrix = [
	1, 2, 3,
	3, 2, 4,
	5, 2, 1
];

var matrixMap = [];

var n = Math.sqrt(matrix.length);

(function() {
	for (var i = 0; i < n + 2; i++) {
		matrixMap.push(0);
	}

	for (var i = 0; i < n; i++) {
		matrixMap.push(0);

		for (var j = 0; j < n; j++) {
			matrixMap.push(1);
		}

		matrixMap.push(0);
	}

	for (var i = 0; i < n + 2; i++) {
		matrixMap.push(0);
	}
}());

var startPos = 0;
var route = [];

var toMatrixPos = function(pos) {
	return pos - (n + 1) - 2*Math.floor((pos + 1)/(n + 2));
}

var move = function(pos) {
	if (matrixMap[pos] === 0) {
		return Infinity;
	}

	if (route.indexOf(toMatrixPos(pos)) >= 0) {
		return Infinity;
	}

	route.push(toMatrixPos(pos));

	if (toMatrixPos(pos) === matrix.length - 1) {
		var fee = 0;
		for (var i = 0; i < route.length - 1; i++) {
			fee += matrix[route[i]] < matrix[route[i+1]] ? (matrix[route[i+1]] - matrix[route[i]]) * 300 : 100;
		}

		console.log(route + ': ' + fee);

		route.pop();

		return fee;
	}

	var newPos = [
		pos + 1,
		pos + n + 2,
		pos - 1,
		pos - n - 2
	];

	var fee = Infinity;

	for (var i = 0; i < newPos.length; i++) {
		var newFee = move(newPos[i]);

		if (newFee < fee) {
			fee = newFee;
		}
	}

	route.pop();

	return fee;
};

console.log(move(n + 3));
// console.log(move(7));

var move = function(pos, route) {
	if (route[route.length - 1] === matrix.length - 1) {
		var fee = 0;
		for (var i = 0; i < route.length - 1; i++) {
			fee += matrix[route[i]] < matrix[route[i+1]] ? (matrix[route[i+1]] - matrix[route[i]]) * 300 : 100;
		}

		console.log(route + ': ' + fee);

		return fee;
	}

	var newPos = [
		pos + 1,
		pos + n + 2,
		pos - 1,
		pos - n - 2
	];
	var routes = [];

	for (var i = 0; i < newPos.length; i++) {
		if (matrixMap[newPos[i]] === 0) {
			return Infinity;
		}

		if (route.indexOf(toMatrixPos(newPos[i])) >= 0) {
			return Infinity;
		}

		routes.push(route.slice(0).push(toMatrixPos(newPos[i])));
	}

	var fee = Infinity;

	for (var i = 0; i < routes.length; i++) {
		var newFee = move(routes[i][routes[i].length - 1], routes[i]);
		if (fee > newFee) {
			fee = newFee;
		}
	}

	return fee;
};

console.log(move(n + 3,[0]));