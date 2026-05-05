class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
        map.set(nums[0], 0);

        for (let i = 1; i < nums.length; i++) {
            const val = nums[i];
            const complement = target - val;
            if (map.has(complement)) {
                return [map.get(complement), i].sort((a, b) => a - b);
            } else {
                map.set(nums[i], i);
            }
        }

        return false;
    }
}
