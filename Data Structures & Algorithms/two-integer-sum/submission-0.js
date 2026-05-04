class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
        for(let i=0; i<nums.length;i++){
            const val = target - nums[i];
            if(map.has(val)) return [i, map.get(val)];
            map.set(nums[i], i);
        }
        return []
    }
}
