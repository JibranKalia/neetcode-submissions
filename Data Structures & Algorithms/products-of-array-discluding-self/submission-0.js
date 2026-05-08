class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  productExceptSelf(nums) {
    const lastIndex = nums.length - 1;

    const leftArray = new Array(nums.length).fill(undefined);
    const rightArray = new Array(nums.length).fill(undefined);
    const res = new Array(nums.length).fill(undefined);

    leftArray[1] = nums[0];
    rightArray[lastIndex - 1] = nums[lastIndex];
    for (let i = 2; i <= lastIndex; i++) {
      leftArray[i] = leftArray[i - 1] * nums[i - 1];
    }

    for (let j = lastIndex - 2; j >= 0; j--) {
      rightArray[j] = rightArray[j + 1] * nums[j + 1];
    }

    res[0] = rightArray[0];
    res[lastIndex] = leftArray[lastIndex];

    for (let i = 1; i < lastIndex; i++) {
      res[i] = leftArray[i] * rightArray[i];
    }

    return res;
  }
  /**
   * 1, 2, 4, 6
   *
   * 48, 24, 12, 8
   *
   *
   * LEFT
   * -, 1,  2, 8
   *
   * RIGHT
   * 48, 24, 6, -
   *
   *
   */
}
