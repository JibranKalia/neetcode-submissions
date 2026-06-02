class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  maxArea(heights) {
    const h = heights;

    function volume(start, end) {
      const width = end - start;
      const height = Math.min(h[end], h[start]);
      return width * height;
    }

    let max = -Infinity;
    let l = 0;
    let r = h.length - 1;

    while (l < r) {
      max = Math.max(max, volume(l, r));
      if (h[l] < h[r]) {
        l++;
      } else {
        r--;
      }
    }

    return max;
  }
  /**
   * volume(start, end)
   *  width = end - start
   *  height = min(h[end], h[start])
   *
   *  return width * height
   *
   *
   * Start with the widest container
   *
   * On every iteration compare l - r and if move inside on the smaller one
   *
   * while (l < r)
   *  if h[l] < h[r]
   *    l++;
   *  else
   *    r--;
   *
   *  maxVolume = volume(l, r);
   *
   */
}
