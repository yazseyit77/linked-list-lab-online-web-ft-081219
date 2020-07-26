function getName(node) {
  return Object.values(node)[0];
}

function headNode(linkedList, collection) {
  return collection[linkedList];
}

function next(head, collection) {
  return collection[head.next];
}

function nodeAt(index,linkedList, collection) {
  let currentNode = headNode(linkedList, collection);

  for (let i=0; i < index ; i++) {
    currentNode = next(currentNode, collection);
  }
  return currentNode;
}

function addressAt(index, linkedList, collection){
  const currentNode = nodeAt(index, linkedList, collection)
}

function findKeyValue(collection, value){
  return Object.keys(collection).find(key => collection[key] === value)
}
