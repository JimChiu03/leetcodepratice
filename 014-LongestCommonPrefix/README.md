Write a function to find the longest common prefix string amongst an array of strings. <br>

If there is no common prefix, return an empty string "". <br>


解題構想: <br>
此題仍算是比較字串的題目 <br>
不過有一個前提是prefix為字首, 多了此限制以後, 題目裡的array內容如果符合需求, 就必定會從字首開始比較異同<br>
因此, 先把輸入array如果有""的狀況剔除掉, 便可以使用以下方法來運算<br>
1. 抓取題目任一字串來比較(使用strs[0]最佳, 設一個變數x=strs[0]) <br>
2. 使用迴圈, 把strs[0]與其他的字元比較異同<br>
3. 如果遇到不同的, 刪減掉x的字尾以後繼續去比較<br>
4. 如比較過了, 回傳x值; 如刪減光了仍比較不出, 回穿空值<br>


模擬結果
Runtime: 60 ms, faster than 97.85% of JavaScript online submissions for Longest Common Prefix.
