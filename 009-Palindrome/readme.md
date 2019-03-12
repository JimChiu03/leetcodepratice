Palindrome Number 
Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Input: 121
Output: true

Input: -121
Output: false

Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

針對為節省空間  不使用reverse功能
使用運算的方式來解 會發現palindrome有以下性質
1. 絕對不會被10整除
2. 一個數若是palindrome, 將其分成兩半來看, 左右都應是一樣
換句話說 對其不斷 /10, 並對其餘數作先前reverse使用的技巧 概略在到palindrome一半的位置
便可判斷是否為palindrome


[解題構想]
1. 先對負數, 以及相關數字是否為10的倍數做基本篩選(不能把0算進去, 0~9是palindrome的特例)
2. 使用while對輸入數 做類似reverse的運算 運算到 [輸入 > 輸出]這條件變為false即可 (在x連續回傳 x=x/10時, 只取整數部分)
3. 針對特例 (0~9) 做出運算時需把while做break的動作
4. 對3 while的結果進行判讀  來回傳函式
