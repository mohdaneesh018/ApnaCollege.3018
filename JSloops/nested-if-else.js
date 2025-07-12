//Nested if-else Statement
    let markss = 75;
    if(markss >= 33){
        console.log("Pass");
        if(markss >= 80){
            console.log("Grade : O");
        }
        else {
            console.log("Grade : A");
        }
    }
    else{
        console.log("Better luck next time!");
    }

//Logical Operators
// logical And Opertors
    let mark = 85;
    if(mark >= 33 && mark >= 80){
        console.log("Pass");
        console.log("Grade : B");
    }
    else{
        console.log("Try Again");
    }

    //2 Qs.
    let marks = 95;
    if(marks >= 33 && marks <= 80){
        console.log("Pass");
        console.log("Grade : C");
    }
    else{
        console.log("Try Again");
    }

// logical Or Opertors
    let Mark = 65;
    if(Mark >= 33 || Mark >= 80){
        console.log("Pass");
        console.log("Grade : D");
    }
    else{
        console.log("Try Again");
    }

    //2 Qs.
    let Marks = 32 ;
    if(Marks >= 33 || Marks >= 80){
        console.log("Pass");
        console.log("Grade : E");
    }
    else{
        console.log("Try Again");
    }

//Logical Not Equal Operators
    let Markss = 45;
    if(!(Markss >= 33)){
        console.log("Pass");
        console.log("Grade : F");
    }
    else{
        console.log("Good luck");
    }

// mix up logical operators
    let num = 23;
    if((num >= 33 && num <= 80) || !true){
        console.log("Pass");
    }
    else{
        console.log("Excellent");
    }

//1 Practice Question 
    let str = "apple";
    if((str[0] === 'a') && (str.length > 3)){
        console.log("Good String");
    }
    else{
        console.log("Not a Good String");
    }

//2 Practice Question
    let nums = 12;
    if((nums%3 === 0) && (nums+1 === 15) || (nums-1 === 11)){
        console.log("safe");
    }
    else{
        console.log("unsafe");
    }

//Truthy and Falsy Value
    if("Md Aneesh"){
        console.log("live Udaipur");
    }
    else{
        console.log("not live Udaipur");
    }

    ///////////////
    if(0){
        console.log("live Udaipur");
    }
    else{
        console.log("not live Udaipur");
    }

    ////////////////
    let string = "a";
    if(string){
        console.log("string is not empty");
    }
    else{
        console.log("string is empty");
    }
    
    /////////////////
    let String = "";
    if(String){
        console.log("string is not empty");
    }
    else{
        console.log("string is empty");
    }

    ////////////////
    let Num = 7;        //because 0 is a false value so output is else statement
    if(Num){
        console.log("Number is not equal to 0");
    }
    else{
        console.log("Number is equal to 0");
    }