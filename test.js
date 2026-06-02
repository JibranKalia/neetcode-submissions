class Solution {
  /**
   * @param {number[]} height
   * @return {number}
   */
  trap(height) {
    const h = height;
    const n = h.length;

    const maxR = Array(n).fill(0);
    const maxL = Array(n).fill(0);

    maxL[0] = h[0];
    maxR[n - 1] = h[n - 1];

    for (let i = 1; i < n; i++) {
      maxL[i] = Math.max(maxL[i - 1], h[i]);
    }

    for (let j = n - 2; j > - 0; j--) {
      maxR[j] = Math.max(h[j], maxR[j + 1]);
    }

    function volume(i) {
      const minH = Math.min(maxR[i], maxL[i])
      if (minH > 0) {
        return minH - h[i]
      }
      return 0;
    }

    let maxVol = 0;

    for (let i = 0; i < n; i++) {
      const vol = volume(i)
      maxVol += vol;
    }

    return maxVol
  }
}



const height = [4, 2, 0, 3, 2, 5]



const res = new Solution().trap(height)

console.log(res);

