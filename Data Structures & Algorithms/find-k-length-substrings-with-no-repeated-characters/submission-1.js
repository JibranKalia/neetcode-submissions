class Solution {
  /**
   * @param {string} s
   * @param {number} k
   * @return {number}
   */
  numKLenSubstrNoRepeats(s, k) {
    if (s.length < k) return 0;

    const map = new Map();

    let totalNoRepeated = 0;

    for (let i = 0; i < k; i++) {
      map.set(s[i], (map.get(s[i]) ?? 0) + 1);
    }

    if (map.size === k) {
      totalNoRepeated += 1;
    }

    for (let i = k; i < s.length; i++) {
      map.set(s[i], (map.get(s[i]) ?? 0) + 1);
      map.set(s[i - k], map.get(s[i - k]) - 1);
      if (map.get(s[i - k]) === 0) {
        map.delete(s[i - k]);
      }
      if (map.size === k) {
        totalNoRepeated += 1;
      }
    }

    return totalNoRepeated;
  }
}
