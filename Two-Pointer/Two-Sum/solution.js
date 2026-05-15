/**
 * Given a sorted array of integers nums and a target value,
 * determine if there exists a pair of numbers that sum to the target.
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
function twoSum(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum == target) {
      return true;
    }

    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return false;
}

// Example usage:
console.log(twoSum([1, 3, 4, 6, 8, 10, 13], 13)); // true
console.log(twoSum([1, 3, 4, 6, 8, 10, 13], 6)); // false
