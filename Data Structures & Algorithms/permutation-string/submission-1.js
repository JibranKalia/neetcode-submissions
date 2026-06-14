class Solution {
  /**
   * @param {string} s1
   * @param {string} s2
   * @return {boolean}
   */
  checkInclusion(s1, s2) {
    if (s1.length > s2.length) return false;

    console.log(s2);
    const windowFreq = new Array(26).fill(0);
    const wordFreq = new Array(26).fill(0);
    const k = s1.length;

    const idx = (i) => {
      return s2.charCodeAt(i) - "a".charCodeAt(0);
    };

    const match = () => {
      for (let i = 0; i < 26; i++) {
        if (windowFreq[i] !== wordFreq[i]) {
          return false;
        }
      }
      return true;
    };

    for (let i = 0; i < k; i++) {
      wordFreq[s1.charCodeAt(i) - "a".charCodeAt(0)]++;
    }

    for (let i = 0; i < k; i++) {
      windowFreq[idx(i)]++;
    }

    if (match()) return true;

    for (let r = k; r < s2.length; r++) {
      windowFreq[idx(r - k)]--;
      windowFreq[idx(r)]++;
      if (match()) return true;
    }

    return false;
  }
}
