Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.<br>

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.<br>

解題構想 <br>
運算函式時, 原題目僅要求回傳總矩陣長度<br>
所以使用一個for迴圈與一個計數counter i,與索引來完成相關功能 <br>
最終回傳 i+1即為答案 <br>
