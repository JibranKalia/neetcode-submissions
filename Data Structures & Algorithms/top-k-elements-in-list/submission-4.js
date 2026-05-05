class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    const freq = {};
    for (let n of nums) {
      if (!freq[n]) {
        freq[n] = 0;
      }

      freq[n] += 1;
    }

    const arr = new Array(nums.length);

    for (const [n, f] of Object.entries(freq)) {
      if (arr[f] === undefined) {
        arr[f] = [];
      }
      arr[f].push(parseInt(n));
    }

    let res = [];

    for (let j = arr.length - 1; j >= 0; j--) {
      if (arr[j]) {
        res.push(...arr[j]);
      }
    }

    return res.slice(0, k);
  }
}
