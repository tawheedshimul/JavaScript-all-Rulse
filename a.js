const login = (pass) => {
    if(pass == "1234"){
        return "successfully login"
    }else{
        return "pass incorrect"
    }

}

console.log(login(1234));

const meterToCenti = (x) => {
    // we know, 1m = 100cm
    // let x = 12;
    let y = x * 100;
    return y;
}

console.log(meterToCenti(5));


function countVowel(str) {
    var count = 0;
    str=str.toLowerCase();
    for(var i=0;i<str.length;i++){
      if(str.charAt(i)=="a"||str.charAt(i)=="e"||str.charAt(i)=="i"||
         str.charAt(i)=="o"||str.charAt(i)=="u"){
         count++; //Increment vowel count
      }
    }
    return count;
  }

  console.log(countVowel("Hello")) //2
  console.log(countVowel("Umbrella")) //3

function checkPalindrome(str) {
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) != str.charAt(str.length - i - 1)) { // Comparison fail
            return false;
        }
    }
    return true;
}

console.log(checkPalindrome("dad")) //false
console.log(checkPalindrome("racecar")) //true
console.log(checkPalindrome("madam")) //true

function anaToVori(x){
    let y=x/16;
    return y;
}
console.log(anaToVori(2));
