class Deque {
  constructor() {
    this.arr = [];
    this.left = 0;
  }

  popLeft() {
    this.left++;
  }

  peekLeft() {
    return this.arr[this.left];
  }

  peekRight() {
    return this.arr[this.arr.length - 1]
  }

  pushIn(val) {
    while (this.left < this.arr.length && this.peekRight() < val) {
      this.arr.pop();
    }
    this.arr.push(val);
    console.log('pushIn', val, this.left, this.arr);
  }

}

class Solution {
  peekLeft
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  maxSlidingWindow(nums, k) {
    const res = [];
    const q = new Deque();
    q.pushIn(nums[0]);

    // build inital window
    for (let i = 1; i < k; i++) {
      q.pushIn(nums[i])
    }

    console.log(q.peekLeft());

    // push for inital window
    res.push(q.peekLeft());

    for (let i = k; i < nums.length; i++) {
      const windowLeft = i - k;
      if (q.peekLeft() === nums[windowLeft]) {
        q.popLeft();
      }

      q.pushIn(nums[i]);

      console.log("peek", q.peekLeft());

      res.push(q.peekLeft());
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
// const nums = [1, 3, -1, -3, 5, 3, 6, 7]
// const k = 3

// const nums = [1, 2, 1, 0, 4, 2, 6];
// const k = 3;

const nums = [1, 2, 1, 0, 4, 2, 6]
const k = 3

const res = new Solution().maxSlidingWindow(nums, k);
console.log('res', res);
