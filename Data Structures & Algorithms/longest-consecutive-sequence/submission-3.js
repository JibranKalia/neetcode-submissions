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
     * make a set
     * 
     * loop thru set.
     * When beginnning of a sequence if (!Set.has(num - 1))
     * continue tilll sequence end while (set.has(num + length))
     * 
     *maxSeq = [curSeq, maxSeq].max
     */

    if (nums.length === 0) return 0;

    const set = new Set(nums);

    let maxSeq = 1;

    for (const num of set) {
      if (!set.has(num - 1)) {
        let length = 1;
        while (set.has(num + length)) {
          length += 1;
          maxSeq = Math.max(length, maxSeq);
        }
      }
    }

    return maxSeq;
  }
}
