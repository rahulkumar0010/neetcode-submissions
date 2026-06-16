class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        if (!s) return false;
        const isAlphaNumeric = (ch) => {
            const code = ch.charCodeAt(0);

            return (
                (code >= 48 && code <= 57) || // 0-9
                (code >= 65 && code <= 90) || // A-Z
                (code >= 97 && code <= 122) // a-z
            );
        };
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
