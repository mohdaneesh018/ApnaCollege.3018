//Favourite Movie Game
    // const favMovie = "avatar";

    // let guess = prompt("guess my favourite movie");

    // while(guess != favMovie){
    //     if(guess != "quit"){
    //         console.log("you quit");
    //         break;
    //     }
    //     guess = prompt("wrong guess. please try again");
    // }

    // if(guess == favMovie) {
    //     console.log("congrats!!");
    // }

//Break keyword
    let i=1;
    while(i<=5){
        if(i == 3){
            break;
        }
        console.log(i);
        i++;
    }
    console.log("we used break at 3");

//Loops with array
    let fruits = ["mango", "apple", "banana", "litchi", "orange"];
    fruits.push("pineapple");
    
    console.log("Forward");
        for(let i=0; i<fruits.length; i++){
            console.log(i, fruits[i]);
        }

    console.log("Backward");
        for(i=fruits.length-1; i>=0; i--){
            console.log(i, fruits[i]);
        }

//Nested loops with Nested Arrays
        let heroes = [
            ["ironman", "spiderman", "thor"],
            ["superman", "wonder woman", "flash"]
        ]

        for(let i=0; i<heroes.length; i++){
            console.log(i, heroes[i], heroes[i].length);
            for(let j=0; j<heroes[i].length; j++){
                console.log(`j=${j}, ${heroes[i][j]}`);
            }
        }

//Qs.
        let student = [ ["Aman", 95], ["Arjun", 94.9], ["Karan", 100] ];
        for(let i=0; i<student.length; i++){
            console.log(`info of student #${i+1}`);
            for(let j=0; j<student[i].length; j++){
                console.log(student[i][j]);
            }
        }

//for of loop
    let fruit = ["mango", "apple", "banana", "litchi", "orange"];
    fruit.push("papaya");
    for(Fruit of fruit){
        console.log(Fruit);
    }
        
    for(char of "mdaneesh"){
    console.log(char);
}

//Qs.
    let heros = [
        ["ironman", "spiderman", "thor"],
        ["superman", "wonder woman", "flash"]
    ]
    for(list of heros){
        for(hero of list){
            console.log(list);
        }
    }