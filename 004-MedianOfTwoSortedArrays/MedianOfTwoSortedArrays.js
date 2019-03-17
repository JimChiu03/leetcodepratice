/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    
    let array=[];
    
    for(i=0;i<nums1.length;i++){
        array.push(nums1[i]); 
             
    }
    
    for(i=0;i<nums2.length;i++){
        array.push(nums2[i]); 
             
    }
     array.sort(function(a, b) {return a - b;});
  
    

    
    if (array.length%2==0)
        { return (array[array.length/2-1]+array[(array.length/2)])/2;
                    }
     return array[Math.floor(array.length/2)]; 
    
    
};
