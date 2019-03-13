You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.

[解題構想]<br>
此題主要是對兩個串列進行加總 -> 進位 <br>
所以使用while來判斷串列進行時的狀況來進行運算加總 並回傳結果給函式 <br>

[與其他人的solution比較狀況] <br>
Your runtime beats 70.83 % of javascript submissions<br>
Your memory usage beats 61.93 % of javascript submissions.

