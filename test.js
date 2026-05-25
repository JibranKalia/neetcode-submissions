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


const nums1 = [2, 20, 4, 10, 3, 4, 5]

const res1 = new Solution().longestConsecutive(nums1);
console.log(res1);

const nums2 = [0, 3, 2, 5, 4, 6, 1, 1];

const res2 = new Solution().longestConsecutive(nums2);
console.log(res2);


