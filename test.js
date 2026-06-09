class Solution {
  /**
   * @param {string} s
   * @param {number} k
   * @return {number}
   */
  characterReplacement(s, k) {
    let l = 0;
    let r = 0;
    let localK = k;
    let maxLen = 0;

    while (l < s.length && r < s.length) {
      maxLen = Math.max(r - l + 1, maxLen);
      console.log(l, r, maxLen);

      if (s.charAt(l) === s.charAt(r)) {
        r++;
      } else if (localK > 0) {
        maxLen = Math.max(r - l + 1, maxLen);
        localK--;
        r++;
      } else {
        maxLen = Math.max(r - l, maxLen);
        localK = k;
        l++;
        r = l;
      }
    }
    return maxLen;
  }
}

/**
 *
 * start l / r
 *
 * keep moving r when
 *
 * if (l == r)
 *  ++
 * if (l != r)
 *  localK--
 * else
 *  window size = max
 *  localL
 *  while (localL == l)
 *    l++
 *    r = l
 *
 *
 * XYYX
 * XXXX - 4
 *
 * AAABABB
 *
 * AAABABB
 *
 *
 */



// const k = 2
// const s = "AAAA"
//
const s = "ABBB"
const k = 2

// const s="XYYX"
// const k=2
//

const res = new Solution().characterReplacement(s, k)

console.log('res', res);

