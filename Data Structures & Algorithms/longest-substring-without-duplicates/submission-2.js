class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
      if (s.length === 0) return 0;
      const hash = new Array(150).fill(0);
      let l = 0;
      let r = 1;
      let maxSubstring = 1;

      hash[s.charCodeAt(l)] = 1;

      while (r < s.length) {
        if (hash[s.charCodeAt(r)] === 1) {
          hash[s.charCodeAt(l)] = 0;
          l++;
        } else {
          hash[s.charCodeAt(r)] = 1;
          r++;
        }
        maxSubstring = Math.max(maxSubstring, r - l);
      }

      return maxSubstring;
    }
}
