class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  lengthOfLongestSubstring(s) {
    const hash = new Array(150).fill(0);
    let l = 0;
    let r = 1;
    let maxSubstring = 1;

    hash[s.charCodeAt(l)] = 1;

    while (r < s.length) {
      console.log(l, r, s.charAt(l), s.charAt(r), maxSubstring);
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





const s = "au"



const res = new Solution().lengthOfLongestSubstring(s)

console.log(res);

