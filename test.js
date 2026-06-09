class Solution {

  /**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
  maxSatisfied(customers, grumpy, minutes) {
    let baseSum = 0;
    let gain = 0;
    const k = minutes;

    for (let i = 0; i < customers.length; i++) {
      if (grumpy[i] === 0) {
        baseSum += customers[i]
      }
    }

    for (let i = 0; i < k; i++) {
      if (grumpy[i] === 1) {
        gain += customers[i];
      }
    }

    let maxGain = Math.max(0, gain);

    for (let i = k; i < customers.length; i++) {
      if (grumpy[i] === 1) {
        gain += customers[i];
      }
      if (grumpy[i - k] === 1) {
        gain -= customers[i - k];
      }

      maxGain = Math.max(maxGain, gain);
    }

    return baseSum + maxGain;
  };
}

const customers = [1, 0, 1, 2, 1, 1, 7, 5];
const grumpy = [0, 1, 0, 1, 0, 1, 0, 1];
const minutes = 3;

// const customers = [10, 1, 7];
//
// const grumpy = [0, 0, 0];
// const minutes = 2

const res = new Solution().maxSatisfied(customers, grumpy, minutes)

console.log('res', res);
