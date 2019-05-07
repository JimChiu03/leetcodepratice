/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let a =nums.sort(function(a, b) {
  return a - b;
});
    let current = Infinity;
    let out = Infinity;
    let count =nums.length;
    
   for(i=0;i<count-2;i++){
       let left=i+1;
       let right=count-1;
     
       while (left<right){
            let sum=a[i]+a[left]+a[right];
           if(sum===target){return target;}
           else if (sum>target){right--;}
           else {left++;}
                  
       if (Math.abs(sum-target)<current){
            current=Math.abs(sum-target);
            output=sum;
                  }

       }
       
   }
    return output;

    

    

};
