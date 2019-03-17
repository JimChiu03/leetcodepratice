/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var array=[];
    var array1=[];
    var sum=0;
    var myMap=new Map(); 
    myMap.set("I",1);
    myMap.set("V",5);
    myMap.set("X", 10);
    myMap.set("L", 50);
    myMap.set("C", 100);
    myMap.set("D", 500);
    myMap.set("M", 1000); 
for (i=0; i<s.length; i++){
    
    
    var v=s.substring(s.length-(i+1),s.length-(i) )
    
    if (v){
    array.push(myMap.get(v))
    }
    
    else {
        break;
        return false;
    }
    
}
  array1.push(array[0]);
for (i=1; i<array.length;i++){
       
   if(array[i]-array[i-1] <0){array1.push(-array[i])}
    else{array1.push(array[i])}
    
}
 
 
    for (var i = 0; i < array1.length; i++) {
        sum += array1[i];
    }
     return sum; 

  
};
