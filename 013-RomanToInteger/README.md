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
Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.

Example 1:

Input: "III"
Output: 3

[解題構想]

1. 先設定map做好轉換羅馬數字至阿拉伯數字
2. 設定兩組空矩陣A, B
3. 使用substring功能把字串從最右邊開始回傳到array A, 轉換過程如果有不存在map的字元　回傳false
4. 先把array A的array A[0]付予array B
5. 對array的資訊判讀, 依序從array A[1]開始依照羅馬數字的邏輯回帶至array B
6. 對array B中的內容進行加總　並把結果回傳出去

[與其他solution效能比較] <br>
Your runtime beats 72.65 % of javascript submissions.<br>
Your memory usage beats 18.89 % of javascript submissions.
