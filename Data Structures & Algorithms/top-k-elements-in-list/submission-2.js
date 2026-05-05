class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
      topKFrequent(nums, k) {
    const freq = {}

    for (let n of nums) {
      if (!freq[n]) {
        freq[n] = 0;
      }
      freq[n] += 1;
    }

    const arr = []

    for (let [n, f] of Object.entries(freq)) {
      arr.push([f, n]);
    }

    arr.sort((a, b) => b[0] - a[0]);

    return arr.splice(0, k).map((a) => a[1]);
  }

}
