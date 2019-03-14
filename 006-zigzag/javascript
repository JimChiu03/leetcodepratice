/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {

    var res='';    
    if (numRows==1) return s;
    
    for(i=0;i<s.length;i+=numRows*2-2){
        
        res+=s.charAt(i);
        
    }
       
    for (i=1;i<numRows-1;i++){
        
       for(j=i;j<s.length;j+=numRows*2-2){
           
           res+=s.charAt(j);
           
           res+=s.charAt(j+numRows*2-2-(2*i));
       }
        
        
    }

       
    
    
    for (i=numRows-1;i<s.length;i+=numRows*2-2){
            
        res+=s.charAt(i);
        
    }
    
    
    return res;
};
