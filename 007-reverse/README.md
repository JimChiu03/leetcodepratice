對一int 數列進行反轉
如123 -> 321
-123 -> -321
且須滿足不會溢位的狀況下做轉換

由於函式輸入固定為int format 故不在解題中加入判斷是否輸入為int的判斷式

[解題構想]<br>
使用if else來判斷x > 0 與X < 0 的運算方式<br>
中間反轉運算使用while來針對原題目輸入端 x 進行除以10取餘數, 來對輸出用的反轉數字加總<br>
事後, 再對x /10的資料做回傳 <br>
此外 利用while的特性對x逐步拆解會有無法整除的狀況導致運算不會停止, 所以針對x/10的回傳值使用 Math.floor只取整數<br>

最後  再輸出判斷式上判斷是否有溢位的狀況<br><br><br>

[與其他soluction效能比較]<br>
Your runtime beats 84.30 % of javascript submissions.
Your memory usage beats 93.94 % of javascript submissions.
