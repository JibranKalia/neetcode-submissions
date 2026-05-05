class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const complement = {};

        for (let i = 0; i < nums.length; i++) {
            const val = nums[i];
            const c = target - val;
            complement[c] = i;
        }

        for (let j = 0; j < nums.length; j++) {
            const val = nums[j];
            if (complement[val] != null && complement[val] != j) {
                return [complement[val], j].sort((a, b) => a - b);
            }
        }

        return false;
    }
}
