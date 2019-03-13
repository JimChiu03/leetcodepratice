Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given an integer, convert it to a roman numeral. Input is guaranteed to be within the range from 1 to 3999.

Example 1:

Input: 3
Output: "III"

[解題構想]
1. 先把羅馬數字與來對應的阿拉伯數字分別用陣列方式呈現
2. 使用除法的方式, 把輸入值從羅馬數字最大的開始除, 除完結果回傳的陣列A, 餘數回傳回函式繼續運算
3. 2運算完畢後, 把對應的陣列A的資料按照羅馬數字來轉換並存到陣列B
4. 對陣列B的字串加總並回傳回去
（remark 中間回傳資料須注意陣列的起點在哪）

[與其他solution效能比較]<br>
Your runtime beats 75.34 % of javascript submissions.

