var isValid = function(s) {

  if (s === null || s.length <= 0) return true;
    var cArr = s.split('');
    var stack = [];
    for (var c of cArr) {
        if (c === '[') stack.push(']');
        else if (c === '{') stack.push('}');
        else if (c === '(') stack.push(')');
     //   else if (c !== stack.pop()) return false;
        else if(c === ')' && c===stack.pop()) continue;     
        else if(c === '}' && c===stack.pop()) continue;  
        else if(c === ']' && c===stack.pop()) continue;  
        else {return false;}
    }
    if (stack.length === 0) return true;

    return false;
    
};
