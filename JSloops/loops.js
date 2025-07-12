//Qs. 1
    console.log("1-10 counting");
        for(let i=1; i<=10; i++){
            console.log(i);
        }

//Qs.2
    console.log("5-1 counting");
        for(let i=5; i>=1; i--){
            console.log(i);
        }

//Qs.3
    console.log("10,7,4,1 counting");
        for(let i=10; i>=1; i = i-3){
            console.log(i);
        }

//Qs.4
    console.log("1-15 odd number")
        for(let i=1; i<=15; i = i+2){
            console.log(i);
        }

    console.log("Backwords");
        for(let i=15; i>=1; i = i-2){
            console.log(i);
        }

//Qs.5
    console.log("2-10 even number");
        for(let i=2; i<=100; i = i+2){
            console.log(i);
        }

    console.log("Backwords");
        for(let i=50; i>=2; i = i-2){
            console.log(i);
        }

//Qs.6
    console.log("Multiplication table for 5");
        for(let i=5; i<=50; i = i+5){
            console.log(i);
        
        }

//Qs.7
    // console.log("Qs.7 using prompt create multiplication table");
    //     let n = prompt("Write your number");
    //     n = parseInt(n);

    // for(let i=n; i<=n*10; i = i+n){
    //     console.log(i);
    // }

//Nested loop 
    for(let i=1; i<=3; i++){
        console.log(`Outer loop ${i}`)
        for(let j=1; j<=3; j++){
            console.log(j);
        }
    }

//While loop
    console.log("While loop");
        let i=1;
        while(i <= 10){
            console.log(i);
            i++;
        }

    console.log("While loop Backword");
        let j=10;
        while(j >= 1){
            console.log(j);
            j--;
        }

    console.log("While loop even number");
        let k=0;
        while(k <= 20){
            console.log(k);
            k = k+2;
        }

    console.log("While loop odd number");
        let n=1;
        while(n <= 20){
            console.log(n);
            n = n+2;
        }