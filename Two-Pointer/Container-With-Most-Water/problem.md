# Problem: Container With Most Water

## DESCRIPTION (inspired by Leetcode.com)

Given an array `heights` where each element represents the height of a vertical line, pick two lines to form a container. Return the maximum area (amount of water) the container can hold.

**What is area?** Width × height, where width is the distance between walls, and height is the shorter wall (water overflows at the shorter wall).

### Example 1:

```
heights = [3, 4, 1, 2, 2, 4, 1, 3, 2]
Output: 21
```

Explanation: walls at indices 0 and 7 (both height 3): width=7, height=3, area=21

Visual representation:

```
        4
    3   |       4
    |   |   |   |       |   3
3   |   |   |   |   |   |   |
|   |   1   2   2   |   1   |   2
```

### Example 2:

```
heights = [1, 2, 1]
Output: 2
```

Explanation: walls at indices 0 and 2: width=2, height=min(1,1)=1, area=2
