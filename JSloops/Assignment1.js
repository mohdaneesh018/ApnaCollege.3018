//Question no. 1
    let num = 20;
    if(num % 10 == 0){
        console.log("Good");
    }
    else{
        console.log("Bad");
    }

//Question no. 2
    // let name = prompt("enter your name");
    // let age = prompt("enter your age");       
     
    // alert("Juned is 13 years old");

//Question no. 3
    let Quarter = "1";
    switch(Quarter){
        case "1":
            console.log("January, February, March");
            break;
        case "2":
            console.log("April, May, June");
            break;
        case "3":
            console.log("July, August, September");
            break;
        case "4":
            console.log("October, November, December");
        default :
            console.log("Not a Quarter");
        }
    
//Question no. 4
    let str = "Ataullah";
    if((str[0] == "A") && (str.length > 5)){
        console.log("Golder String");
    }
    else{
        console.log("String not Golden");
    }
        
//Question no. 5   
    let a = 3;
    let b = 25;
    let c = 14;
    if(a > b){
        if(a > c){
            console.log(a, "is lagest");
        }
        else{
            console.log(c, "is lagest");
        }
    }
    else{
        if(b > c){
            console.log(b, "is lagest");
        }
        else{
            console.log(c, "is lagest");
        }
    }

//Question no. 6
    let num1 = 32;
    let num2 = 47852;
    if((num1%10) == (num2%10)){
        console.log("numbers have the same last digit which is", num1%10);
    }
    else{
        console.log("numbers don't have the same last digit");
    }