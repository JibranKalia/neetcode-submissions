class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let res = [];
    for (let s of strs) {
      res.push(s.length, "#", s);
    }
    return res.join("");
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    const res = [];
    let i = 0;

    while (i < str.length) {
      let j = str.indexOf("#", i);
      const len = parseInt(str.slice(i, j));
      // ignore the #
      j += 1;

      res.push(str.slice(j, j + len));
      i = j + len;
    }

    return res;
  }
}
