//Qs.1
    let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
    let num = 5;

    //elements larger than a number num 
    function getElements(arr, num) {
        for(let i=0; i<arr.length; i++) {
            if(arr[i]>num) {
                console.log(arr[i]);
            }
        }
    }

    console.log( getElements(arr, num) );

//Qs.2
    let str = "abcdabcdefgggh";

    // function to get String with all unique elements 
    function getUnique(str) { 
        let ans = "";
    for(let i=0; i<str.length; i++) {
        let currChar = str[i];
        if(ans.indexOf(currChar) == -1) {
            //if current character is not added, then add it in ans.
            //Other wise it is a duplicate.
            ans += currChar;
        }
    } 
    return ans;
    }
    
    console.log( getUnique(str) );

//Qs.3
    let country = ["Australia", "Germany", "United States of America"];
    
    function longestName(country) {
        let ansIdx = 0;
        for(let i=0; i<country.length; i++) {
            let ansLen = country[ansIdx].length;
            let currLen = country[i].length;
            if(currLen>ansLen) {
                ansIdx = i;
            }
        }
        return country[ansIdx];
    }
    
    console.log( longestName(country) );
    
//Qs.4
    let Str = "apnacollege";

    function countVowels(Str) {
        let count = 0;
        for(let i=0; i<Str.length; i++) {
            if(
                Str.charAt(i) == "a" ||
                Str.charAt(i) == "e" ||
                Str.charAt(i) == "i" ||
                Str.charAt(i) == "o" ||
                Str.charAt(i) == "u"
            ) { 
                count++;
            }
        }
        
        return count;
    }
    
    console.log( countVowels(Str) );

//Qs.5
    let start = 100;
    let end = 200;
    
    function generateRandom(start, end) {
        let diff = end-start;
        return Math.floor(Math.random() * diff) + start;
    }

    console.log( generateRandom(100, 200) );