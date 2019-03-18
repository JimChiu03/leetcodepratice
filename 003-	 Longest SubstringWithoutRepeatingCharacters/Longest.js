/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    let map = new Map();
    let longest=0;
    let currentlength=0;
    let last=0;
 
for (i=0;i<s.length;i++){
    let c=s.charAt(i);
    
    if(!map.has(c)||map.get(c)<last)
        {
            currentlength++;
        }
    else{
        
    last = map.get(c);
        currentlength=i-last;        
        
        
    }
       
    
    
    map.set(c,i)

if (longest < currentlength){
    longest = currentlength;
}

}
    
    return longest;
    
};
