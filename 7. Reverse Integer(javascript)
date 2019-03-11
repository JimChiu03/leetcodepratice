/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var rev =0;
    var z=x;
    if (x>0){
    
    while(z!=0){
          
        var y = z%10;
    z=Math.floor(z/10);  
        
    
        
       rev=rev*10+y;
   
    }
        
        if (rev > 0x7FFFFFFF) {return 0;}
        
         return rev;
    }
    else{
        
        var z=-x;
            while(z!=0){
          
        var y = z%10;
    z=Math.floor(z/10);  
        
    
        
       rev=rev*10+y;
        
    }
        if (rev > 0x7FFFFFFF) {return 0;}
         return -rev;
    }
    
    
   
    
    
};
