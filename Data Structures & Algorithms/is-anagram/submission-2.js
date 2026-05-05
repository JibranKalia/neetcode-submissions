class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        const arr = new Array(26).fill(0);
        const A = 'a'.charCodeAt(0)

        for (let i = 0; i < s.length; i++) {
            arr[s.charCodeAt(i) - A]++;
            arr[t.charCodeAt(i) - A]--;
        }

        return arr.every((i) => i === 0);
    }
}
