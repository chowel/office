var AL=require('./ArrayList.js');

var BStree=require('./BinarySearchTree.js');

var tree=new BStree.BinarySearchTree();

tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);

var a=[];
function add(treeMin){
	a.push(treeMin);
}

tree.inOrderTraverse(add);

console.log(a);
console.log(tree.max());
// var ag=new AL.ArrayList();

// ag.insert(5);
// ag.insert(1);
// ag.insert(2);
// ag.insert(6);

// ag.selectionSort()
// console.log(ag.toString());

