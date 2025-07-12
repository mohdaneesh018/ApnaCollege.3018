//Example Object Literals
    const student = {
        name: "Aneesh",
        age: 20,
        Marks: 95.5,
        city: "Udaipurwati",
    } ;

//Example
    const item = {
        price: 100.52,
        discount: 50,
        colors: ["red", "pink"],
    };

//Create an object literals for properties of thread/twitter post
    const post = {
        username: "@aneesh",
        content: "This is my #firstPost",
        likes: 150,
        reposts: 5,
        tags: ["@apnacollege", "@sigma"],
    };
    
//Get values
    const obj = {
        1: "a",
        2: "b",
        true: "c",
        null: "d",
        undefined: "e",
    };

// Add 
    const students = {
        name: "Aneesh",
        age: 20,
        Marks: 95.5,
        city: "Delhi",
    } ;

//Nested Object
    const classInfo = {
        aman: {
            grade: 'A',
            city: 'Delhi',
        },
        adnan: {
            grade: 'B',
            city: 'Pune',
        },
        ateek: {
            grade: 'O',
            city: 'Mumbai',
        },
    }

// Array Objects
    const classinfo = [
        {
            name: "Aman",
            grade: 'A',
            city: 'Delhi',
        },
        {
            name: "Adnan",
            grade: 'B',
            city: 'Pune',
        },
        {
            name: "Ateek",
            grade: 'O',
            city: 'Mumbai',
        },
    ];

    console.log("Guessing Game");
    const max = prompt("enter the max number");

    const random = Math.floor(Math.random() * max) + 1;

    let guess = prompt("guess the number");

    while(true) {
        if(guess == "quit") {
            console.log("user quit");
            break;
        }

        if(guess == random){
            console.log("you are right! congrats!! random number was", random);
            break;
        }
        else if(guess < random){
            guess = prompt("hint: guess was too small. please try again");
        }
        else {
            guess = prompt("hint: guess was too large. please try again");
        }

        //else {
        //     guess = prompt("your guess was wrong. please try again");
        // }
    }