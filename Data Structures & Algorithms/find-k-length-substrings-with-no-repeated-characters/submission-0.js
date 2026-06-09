class Solution {
  /**
   * @param {string} s
   * @param {number} k
   * @return {number}
   */
  numKLenSubstrNoRepeats(s, k) {
    if (s.length < k) return 0;

    const set = new Array(26).fill(0);
    let totalNoRepeated = 0;

    function isValid() {
      return set.every((c) => c <= 1);
    }

    function idx(i) {
      return s.charCodeAt(i) - "a".charCodeAt(0);
    }

    for (let i = 0; i < k; i++) {
      set[idx(i)] += 1;
    }

    if (isValid()) {
      totalNoRepeated++;
    }

    for (let i = k; i < s.length; i++) {
      set[idx(i)] += 1;
      set[idx(i - k)] -= 1;
      if (isValid()) {
        totalNoRepeated++;
      }
    }

    return totalNoRepeated;
  }
}
