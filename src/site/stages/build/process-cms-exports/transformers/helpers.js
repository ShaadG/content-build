const assert = require('assert');
const { unescape } = require('lodash');

/**
 * Takes a string with escaped unicode code points and replaces them
 * with the unicode characters. E.g. '\u2014' -> '—'
 *
 * @param {String} string
 * @return {String}
 */
function unescapeUnicode(string) {
  assert(typeof string === 'string');
  return string.replace(/\\u(\d{2,4})/g, (wholeMatch, codePoint) =>
    String.fromCharCode(`0x${codePoint}`),
  );
}

/**
 * A very specific helper function that expects to receive an
 * array with one item which is an object with a single `value` property
 *
 */
function getDrupalValue(arr) {
  if (arr.length === 0) return null;
  if (arr.length === 1) return unescapeUnicode(arr[0].value);
  // eslint-disable-next-line no-console
  console.warn(`Unexpected argument: ${arr.toString()}`);
  return null;
}

function createMetaTag(type, key, value) {
  return {
    type,
    key,
    value,
  };
}

module.exports = {
  getDrupalValue,
  createMetaTag,
  unescapeUnicode,

  /**
   * Takes a string and applies the following:
   * - Transforms escaped unicode to characters
   * - Unescapes HTML entities
   *
   * @param {string}
   * @return {string}
   */
  getWysiwygString(value) {
    return unescape(value);
  },
};
