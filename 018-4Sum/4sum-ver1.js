/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    
    
   if (nums.length<4) {return [];}
    nums.sort;
    let b=[];
    
    for (i=0; i<nums.length-3; i++){
        for (j=i+1; j<nums.length-2; j++){
            for (k=j+1; k<nums.length-1; k++){
                for (l=k+1; l<nums.length; l++){
                    
                    if (nums[i]+nums[j]+nums[k]+nums[l]==target){
                        let a=[];
                        a.push(nums[i]);
                        a.push(nums[j]);
                        a.push(nums[k]);
                        a.push(nums[l]);
                        a.sort();
                        b.push(a);
                        
                    }
                                     
                }
            }            
        }       
    }
    c=deletearray(b);
    return c;    
};
function deletearray(array){
    
    let a=array.length;
    let b=[];
    
    while(a>0){
 
        if (b.toString().indexOf(array[a-1].toString())==-1){
            b.push(array[a-1]);
            array.pop();     }
        
        else{
            array.pop();
        }
    
            a--;
            }
    return b;
    
};
