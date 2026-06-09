class Solution {

  /**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
  maxSatisfied(customers, grumpy, minutes) {
    /**
    k = minutes;
  
    1, 0, 1, 2, 1, 1, 7, 5
    0, 1, 0, 1, 0, 1, 0, 1
  
    0, 0, 0, 2, 0, 1, 0, 5 = 8 (baseSatisified)
  
    boostedSatisifiedSum = sum of customers(0, k - 1) (2)
    baseSatisifiedSum = sum of baseSatisifed(0, k - 1)(2)
    maxAdditionalSatisfied = Math.max(0, initialWindow - sumOfBaseSatifisfied) 
  
    for (let i = k, end)
      boosted = boosted + customer[i] - customer[i - k]
      base = base + baseStatisfied[i] - baseSatisifed[i - k]
      maxAdditionalSatisfied = Math.max(0, boosted - base) 
  
  
     */

    const baseSatisified = []
    for (let i = 0; i < customers.length; i++) {
      if (grumpy[i] === 1) {
        baseSatisified.push(customers[i])
      } else {
        baseSatisified.push(0);
      }
    }

    console.log(baseSatisified);


    const k = minutes;

    let boostedSum = customers.slice(0, k).reduce((arr, curr) => arr + curr, 0);
    let baseSum = baseSatisified.slice(0, k).reduce((arr, curr) => arr + curr, 0);
    let maxAdditional = Math.max(0, boostedSum - baseSum);

    console.log('max', maxAdditional);

    for (let i = k; i < customers.length; i++) {
      boostedSum = boostedSum + customers[i] - customers[i - k];
      baseSum = baseSum + baseSatisified[i] - baseSatisified[i - k];
      maxAdditional = Math.max(maxAdditional, boostedSum - baseSum);
      console.log('max', maxAdditional);
    }

    return baseSatisified.reduce((arr, curr) => arr + curr, 0) + maxAdditional;
  };
}

const customers = [10, 1, 7];

const grumpy = [0, 0, 0];
const minutes = 2

const res = new Solution().maxSatisfied(customers, grumpy, minutes)

console.log('res', res);

