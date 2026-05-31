class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     * const nonAlphanumericRegex = /[^a-zA-Z0-9]/;

     */
    isPalindrome(s) {
      const string = s.toLowerCase().replace(/[^a-z0-9]/g, '');
      console.log(string);

      let left = 0;
      let right = string.length - 1;

      while (left <= right) {
        if (string.charAt(right) !== string.charAt(left)) {
          return false;
        }

        left++;
        right--;
      }

      return true;
    }
}
