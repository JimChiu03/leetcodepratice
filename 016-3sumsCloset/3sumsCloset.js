/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let a =[];
    for (i=0;i<nums.length;i++) {
        for (j=i+1;j<nums.length;j++){
            for (k=j+1;k<nums.length;k++){
                if(nums[i]+nums[j]+nums[k] ==target){return target;}
                else{
                a.push(nums[i]+nums[j]+nums[k]-target);
               
            }
        }
    }}
        
var b=a.sort((a, b) => Math.abs(a) - Math.abs(b) || b - a);
    return b[0]+target;
    

    

};
