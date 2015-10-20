var SimpleSymbols = function (val) {
    if (val[0] >= 'a' || val[val.length -1] >= 'a') {
        return false;
    } else {
        for (var i = 1; i<val.length - 1; i++) {
            if (val[i] >= 'a') {
                if (val[i-1] != "+" || val[i+1] != "+") {
                    return false;
                }
            }
        }
    }
    return true;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SimpleSymbols(readline());                            















                            
                            
                            
  
