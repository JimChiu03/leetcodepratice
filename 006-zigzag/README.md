The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:<br>
(you may want to display this pattern in a fixed font for better legibility) <br>

P   A   H   N<br>
A P L S I I G<br>
Y   I   R<br>

And then read line by line: "PAHNAPLSIIGYIR"<br>
Write the code that will take a string and make this conversion given a number of rows:<br>
string convert(string s, int numRows);<br>
<br>
Example 1:<br>
<br>
Input: s = "PAYPALISHIRING", numRows = 3<br>
Output: "PAHNAPLSIIGYIR"<br>
<br>
Example 2:<br>
Input: s = "PAYPALISHIRING", numRows = 4<br>
Output: "PINALSIGYAHRPI"<br>
Explanation:<br>
<br>
P     I    N<br>
A   L S  I G<br>
Y A   H R<br>
P     I<br>

[解題構想]<br>
1. 宣告一個空字串用來輸出<br>
2. 先用if宣告num of row =1的狀況 (不做運算直接回傳字串)<br>
3. 解析zigzag邏輯  整個字串可以分成 頭 身 尾 三部分<br>
4. 針對頭尾的部分先寫好程式<br>
5. 再針對身體的部分做程式描寫  暫時只能想出雙重for迴圈並一次掃兩個數字的方式來符合題目邏輯<br>

[與其他solution比較]:
Your runtime beats 84.82 % of javascript submissions.
