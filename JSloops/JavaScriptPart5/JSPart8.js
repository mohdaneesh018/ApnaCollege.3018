// forEach 
    let arr = [1, 2, 3, 4, 5];

// first method
    arr.forEach( (el) =>{
        console.log(el);
    });

// second method
    arr.forEach(function (el) {
        console.log(el);
    });

// third method
    let print = function (el) {
        console.log(el);
    };

    arr.forEach(print);

// Example 
    let Arr = [
        {
            name: "aman",
            marks: 95,
        },
        {
            name: "Aneesh",
            marks: 95.4,
        },
        {
            name: "Kaif",
            marks: 98,
        },
    ];

    Arr.forEach( (student) => {
        console.log(student.marks);
    });

// Map function
    let num = [1, 2, 3, 4];

    let double = num.map((el) => {
        return el * el * el;
    });
    console.log(double);

// Example
    let student = [
        {
            name: "aman",
            marks: 95,
        },
        {
            name: "Aneesh",
            marks: 95.4,
        },
        {
            name: "Kaif",
            marks: 98,
        },
    ];

    let gpa = student.map((el) => {
        return el.marks / 10;
    });

    console.log(gpa);

// Filter function 
    let nums = [1, 2, 3, 4, 7, 8, 2, 9, 10, 11, 12];
    let ans = nums.filter( (el) => {
        return el % 2 == 0;    //even -> true, odd -> false 
    });

    console.log(ans);

// Every function
    let arr2 = [2, 4, 6, 8, 10, 3];
    let ans2 = arr2.every( (el) => el%2 == 0);

    console.log(ans2);

// Example 
    let arr3 = [1, 3, 5, 7];
    let ans3 = arr3.every( (el) => el%2 != 0);

    console.log(ans3);

// Some function 
    let arr4 = [1, 2, 3, 4];
    let ans4 = arr4.some( (el) => (el%2 == 0));

    console.log(ans4);

// Example
    let arr5 = [1, 3];
    let ans5 = arr5.some( (el) => (el%2 == 0));

    console.log(ans5);

// Reduce function
    let num2 = [1, 2, 3, 4];
    let finalVal = num2.reduce( (res, el) => {
        console.log(res);
        return res + el;
    });
    console.log(finalVal);

// Example
    let num3 = [2, 3, 4, 5, 3, 4, 7, 8, 1, 11, 2];
    let max = num3.reduce( (max, el) => {
        if(max < el){
            return el;
        } else {
            return max
        }
    });

    console.log(max);

// Practice Qs (check all no. in arr are multiple of 10 or not)
    let arr0 = [10, 20, 30, 40];
    let mul = arr0.every( (el) => (el%10 == 0));

    console.log(mul);

// Practice Qs (create function find min no. in arr)
   function getMin(arr1) {
    let min = arr1.reduce( (min, el) => {
        if(min > el){
            return el;
        } else {
            return min;
        }
    });

    return min;
   }
    let arr1 = [30, 25, 8, 55];
   
    console.log(getMin(arr1));

// Default Parameter
   function sum(a = 2, b) {
    return a + b;
   }

   console.log(sum(3, 4));
   console.log(sum(3));

// Spread
   let array = [1, 2, 3, 4, 5];
   console.log(Math.min(...array));
   console.log(Math.max(...array));
   console.log(...array);

// Example
   let Array = ["Md Aneesh"];
   console.log(..."MdAneesh");

// Example Spread(with array literal)
   let arr00 = [1, 2, 3, 4, 5];
   let newArr = [...arr00];
   console.log(newArr);

   let chars = "hello";
   console.log(...chars);

   let odd = [1, 3, 5, 7];
   let even = [2, 4, 6, 8];
   console.log(...odd, ...even);

// Spread Example(with object literal)
   const data = {
    email: "ironman@gmail.com",
    password: "wxyz",
   };

   const datacopy = {...data, id: 123, country: "India"};
   console.log(datacopy);

   let Arr00 = [91, 98, 95, 97];
   let obj = {...Arr00};  //obj -> key: value
   console.log(obj);

// Rest 
   function sum(...args) {
    return args.reduce( (sum, el) => sum + el);
   }

   console.log(sum(2, 4, 5, 6, 8));

// Example
   function min(msg, ...args) {
    console.log(msg);
    return args.reduce((min, el) => {
        if(min > el){
            return el;
        }
        else {
            return min;
        }
    });
   }

   console.log(min("Jaipur", 45, 34, 555, 78, 65));

// Destructuring
   let names = ["tony", "bruce", "peter", "steve", "abc"];
   let [winner, runnerup, ...others] = names;
   console.log(winner);
   console.log(runnerup);
   console.log(others);

// with object
   const students = {
    name: "Aneesh",
    age: 21,
    class: 12,
    subjects: ["hindi", "english", "math", "science"],
    username: "aneesh@123",
    password: "abcd",
    city: "pune",
   };

   let { username: user, password: secret, city: place = "Mumbai" } = students;

   console.log(user);
   console.log(secret);
   console.log(place);