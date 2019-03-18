/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    

    
    var myMap=new Map(); 
    var myMap1=new Map(); 
    var x = [];
    var sum=0;
    var str1=""; 
    myMap.set("0",0);
    myMap.set("1",1);
    myMap.set("2",2);
    myMap.set("3",3);
    myMap.set("4",4);
    myMap.set("5",5);
    myMap.set("6",6);
    myMap.set("7",7); 
    myMap.set("8",8);
    myMap.set("9",9); 
    
    myMap1.set("a",0);
    myMap1.set("b",1);    
    myMap1.set("c",2);
    myMap1.set("d",3);
    myMap1.set("e",4);
    myMap1.set("f",5);
    myMap1.set("g",6);
    myMap1.set("h",7); 
    myMap1.set("i",8);
    myMap1.set("j",9); 
    myMap1.set("k",10);
    myMap1.set("l",11);
    myMap1.set("m",12);
    myMap1.set("n",13);
    myMap1.set("o",14);
    myMap1.set("p",15);
    myMap1.set("q",16);
    myMap1.set("r",17); 
    myMap1.set("s",18);
    myMap1.set("t",19);
    myMap1.set("u",20);
    myMap1.set("v",21);
    myMap1.set("w",22);
    myMap1.set("x",23);
    myMap1.set("y",24);
    myMap1.set("z",25);
    
    if(isNaN(myMap.get(str[0])) && str[0]!=" " && str[0]!="+"&& str[0]!="-" ) {return false;}

 
    for (i=0;i<str.length;i++){
        if(isNaN(myMap1.get(str[i]))==0) {break;} 
       else if(isNaN(myMap.get(str[i-1]))==0 && str[i]==" ") {break;} 
       else if(isNaN(myMap.get(str[i-1]))==0 && str[i]=="+") {break;} 
       else if(isNaN(myMap.get(str[i-1]))==0 && str[i]=="-") {break;} 
       else if(isNaN(myMap.get(str[i-1]))==0 && isNaN(myMap.get(str[i]))!=0) {break;}
                    
        var v=str[str.length-i-1]+str[str.length-i-2]+str[str.length-i-3];
             var w=str[i+1]+str[i];

          if(myMap.get(str.charAt(i))){
        
        x.push(str.charAt(i));
               }
    
        else if(v == " 0+" || v==" 0-" || w==" +" || w==" -"|| w==" 0") {break;}
        else if(w=="-+" || w=="+-" ||w=="++" ||w=="--") {return false;}
        else if(myMap.get(str.charAt(i))==0){
        x.push("0");} 
       else if(str.charAt(i) =="." ){break;}
       else if(str.charAt(0) =="+"&&" "){continue;}
        
       else if(isNaN(myMap.get(str[i])) &&str[i] !=" " &&str[i] !="+" &&str[i] !="-"){break;}

  
        
            else {continue;}
       }
    
    
    
    
    for (i=0;i < x.length;i++){
     
       
        sum += x[i]*Math.pow(10,x.length-i-1);
  
    }
 
   
    
  for (i=0;i<str.length-1;i++){
       if (str[i]=="-"&& sum == 2147483647) {return -2147483647;}
     else  if(str[i]=="-"&& sum > 2147483647){return -2147483648;}
     
      else if (str[i]=="-") {return -sum;}
      
  }

    if (sum >2147483647) {return 2147483647;}
return sum;
    
   
};
