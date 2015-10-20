function LetterCapitalize(str) { 
  var res = '';
  var split = str.split(' ');
  res = split.map(function (elem) {
    return elem = elem[0].toUpperCase() + elem.slice(1)
  })
  // code goes here  
  return res.join(' '); 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterCapitalize(readline());           

