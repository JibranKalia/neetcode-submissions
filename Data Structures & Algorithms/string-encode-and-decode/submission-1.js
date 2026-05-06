class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    strs.unshift(strs.length);
    return strs.join("!m!");
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    const res = str.split("!m!");
    const len = res.shift();
    if (len === 0) {
      return "";
    }

    return res;
  }
}
