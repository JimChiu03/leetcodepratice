Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
             
             解題構想 
             1. 使用map以及設定計數器來做為輸出
             2. 這個解法中的map不分字元是否重複都會記錄下來, 所以需要一個區別的變數
             3. 當函式觸發修改2.之變數時, 1.的計數器也會被影響做reset的動作 ----> 由於解法中的map不分字元是否重複都會記錄, 所以reset值不一定是０
             4. 對3回傳的資料, 每次都對counter做比較, 只要counter比回傳的字串長, 立即更新字串長度 
             
         
