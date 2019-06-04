Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. <br>

An input string is valid if:<br>

Open brackets must be closed by the same type of brackets.<br>
Open brackets must be closed in the correct order.<br>



解題構想:<br>
使用原本的JS架構在描述上有點煩冗<br>
參考ES6的語法解法(for of) 簡寫不少描述句  <br>
此外  使用讀取一半的字元( (,[,{)做比對  (須先使用split分開所有字元)  依照題目的邏輯   個別對應的符號(),],})必定是後出來的先比較  <br>
因此  使用pop的功能只汲取最後一元字串 同時也刪去比對字串stack的最後一個字元 來符合運算條件比較 <br>

效能:<br>
Runtime: 44 ms, faster than 99.54% of JavaScript online submissions for Valid Parentheses.



