/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
       var array=[];
        var array1=[];
        var array2=[1000,900,500,400,100,90,50,40,10,9,5,4,1];
        var array3=["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
        var myMap=new Map(); 
        var myMap1=new Map(); 
        var sum=''
    
    if (num){
                if(num<=0) { return false;}
        else {
            var m=0;
            var i=0;          
            
           for(i=0;i<13;i++){                
             m = Math.floor(num/array2[i]);
                            array.push(m);
               
               
             num= num % (array2[i]);
                            
        }
            
                     
            for(i=0;i<array.length;i++){
                for (j=0;j<array[i];j++){array1.push(array3[i]);}
        
            }
            var i=0;
            while(i<array1.length)
                {
                    sum+=array1[i];
                 
                
                 i++;
        }
        
     
        return sum;
        
    }
    }
};
