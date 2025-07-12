//Qs. 1
    let arr = [7, 9, 0, -2];
    let n = 3;
    let ans = arr.slice(0, n);
    console.log(ans);

//Qs. 2
    let Arr = [7, 9, 0, -2];
    let N = 3;
    let Ans = Arr.slice(Arr.length-n);
    console.log(Ans);

//Qs. 3
    let Str = prompt("please enter a string");
    if(Str.length == 0){
        console.log("string is empty");
    }
    else{
        console.log("string is not empty");
    }

//Qs. 4
    let str = "ApNaCoLlEgE";
    let idx = 3;
    if( str[idx] == str[idx]. toLowerCase() ){
        console.log("character is lowercase");
    }
    else{
        console.log("character is not lowercase");
    }
    
//Qs.5
    let string = prompt("please enter a string");
    console.log(`original string = ${string}`);
    console.log(`string without spaces = ${string.trim()}`);
    
//Qs. 6 
    let array = ["hello", 'a', 23, 64, 99, -6];
    let item = 64;
    if(array.indexOf(item) != -1){
        console.log("element exists in array");
    }
    else{
        console.log("element doesn't exist in array");
    }
    
