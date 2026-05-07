class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
          if (nums.length === 0) return 0;

  const set = new Set(nums);
  let longest = 0;

  for (const n of set) {
    if (!set.has(n - 1)) {
      let current = n;
      let length = 1;

      while (set.has(current + 1)) {
        current++;
        length++;
      }

      if (length > longest) longest = length;
    }
  }

  return longest;
    }
}
