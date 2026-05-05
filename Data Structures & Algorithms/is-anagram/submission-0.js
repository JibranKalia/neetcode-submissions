class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sArray = s.split('').sort();
        const tArray = t.split('').sort();
        if (sArray.length != tArray.length) return false;

        for (let i = 0; i < sArray.length; i++) {
            if (sArray[i] != tArray[i]) {
                return false;
            }
        }

        return true;
    }
}
