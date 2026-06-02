class Solution {
  /**
   * @param {number[]} height
   * @return {number}
   */
  trap(height) {
    const h = height;
    const lastIndex = h.length - 1;

    const maxR = Array(h.length).fill(0);
    const maxL = Array(h.length).fill(0);

    maxL[0] = h[0];
    maxR[lastIndex] = h[lastIndex];

    for (let i = 1; i < h.length; i++) {
      maxL[i] = Math.max(maxL[i - 1], h[i]);
    }

    for (let j = lastIndex - 1; j > - 0; j--) {
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

    for (let i = 0; i < h.length; i++) {
      const vol = volume(i)
      maxVol += vol;
    }

    return maxVol
  }
}
