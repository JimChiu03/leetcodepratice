/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    var prefix=strs[0];
 if (strs.length == 0) return "";
    
    for (i=0;i<strs.length;i++){
        while(strs[i].indexOf(prefix)!=0){
            prefix= prefix.substring(0, prefix.length-1);
            console.log(prefix);
            if (prefix.isEmpty) {return "";}
        }
        
        
    }
  
return prefix;
    
    
};
