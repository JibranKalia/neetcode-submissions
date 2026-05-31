class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   * const nonAlphanumericRegex = /[^a-zA-Z0-9]/;

   */
  isPalindrome(s) {
    const string = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    console.log(string);

    let right = string.length - 1;
    let left = 0;

    while (left <= right) {
      if (string.charAt(right) !== string.charAt(left)) {
        console.log(string.charAt(left), left);
        console.log(string.charAt(right), right);
        return false;
      }

      left++;
      right--;
    }

    return true;
  }
}



const s = "tab a cat"

const res = new Solution().isPalindrome(s);

console.log(res);

