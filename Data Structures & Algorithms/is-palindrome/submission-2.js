class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        if (!s) return false;
        const isAlphaNumeric = (ch) => /^[a-zA-Z0-9]$/.test(ch);
        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            while (left < right && !isAlphaNumeric(s[left])) {
                left++;
            }
            while (!isAlphaNumeric(s[right]) && left < right) {
                right--;
            }

            if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
            left++;
            right--;
        }
        return true;
    }
}
