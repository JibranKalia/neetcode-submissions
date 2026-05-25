class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums) {
    /**
     * 2,
     * 20, 
     * 4, 
     * 10,
     * 3, 
     * 4, 
     * 5
     * 
     * minNumber = 2
     * maxNumber = 20
     * 
     * currSeq = 1
     * maxSeq = 0
     * 
     * minNumber + 1
     * isSeq curSeq +1 maxSeq = [curSeq, maxSeq].max
     * else curSeq = 1
     */

    if (nums.length === 0) return 0;

    let maxNumber = -Infinity;
    let minNumber = Infinity;

    const set = new Set();

    for (let i = 0; i < nums.length; i++) {
      const val = nums[i]
      maxNumber = Math.max(maxNumber, val);
      minNumber = Math.min(minNumber, val);
      set.add(val);
    }

    let currSeq = 1;
    let maxSeq = 1;

    for (let i = minNumber + 1; i <= maxNumber; i++) {
      if (!set.has(i) || !set.has(i - 1)) {
        currSeq = 1;
        continue;
      }

      currSeq += 1;
      maxSeq = Math.max(currSeq, maxSeq);
    }

    return maxSeq;
  }
}
