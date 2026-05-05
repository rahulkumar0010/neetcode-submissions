class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = {};

        for (let n of nums) {
            count[n] = (count[n] || 0) + 1;
        }

        return Object.entries(count)
            .sort((a, b) => b[1] - a[1])
            .slice(0, k)
            .map((entry) => Number(entry[0]));
    }
}
