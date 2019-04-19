Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.


解題構想: <br>
先找符合數學邏輯的方式解體, 而後發現在跑的過程中會timeout <br>
更改解法, 所有比較的部分都使用Math替代 解答完成 <br>

模擬結果: <br>
Runtime: 64 ms, faster than 81.19% of JavaScript online submissions for Container With Most Water.
