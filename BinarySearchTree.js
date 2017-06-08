exports.BinarySearchTree = function() {
	function Node(key) {
		this.key = key;
		this.left = null;
		this.right = null;
	}
	var root = null;

	var insertNode = function(node, newNode) {
		if (newNode.key < node.key) {
			if (node.left === null) {
				node.left = newNode;
			} else {
				insertNode(node.left, newNode);
			}
		} else {
			if (node.right === null) {
				node.right = newNode;
			} else {
				insertNode(node.right, newNode);
			}
		}
	};
	this.insert = function(key) {
		var newNode = new Node(key);
		if (root === null) {
			root = newNode;
		} else {
			insertNode(root, newNode);
		}
	};
	
	var inOrderTraverseNode = function(node, callback) {
		if (node !== null) {
			inOrderTraverseNode(node.left, callback);
			callback(node.key);
			inOrderTraverseNode(node.right, callback);
		}
	};
	this.inOrderTraverse = function(callback) {
		inOrderTraverseNode(root, callback);
	};

	var preOrderTraverseNode = function(node, callback) {
		if (node !== null) {
			callback(node.key);
			preOrderTraverseNode(node.left, callback);
			preOrderTraverseNode(node.right, callback);
		}
	};
	this.preOrderTraverse = function(callback) {
		preOrderTraverseNode(root, callback);
	};

	var postOrderTraverseNode = function(node, callback) {
		if (node !== null) {
			postOrderTraverseNode(node.left, callback); //{1}
			postOrderTraverseNode(node.right, callback); //{2}
			callback(node.key); //{3}
		}
	};
	this.postOrderTraverse = function(callback) {
		postOrderTraverseNode(root, callback);
	};

	var minNode = function(node) {
		if (node) {
			while (node && node.left !== null) { //{2}
				node = node.left; //{3}
			}
			return node.key;
		}
		return null; //{4}
	};
	this.min = function() {
		return minNode(root); //{1}
	};

	var maxNode = function(node) {
		if (node) {
			while (node && node.right !== null) { //{5}
				node = node.right;
			}
			return node.key;
		}
		return null;
	};
	this.max = function() {
		return maxNode(root);
	};

	var searchNode = function(node, key) {
		if (node === null) { //{2}
			return false;
		}
		if (key < node.key) { //{3}
			return searchNode(node.left, key); //{4}
		} else if (key > node.key) { //{5}
			return searchNode(node.right, key); //{6}
		} else {
			return true; //{7}
		}
	};
	this.search = function(key) {
		return searchNode(root, key); //{1}
	};
	var removeNode = function(node, key) {
		if (node === null) { //{2}
			return null;
		}
		if (key < node.key) { //{3}
			node.left = removeNode(node.left, key); //{4}
			return node; //{5}
		} else if (key > node.key) { //{6}
			node.right = removeNode(node.right, key); //{7}
			return node; //{8}
		} else { //键等于node.key
			//第一种情况——一个叶节点
			if (node.left === null && node.right === null) { //{9}
				node = null; //{10}
				return node; //{11}
			}
			//第二种情况——一个只有一个子节点的节点
			if (node.left === null) { //{12}
				node = node.right; //{13}
				return node; //{14}
			} else if (node.right === null) { //{15}
				node = node.left; //{16}
				return node; //{17}
			}
			//第三种情况——一个有两个子节点的节点
			var aux = findMinNode(node.right); //{18}
			node.key = aux.key; //{19}
			node.right = removeNode(node.right, aux.key); //{20}
			return node; //{21}
		}
	};
	this.remove = function(key) {
		root = removeNode(root, key); //{1}
	};
}