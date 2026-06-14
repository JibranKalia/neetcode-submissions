class DequeMain {
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
    return this.arr[this.arr.length - 1];
  }

  pushIn(val) {
    while (this.left < this.arr.length && this.peekRight() < val) {
      this.arr.pop();
    }
    this.arr.push(val);
  }
}

class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  maxSlidingWindow(nums, k) {
    const res = [];
    const q = new DequeMain();
    q.pushIn(nums[0]);

    // build inital window
    for (let i = 1; i < k; i++) {
      q.pushIn(nums[i]);
    }

    // push for inital window
    res.push(q.peekLeft());

    for (let i = k; i < nums.length; i++) {
      const windowLeft = i - k;
      if (q.peekLeft() === nums[windowLeft]) {
        q.popLeft();
      }

      q.pushIn(nums[i]);
      res.push(q.peekLeft());
    }

    return res;
  }
}
