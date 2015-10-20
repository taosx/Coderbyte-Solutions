// v0.1
// I was a bit rushed so I didn't do it functionally but imperative
// in the next version I'll do it functional (quite simple);
function LetterChanges(str) {
  var strcharcoded = '';
  for (var i=0;i<str.length;i++){
    var charcode = str.toLowerCase().charCodeAt(i);
    if (/[a-z]/.test(String.fromCharCode(charcode))) {
      if (/[a,e,o,i,u]/.test(String.fromCharCode(charcode + 1))) {
        strcharcoded += String.fromCharCode(charcode + 1).toUpperCase();
      } else {
        strcharcoded += String.fromCharCode(charcode + 1);
      }
    } else {
      strcharcoded += String.fromCharCode(charcode);
    }
  }
  return strcharcoded;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterChanges(readline());  