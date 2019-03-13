Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9, return [0, 1].

[解題構想] 按照原題結構 提供一個數字 對一組array進行確認 解題構想是使用兩組變數(i,j)進行兩層for迴圈運算做暴力破解 並依照結果進行回傳函式 中間要注意的點是兩組變數在for迴圈運算時會有重複的狀況 所以須對重複的狀況bypass

[跟其他解題方式比較]
Your runtime beats 37.07 % of javascript submissions.
Your memory usage beats 47.75 % of javascript submissions.
