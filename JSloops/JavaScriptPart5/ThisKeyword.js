//Example This Keyword
    const student = {
        name: "Aneesh",
        age: 20,
        eng: 95,
        math: 98,
        phy: 97,
        getAvg() {
            console.log(this);
            let avg = (this.eng + this.math + this.phy) / 3;
            // console.log(avg);
            console.log(`${this.name} got avg marks = ${avg}`);
        }
    }
    function getAvg() {
        console.log(this);
    }

    console.log(student.getAvg());
    console.log(getAvg());

// Try & catch 
    console.log("hello");
    console.log("hello 2");
    // let a = 5;
    try{
        console.log(a);
    } catch(err) {
        console.log("caught an error.... a is not defined");
        console.log(err);
    }

    console.log("hello 3");
    console.log("hello 4");

// Arrow Function 
    const sum = (a, b) => {
        return a*b;           //console.log bhi likh sakte h return ki jgh
    };

    console.log(sum);
    console.log(sum(4, 5));

// Example cube 
    const cube = (n) => {
        return (n * n * n);
    };

    console.log(cube);
    console.log(cube(5));

// Example power
    const pow = (a, b) => {
        return a**b;
    };

    console.log(pow);
    console.log(pow(5, 2));

// Example hello world
    const hello = () => {
        console.log("hello world");
    };

    console.log(hello());

// Implicit return arrow function
    const mul = (a, b) => (a * b);
    console.log(mul(3, 5));

    const add = (a, b) => (a + b);
    console.log(add(4, 6));

// Set Timeout
    console.log("hi there!");

    setTimeout( () => {
        console.log("Md Aneesh");
    }, 5000);

    console.log("welcome to");
    console.log("welcome to");

// Set Interval
    console.log("hi there!");

    let id = setInterval( () => {
        console.log("Md Aneesh");
    }, 2000);

    console.log(id);

// Example
    console.log("hi there!");

    let id2 = setInterval( () => {
        console.log("Developer");
    }, 3000);

    console.log(id2);

// This with Arrow Function
    const student2 = {
        name: "aman",
        marks: 95,
        prop: this,  //Global search
        getName: function() {
            console.log(this);
            return this.name;
        },
        getMarks: () => {
            console.log(this);    //parent's scope -> window
            return this.marks; 
        },
        getInfo1: function() {
            setTimeout( () => {
                console.log(this);  //student
            }, 2000);
        },
        getInfo2: function() {
            setTimeout(function () {
                console.log(this);  //window
            }, 2000);
        },
    };

    console.log(student.getInfo1());
    console.log(student.getInfo2());

//Practice Qs.1
    const square = (n) => (n * n);
    console.log(square(6));

//Practice Qs.2
    let id3 = setInterval( () => {
        console.log("Hello World!");
    }, 2000);

    setTimeout( () => {
        clearInterval(id3);
        console.log("clear interval run");
    }, 10000);