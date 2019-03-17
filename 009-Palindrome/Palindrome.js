/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
 
    var pal=0;
    if(x<0||(x%10 == 0 && x !==0 )){return false;}

    else if ( x>=0 && x<10){return true;}
        else{
      
        while(x>pal){
        
            pal=pal*10+x%10; 
           if(x==pal && x>9) {break;}
                else{
            x=Math.floor(x/10);
                }
        
        }
        
            if (pal==x){return true;}
        return false;
        
    }


};
