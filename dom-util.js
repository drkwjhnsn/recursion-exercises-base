
const visitAllNodes = function(node, callback) {
  node.childNodes.forEach(child => {
    visitAllNodes(child, callback);
  });
  callback(node);
};

const flattenTreeToArray = function(node) {
  const ary = [];
  visitAllNodes(node, node => ary.push(node));
  return ary;
};

module.exports = {
  visitAllNodes: visitAllNodes,
  flattenTreeToArray: flattenTreeToArray
};
