class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    const freq = new Map();
    for (const n of nums) {
      freq.set(n, (freq.get(n) ?? 0) + 1)
    }

    const buckets = [];

    for (const [n, f] of freq) {
      if (buckets[f] === undefined) {
        buckets[f] = [];
      }
      buckets[f].push(parseInt(n));
    }

    let res = [];

    for (let j = buckets.length - 1; j >= 0; j--) {
      if (buckets[j]) {
        res.push(...buckets[j]);
      }
    }

    return res.slice(0, k);
  }
}
