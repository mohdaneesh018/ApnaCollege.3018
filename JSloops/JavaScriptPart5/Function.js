//Example function
    function hello() {
        console.log("hello");
    }

    hello();

// Print 1 to 5
    function print1to5() {
        for(let i=1; i<=5; i++){
            console.log(i);
        }
    }

    print1to5();

// Print is adult
    function isAdult() {
        let age = 14;
        if(age >= 18){
            console.log("adult");
        }
        else{
            console.log("not adult");
        }
    }

    isAdult();

// Print name
    function printName() {
        console.log("Aneesh");
        console.log("Jaipur");
    }

    printName();

// Print poem
    function printPoem() {
        console.log("Twinkle Twinkle, Little Star");
        console.log("How I wonder what you are");
        console.log("Up above the world so high");
        console.log("Like a diamond in the sky");
    }

    printPoem();

// print roll a dice & display value of dice(1 to 6)
    function rollDice() {
        let rand = Math.floor(Math.random() * 6) + 1;
        console.log(rand);
    }

    rollDice();
    rollDice();
    rollDice();
    rollDice();

// Function Argument Example
console.log("Function Argument Example");
    function printInfo(name, age, city) {
        console.log(`${name}'s age is ${age} at ${city}`);
    }

    printInfo("Aneesh", 20, "Udaipur");
    printInfo("Adnan", 34);

// Example sum 
console.log("Sum");
    function printSum(a, b) {
        console.log(a+b);
        console.log(a-b);
        console.log(a*b);
        console.log(a/b);
        console.log(a%b);
    }

    printSum(24, 72);
    printSum(72, 24);

// Average of 3 numbers
console.log("Average of 3 number");
    function printAvg(a, b, c) {
        console.log( (a + b + c)/3 );
    }

    printAvg(4, 5, 6);

// Multiplication Table
console.log("Multiplication Table");
    function printTable(n) {
        for(let i=n; i<=n*10; i+=n){
            console.log(i);
        }
    }

    printTable(2);
    printTable(45);

// Return function
    function calcSum(a, b) {
        return a+b;
    }
    console.log( calcSum(3, 4) );
    console.log( calcSum(9, 6) );
    console.log( calcSum(calcSum(3, 4), 5) );
    console.log( calcSum(calcSum(7, 20), 9) );

// Example
    function isAdult(age) {
        if(age>=18) {
            return "adult";
        }
        else {
            return "not adult";
        }
    }
    console.log( isAdult(23) );
    console.log( isAdult(12) );

// Practice Qs.
    console.log("sum of numbers from 1 to n using return");
    function printSum(n) {
        let sum = 0;
        for(let i=1; i<=n; i++){
            sum = sum+i;
        }
            return sum;
         
    }
    console.log( printSum(8) );
    console.log( printSum(9) );

// Practice Qs.
    console.log("Concatenation of all strings in an array");
    let str = ["I", " ", "am", " ", "going", " ", "to", " ", "Delhi"];

    function concat(str) {
        let result = "";
        
        for(let i=0; i<str.length; i++) {
            result += str[i];
        }
        return result;
    }
    console.log( concat(str) );

// Function scope
    console.log("Scope");

    let sum = 54;   //Global Scope

    function calSum(a, b) {
        let sum = a+b;   //Function Scope
        console.log(sum);
    }

    calSum(1, 2);
    console.log(sum);
    
// Block Scope
    let age = 23;
    if(age>=18) {
        let str = "Adult";
        console.log(str);
    }

//Lexical Scope 
    function outerFunc() {
        let x = 5;
        let y = 6;
        function innerFunc() {
            // let a = 8;
            console.log(x);
            console.log(y);
        }
        // console.log(a);
        innerFunc();
    }
    console.log( outerFunc() );
   
// Practice Qs.
    let greet = "hello";      //Global Scope

    function changeGreet() {
        let greet = "namaste";      //function Scope
        console.log(greet);

        function innerGreet() {
            console.log(greet);      //Lexical Scope
        }

        innerGreet();
    }

    console.log(greet);
    changeGreet();

// Function Expression
    console.log("function Expression");
    let name = "Aneesh";
    // let x = 5;

    let Sum = function(a, b) {
        return a+b;
    } 
    console.log( Sum(3, 4) );

    let Hello = function() {
        console.log("hello");
    }
    console.log( Hello() );

    let Hellos = function() {
        console.log("namaste");
    }
    console.log( Hellos() );

// Higher Order Function type first
    console.log("Higher Order Function");
    function multipleGreet(func, count) {
        for(let i=1; i<=count; i++){
            func();
        }
    }

    let Greet = function() {
        console.log("Good Morning");
    }

    multipleGreet(Greet, 20);

// Higher Order Function type second
    function oddorEvenFactory(request) {
        if(request == "odd") {
            return function(n) {
                console.log( !(n%2 == 0) );
            }
        }
        else if(request == "even") {
            return function(n) {
                console.log(n%2 == 0);
            }
        }
        else{
            console.log("wrong request");
        }
    }

    let request = "odd";
    let func = oddorEvenFactory(request);
    console.log(func(4));
    console.log(func(3));

    let Request = "even";
    let Func = oddorEvenFactory(Request);
    console.log(Func(6));
    console.log(Func(9));

// Methods 
    const calculator = {
        add: function(a, b){
            return a+b;
        },
        sub: function(a, b){
            return a-b;
        },
        mul: function(a, b){
            return a*b;
        }
    }
    console.log(calculator.add(3, 4));
    console.log(calculator.sub(9, 4));
    console.log(calculator.mul(3, 5));

//Second Method upr wale ko same aese nhi likhte h
    const calc = {
        add(a, b) {
            return a+b;
        },
        sub(a, b) {
            return a-b;
        },
        mul(a, b) {
            return a*b;
        }
    }
    console.log(calculator.add(2, 34));
    console.log(calculator.sub(34, 4));
    console.log(calculator.mul(6, 6));