class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
      let minL = prices[0];
      let maxProfit = 0;

      for (let r = 1; r < prices.length; r++) {
        minL = Math.min(minL, prices[r - 1]);
        let profit = prices[r] - minL;
        maxProfit = Math.max(profit, maxProfit);
      }


      return maxProfit;
    }
}
