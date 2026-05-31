class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
      let left = 0;
      let right = numbers.length - 1;

      while (left < right) {
        const sum = numbers[left] + numbers[right];

        if (sum === target) {
          return [left + 1, right + 1];
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }


    /**
     * target = 13
     * 
     * [1, 2, 4, 8, 10, 13, 15]
     */
}
