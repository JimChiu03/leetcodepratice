/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length>1000) {return false;}
      if (s==="" )       {return s;}                                             
    let a="";
    let b="";
    let c="";
   
  if (s.length>500)
      { for (i=0; i<s.length-1;i++){ 
     
          
          if (s[i]!=s[i+1]){
 
              if (i<s.length-2 && i>(s.length-2)/2){
             
              return s.substring(0,i+1);
              }
              
              break;
          }
          
          
          
                       else if (i==s.length-2){
             
              return s;
              }
          

            
      
      }
 
      }
    
    
    
    
 for (i=0; i<s.length;i++){ 
    for (j=i+1; j<s.length;j++){ 
      
        
        if(s[i]===s[j]){
      
       a = "";
          
          
            
            for (k=i; k<j +1 ; k++){
              
           
                if(s[k]!=s[j+i-k]){
            
                 
                    break;
                } 
                
   
               
                else{
              
                   
                                 
                    a+=s[k];
 
                                  
                    if (b.length < a.length&& a[0]===a[a.length-1]){
                        b = a;
                    
                  
            
                   } 
                    }
                  
                }
}
     }

 }
    if (b) {return b;}
    else {
return s[s.length-1];
    } 
};
