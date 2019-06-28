Given an array nums of n integers and an integer target, are there elements a, b, c, <br> 
and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.<br> 

Note:<br> 

The solution set must not contain duplicate quadruplets.<br> 

Example:<br> 

Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.<br> 

A solution set is:<br> 
[<br> 
  [-1,  0, 0, 1],<br> 
  [-2, -1, 1, 2],<br> 
  [-2,  0, 0, 2]<br> 
]<br> 




解題構想<br>

1. 把符合題目target的組合用for迴圈掃出來排序並記錄下來<br> 
2. 使用額外的函式對重複的部分做去除（因為格式是陣列, JS無法直接比對陣列, 須轉為string）<br>

跑分<br>
Runtime: 648 ms, faster than 7.98% of JavaScript online submissions for 4Sum. <br>

後續改善方式: <br>
目前的做法太慢, 改善方式會是針對函式本身的邏輯重新coding, 使用逼進法的同時進行篩選　才能達到更好的效率 <br>
