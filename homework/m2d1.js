

/**
 * filter: Based a a test Function, filter is designed to collect values from a 
 * collection, Array or Object, and return those filtered values.
 * 
 * @param {Array or Object} collection The collection from which to filter.
 * @param {Function} test The Function that tests whether values should be 
 * inlcuded in the returned output. The test Function MUST return a Boolean.
 * @return {Array} An Array of the filtered values.
 *
 *filter out all customers who are over 30.
 */
 
function filter(collection, test) {
    var filtered = [];
    each(collection, function(value, position, collection) {
        filtered.push(test(value, position, collection));
    });
    return filtered;
}
module.exports.filter = filter;