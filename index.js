console.log('Hello');

/*function descendingOrder(n){
    //create newString use the methods - toString - split
   
    const newString = n.toString().split('');
    //sort method b - a
    const finalArray = newString.sort();
    console.log(finalArray)
    return parseInt(finalArray.reverse().join(''));
  }

  console.log(descendingOrder(111));
  console.log(descendingOrder(15));
  console.log(descendingOrder(121));
  console.log(descendingOrder(123456789));*/

  /*function alphanumeric(string){
    //create an object with all passable values 
    const obj = {
        0: true,
        1: true,
        2: true,
        3: true,
        4: true,
        5: true,
        6: true,
        7: true,
        8: true,
        9: true,
        a: true,
        b: true,
        c: true,
        d: true,
        e: true,
        f: true,
        g: true,
        h: true,
        i: true,
        j: true,
        k: true,
        l: true,
        m: true,
        n: true,
        o: true,
        p: true,
        q: true,
        r: true,
        s: true,
        t: true,
        u: true,
        v: true,
        w: true,
        x: true,
        y: true,
        z: true,

    }
    if (string[0] === undefined) return false;
    //for loop over the input string 
    for (let i = 0; i < string.length; i++) {
    //conditional: if string[i].toLowerCase() !== key on the object then return false 
    if (!obj[string[i].toLowerCase()]) {
        return false;
    }
    }
    //outside of the for loop
    //return true;
    return true;
  }

  console.log(alphanumeric("Mazinkaiser"));
  console.log(alphanumeric("hello world_"));
  console.log(alphanumeric("PassW0rd"));
  console.log(alphanumeric("       "));*/





//   function domainName(url){
//     return new URL(url).hostname;
//   }

//   console.log(domainName("http://google.com"));
//   console.log(domainName("http://google.co.jp"));
//   console.log(domainName("www.xakep.ru"));
//   console.log(domainName("https://youtube.com"));

// function firstNonRepeatingLetter(s) {
//     //create an object 
//     const obj = {};
//     //for loop
//     for (let i = 0; i < s.length; i++) { 
//     //make each el a key on the object 
//     if (s[i].toLowerCase() in obj) {
//         obj[s[i].toLowerCase()] = obj[s[i].toLowerCase()] + 1;
//     } else {
//         obj[s[i].toLowerCase()] = 1;
//     }
//     //value would be the number of times that el is repeated in the input string 
//     }
//     console.log(obj)
//     //for in loop 
//     for (const value in obj) {
//         if (obj[value] === 1) {
//             for (let i = 0; i < s.length; i++) {
//                 if (value === s[i]) {
//                     return s[i];
//                 } 
//                 if (value.toUpperCase() === s[i]) {
//                     return s[i]
//                 }
//             }
//         }
//     }
//     //whichever value is === 1 then return that key
//     return ''; 
//   }

//   console.log(firstNonRepeatingLetter('a'));
//   console.log(firstNonRepeatingLetter('stress'));
//   console.log(firstNonRepeatingLetter('moonmEn'));