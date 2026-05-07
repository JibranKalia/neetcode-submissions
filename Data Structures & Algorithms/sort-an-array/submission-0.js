class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        const len = nums.length;

        /**
         * Selection Sort - Decrease and conquer
         * 
         * Map thru whole array and find min and move. And repeate
         */

        function selectionSort(startIndex) {
            if (startIndex >= len) return;

            let minIndex = startIndex;
            let minValue = nums[startIndex];
            for (let i = startIndex + 1; i < len; i++) {
                if (nums[i] < minValue) {
                    minValue = nums[i];
                    minIndex = i;
                }
            }

            nums[minIndex] = nums[startIndex];
            nums[startIndex] = minValue;

            selectionSort(startIndex + 1);

        }

        selectionSort(0);

        return nums;
    }
}
