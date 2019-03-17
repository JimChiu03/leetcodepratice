/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
     var newnums =[];
   
    for (var i=0; i< nums.length; i++) {
        
        for (var j=0; j< nums.length; j++){ 
          
            if (nums[j] == target - nums[i]){
                if (i==j){
                    continue;
                }
                else{
                   
                    newnums.push(i,j);
                      return newnums;
                }
            }
            
         
        
                
            }
        
        }      
       
          return console.log("no result");

        
        
    
};
