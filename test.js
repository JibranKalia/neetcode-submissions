class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  maxSlidingWindow(nums, k) {
    const res = [];
    const queue = new Array(nums.length).fill(null);
    //intial value
    queue[0] = 0;

    let left = 0;
    let right = 0;

    // build inital window
    for (let i = 1; i < k; i++) {
      while (left <= right && nums[queue[right]] < nums[i]) {
        right--;
      }
      right++;
      queue[right] = i;
    }

    // push for inital window
    res.push(nums[queue[left]]);

    for (let i = k; i < nums.length; i++) {
      const windowLeft = i - k + 1;
      while (left <= right && queue[left] < windowLeft) {
        left++;
      }
      while (left <= right && nums[queue[right]] < nums[i]) {
        right--;
      }
      right++;
      queue[right] = i;

      res.push(nums[queue[left]]);
    }

    return res;
  }

  /** 
  
  
    initially just add [0]
    then for check left if smaller then curr pop. Keep doing until hit bigger. Then push

    Do that until index k - 1
  
    then for i = k till end of nums

      check if left most idx in queue. if not remove.
      then check queue[right most]. If current if current bigger remove. Keep doing this.
      then insert current
      record queue[left]
  ;
  */
}

// const nums = [1, -1]
// const k = 1
const nums = [1, 3, -1, -3, 5, 3, 6, 7]
const k = 3

const res = new Solution().maxSlidingWindow(nums, k);
console.log('res', res);
