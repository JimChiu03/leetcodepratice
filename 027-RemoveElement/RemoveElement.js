/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    
         let numa=nums.sort();
    for(i=0;i<nums.length;i++){
        
        if(nums[i]==val){
             numa.splice(i,1);
            i--;
        }
        
    }
           

    
};
