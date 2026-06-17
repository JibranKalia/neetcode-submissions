class Solution {
  /**
   * @param {string} s
   * @param {number} k
   * @return {number}
   */
  characterReplacement(s, k) {
    if (s.length <= k) {
      return s.length;
    }

    let maxStr = 0;

    const map = new Array(26).fill(0);

    const idx = (i) => {
      return s.charCodeAt(i) - "A".charCodeAt(0);
    };
    const currentMax = () => {
      return Math.max(...map);
    };

    // load initial
    map[idx(0)]++;
    let l = 0;

    for (let r = 1; r < s.length; r++) {
      map[idx(r)]++;

      while ((r - l + 1) > (currentMax() + k)) {
        map[idx(l)]--;
        l++;
      }

      maxStr = Math.max(maxStr, r - l + 1);
    }

    return maxStr;

    /**
     * invariant
     *  - letter of most freq letter + k = length of substring
     *  - keep max substring lenght
     *
     *  - if moving right will break above. keep moving left
     *
     *  map = new Array(26).fill(0)
     *  currentMax = loop thru array and get the math Math.max(...map);
     *
     * for (let r = 1; r < str.len; r++) {
     *    map[r]++;
     *
     *    while ((r - l + 1) > currentMax() + k) {
     *      map[l]--;
     *      l++
     *    }
     *
     *    maxSubstring(maxSubstring, r - l + 1)
     */
  }
}
