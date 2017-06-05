var AL=require('./ArrayList.js');

var ag=new AL.ArrayList();

ag.insert(3);
ag.insert(6);
ag.insert(1);
ag.insert(4);

ag.insertionSort()
console.log(ag.toString());

