const { flattenTreeToArray } = require('./dom-util');
const _ = require('underscore');

const getElementById = function(root, id) {
  const $ = flattenTreeToArray(root);
  const ids = _.pluck($, 'id');
  return $[ids.indexOf(id)];
};

const getElementsByClassName = function(root, className) {
  const $ = flattenTreeToArray(root);
  return $.filter(item => _.contains(item.classList, className));
};

const getElementsByTagName = function(root, tagName) {
  const $ = flattenTreeToArray(root);
  return $.filter(item => item.tagName === tagName);
};

module.exports = {
  getElementById: getElementById,
  getElementsByClassName: getElementsByClassName,
  getElementsByTagName: getElementsByTagName
};
