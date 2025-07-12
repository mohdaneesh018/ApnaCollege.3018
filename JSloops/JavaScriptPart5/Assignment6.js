//Qs.1
    const arrayAverage = (arr) => {
        let total = 0;
        for(let number of arr) {
            total += number;
        }
        return total / arr.length;
    };
    
    let arr = [1, 2, 3, 4, 5, 6];
    console.log(arrayAverage(arr));
    
//Qs.2
    let num = 4;
    const isEven = (num) => num % 2==0;
    console.log(isEven(4));
    
//Qs.3
    const object = {
        message: 'Hello,World!',
        logMessage() {
            console.log(this.message);
        }
    };
    
    console.log( setTimeout(object.logMessage, 1000));
    
//Qs.4
    let length = 4;
    function callback() {
        console.log(this.length);
    }
    
    const Object = {
        length: 5,
        method(callback) {
            callback();
        },
    };
    
    console.log(Object.method(callback, 1, 2));