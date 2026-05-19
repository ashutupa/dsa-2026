# Problem: 3-Sum

## Difficulty: Medium

## DESCRIPTION (inspired by Leetcode.com)

Given an input integer array `nums`, write a function to find all unique triplets `[nums[i], nums[j], nums[k]]` such that `i`, `j`, and `k` are distinct indices, and the sum of `nums[i]`, `nums[j]`, and `nums[k]` equals zero. Ensure that the resulting list does not contain any duplicate triplets.

### Example:

```
nums = [-1,0,1,2,-1,-1]
Output: [[-1,-1,2],[-1,0,1]]
```

Explanation: Both `nums[0], nums[1], nums[2]` and `nums[1], nums[2], nums[4]` include `[-1, 0, 1]` and sum to `0`. `nums[0], nums[3], nums[4]` (`[-1,-1,2]`) also sums to `0`.

Since we are looking for unique triplets, we can ignore the duplicate `[-1, 0, 1]` triplet and return `[[−1, −1, 2], [−1, 0, 1]]`.

The order of the triplets and the order of the elements within the triplets do not matter.
