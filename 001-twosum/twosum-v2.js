/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
     let newnums =[];
   
      for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] == target - nums[i]) {
                
                newnums.push(i);
                newnums.push(j);
                return newnums;
            }
            
           
        }
    } return false;
    
};
