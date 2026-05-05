class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();

        for (let i = 0; i < nums.length; i++) {
            const val = nums[i];
            const complement = target - val;
            if (map.has(complement)) {
                return [map.get(complement), i];
            } else {
                map.set(nums[i], i);
            }
        }

        return false;
    }
}
