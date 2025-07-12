let color = "blue";    // Default color blue

switch(color){
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Slow Down");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Light is broken");
}

console.log("After switch statement");

//Practice Question
    let day = "4";
    switch(day){
        case ("1"):
            console.log("Monday");
            break;
        case ("2"):
            console.log("Tuesday");
            break;
        case ("3"):
            console.log("Wednesday");
            break;
        case ("4"):
            console.log("Thursday");
            break;
        case ("5"):
            console.log("Friday");
            break;
        case ("6"):
            console.log("Saturday");
            break;
        case ("7"):
            console.log("Sunday");
            break;
        default:
            console.log("Blank day!"); //day = 8 de to o/p blank day aayega 
    }

    console.log("Week completed");

//Alert & Prompt System
    // alert("This is a page");
    // alert("It is a web page");
    console.log("Supermall");
    console.error("It is an error msg");
    console.warn("It is a warning system");

//Prompt System
    let firstName = prompt("enter your name:");
    console.log(firstName);

//Practice Question
    let frstName = prompt("enter your name");
    let lastname = prompt("enter your last name");
    console.log("welcome", frstName, lastname, "!");

    let frstNames = prompt("enter your name");
    let lastnames = prompt("enter your last name");
    let msg = "welcome " + frstNames +" "+ lastnames + "!";
    alert(msg);