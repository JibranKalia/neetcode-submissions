class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  threeSum(nums) {
    const s = new Set();
    const n = nums.sort((a, b) => a - b);
    const len = n.length;


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
          const arr = JSON.stringify([-target, n[left], n[right]]);
          s.add(arr);
          left++;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }


    for (let i = 1; i < len - 1; i++) {
      twoSum(i, -(n[i - 1]));
    }

    const ret = [];

    for (let val of s) {
      ret.push(JSON.parse(val));
    }

    return ret;
  }
}
