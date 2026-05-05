class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hash = {}

        for (let i = 0; i < strs.length; i++) {
            const str = strs[i];
            const sortedStr = str.split('').sort();

            if (hash[sortedStr] !== undefined) {
                hash[sortedStr].push(str);
            } else {
                hash[sortedStr] = [str];
            }
        }

        return Object.values(hash);
    }
}
