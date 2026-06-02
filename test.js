class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  threeSum(nums) {
    const n = nums.sort((a, b) => a - b);
    const len = n.length;
    const ret = [];

    /**
     * [-4, -1, -1, 0, 1, 2, 2]
     * 
     * - target and pass it to two sum. if not empty array add to res
     * - duplicates?
     *    Sorting will prevent
     */

    function twoSum(l, target) {
      let left = l;
      let right = len - 1;

      while (left < right) {
        const sum = n[left] + n[right];
        if (sum === target) {
          ret.push([-target, n[left], n[right]]);
          left++;
          right--;
          while (left < right && n[left] === n[left - 1]) left++;
          while (left < right && n[right] === n[right + 1]) right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }

    for (let i = 1; i < len - 1; i++) {
      if (i > 1 && n[i - 2] === n[i - 1]) continue;
      twoSum(i, -(n[i - 1]));
    }

    return ret;
  }
}

const n = [0, 0, 0, 0];
const res = new Solution().threeSum(n)

console.log(res);

