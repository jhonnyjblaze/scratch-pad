'use strict';

/*
 * For every higher order function, understand WHAT PROCESS is being
 * encapsulated AND how the Function passed to the higher order function
 * MUST BE implemented/designed
 */

/**
 * each: Designed to loop over a collection, Array or Object, and applies the action
 * Function to each value in the collection.
 *
 * @param {Array or Object} collection The collection over which to iterate.
 * @param {Function} action The Function to be applied to each value in the
 * collection
 */

//client code may want to work with these values and may not have access if not given here

function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each; // refrences the function each says go ahead and express each as this function

/**
 * map: Takes a collection, and applies a tranformation Function to each value
 * in the collection, and returns an Array of the tranformations.
 *
 * @param {Array or Object} collection The collection from which to map.
 * @param {Function} transform The transformation Function, it MUST return a
 * value representing a transformation of the collection value.
 * @return {Array} An Array of the mapped or transformed values.
 */
function map(collection, transform) {
    var mapped = [];
    each(collection, function(value, position, collection) {
        mapped.push(transform(value, position, collection));
    });
    return mapped;
}
module.exports.map = map;

function filter(collection, test) {
   var filtered = [];

   for (var i = 0; i < collection.length; i++) {
      if (test(collection[i])) {
          filtered.push(collection[i]);
      }
   }

   return filtered;
}
module.exports.filter = filter;


// accept a collection and a test function
// for each item in the collection, apply the test function to that item
// if the test for a given item returns true (or thruthy) add that item to a new collection
// when all items have been tested, return the collection of items that pass the test
