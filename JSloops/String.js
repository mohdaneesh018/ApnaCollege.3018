let msg = "    hello    ";

// let password = prompt("set your password");
// let newPass = password.trim();
// console.log(newPass);

//JS string are immutable

    let name = "Apna College";

    let Msg = "error";
    console.log(Msg.toUpperCase());

//Argument String 
    let mg = "ILoveCoding";

//Method Chaining 
    let mbl = "      hello     ";
    // let newMbl = mbl.trim();
    // console.log("after trim : ", newMbl);
    // newMbl = newMbl.toUpperCase();
    // console.log("after uppercase : ", newMbl);
    let newMbl = mbl.trim().toUpperCase();     //ise method chaining kahte h is line ko sb ko mix up krdiya isliye 
    console.log(newMbl);

//Slice Method
    let hello = "Apnacollege";
    console.log(hello.slice(0, 5));
    console.log(hello.slice(5));

//Replace method
    let skr = "ILoveCoding";
    console.log(skr.replace("v", "w"));     //start wala term hna bs wahi ye replace hoga 

    let sikr = "apnaapnapna";
    console.log(sikr.replace("apna", "College"));

//Repeat Method
    let jaipur = "aneesh";
    console.log(jaipur.repeat(4));

    let fruit = "Mango";
    console.log(fruit.repeat(5));

//Practice Question
    // Qs. 1
        let msgs = "help!";
        let newmsgs = (msgs.trim().toUpperCase());
        console.log(newmsgs);

    //Qs. 2
        let names = "ApnaCollege";
        console.log(names.slice(4, 9));  
        console.log(names.indexOf("na"));
        console.log(names.replace("Apna", "Our"));
        console.log(names.indexOf("ege"));
        console.log(names.slice(4)); 
        console.log(names.slice(4) .replace('l', 't'));
        console.log(names.slice(4) .replace('l', 't') .replace('l', 't'));