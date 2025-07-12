// Qs.1
    let nums = [2, 3, 4, 5];
    let square = nums.map( (el) => {
        return el * el;
    });
    console.log(square);

    let sum = square.reduce( (acc, cur) => acc + cur);
    console.log(sum);

    let avg = sum / nums.length;
    console.log(avg);

// Qs.2
    let arr = [4, 6, 7, 9, 5];
    console.log(arr.map( (el) => arr + 5));

// Qs.3
    let str = ["bus", "train", "ship", "car", "bike"];
    console.log(str.map( (str) => str.toUpperCase()));

// Qs.4
    const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map( (v) => v * 2), ];
    console.log(doubleAndReturnArgs([1, 2, 3], 5, 8));    

// Qs.5
    const margeObjects = {
        name: "Dhoni",
        age: 43,
    };
    const mrgObj = {...margeObjects, city: "Jharkhand"};
    console.log(mrgObj);

                        // OR
    const mergeObject = (obj1, obj2) => ({...obj1, ...obj2});
    console.log(mergeObject({a:1, b:2}, {c:3, d:4}));