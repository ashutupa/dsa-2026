/**
 * Given an array heights where each element represents the height of a vertical line,
 * pick two lines to form a container and return the maximum area the container can hold.
 *
 * Area = width × height, where height is the minimum of the two walls.
 *
 * @param {number[]} heights
 * @return {number}
 */
function maxArea(heights) {
  let left = 0;
  let right = heights.length - 1;
  let maxArea = 0;

  while (left < right) {
    const width = right - left;
    const height = Math.min(heights[left], heights[right]);
    const area = width * height;
    maxArea = Math.max(maxArea, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
}

// Example usage:
console.log(maxArea([3, 4, 1, 2, 2, 4, 1, 3, 2])); // 21
console.log(maxArea([1, 2, 1])); // 2
