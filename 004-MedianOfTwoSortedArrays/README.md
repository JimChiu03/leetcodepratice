There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume nums1 and nums2 cannot be both empty.

Example 1:
nums1 = [1, 3]
nums2 = [2]

The median is 2.0

Example 2:

nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5

[解題構想] <br>
讀出nums1與nums2至新創的空矩陣 <br>
並對其排序, 之後再依照數列總數為奇數或是偶數的狀況做運算 <br><br>

[與其他人solution比較]<br>
Your runtime beats 63.83 % of javascript submissions.<br>
Your memory usage beats 39.51 % of javascript submissions.
