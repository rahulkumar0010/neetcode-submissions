class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const arr = [...new Set(nums)];
        return arr.length !== nums.length
    }
}
