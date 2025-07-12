//Conditional Statement
    console.log("Before my if statement");
        let age = 24;
        if(age >= 18){
            console.log("You can vote");
            console.log("You can drive");    //condition true
        }
    console.log("After my if statement");

    console.log("Before my if statement");
        let ages = 16;
        if(ages >= 18){
            console.log("You cannot vote");
            console.log("You cannot drive");    //condition false
        }
        if(ages <= 18){
            console.log("you can do it");
        }
    console.log("After my if statement");

//Conditional Statement
        let firstName = "MD Aneesh";
        if(firstName == "MD Aneesh"){
            console.log(`Welcome ${firstName}`);    //condition true
        }

        let secondName = "Aneesh";
        if(secondName == "MD Aneesh"){
            console.log(`Welcome ${secondName}`);    //condition false
        }
    console.log("I am Aneesh");



//Practice Question
    console.log("Traffic Lights System On");
        // For red colour
            let colour = "red";
            if(colour === "red"){
                console.log("Stop! Light colour is Red.");
            }
            if(colour === "yellow"){
                console.log("Slow Down! Light colour is Yellow.");
            }
            if(colour === "green"){
                console.log("Go! Light colour is Green.");
            }

        // For yellow colour
            let color = "yellow";
            if(color === "red"){
                console.log("Stop! Light colour is Red.");
            }
            if(color === "yellow"){
                console.log("Slow Down! Light colour is Yellow.");
            }
            if(color === "green"){
                console.log("Go! Light colour is Green.");
            }

        // For Green colour
            let Colour = "green";
            if(Colour === "red"){
                console.log("Stop! Light colour is Red.");
            }
            if(Colour === "yellow"){
                console.log("Slow Down! Light colour is Yellow.");
            }
            if(Colour === "green"){
                console.log("Go! Light colour is Green.");
            }
    console.log("Traffic Lights System Off");

//Else if Condition 
            let Age = 14;
            if(Age >= 18){
                console.log("Aman can not vote");
            }
            else if(Age >= 18){
                console.log("Zahid cn not vote");
            }
            else if(Age <= 18){
                console.log("Zunaid can vote");
            }

            //Marks Depend Qs.
                let marks = 75;
                if(marks >= 80){
                    console.log("A+");
                }
                else if(marks >= 60){
                    console.log("B");
                }
                else if(marks >= 45){
                    console.log("C");
                }
                else if(marks <= 33){
                    console.log("F");
                }

            //Marks Depend Qs. 
                let mark = 79;
                if(mark >= 80){
                    console.log("A+");
                }
                else if(mark <= 60){
                    console.log("B");
                }
                else if(mark <= 45){
                    console.log("C");
                }
                else if(mark <= 33){
                    console.log("F");
                }
                else if(mark >= 79){
                    console.log("A++");
                }

                let month = "August";
                if(month == "january"){
                    console.log("Winter is here");
                }
                else if(month == "November"){
                    console.log("My Sister Birthday");
                }
                else if(month == "August"){
                    console.log("School vaccation is off");
                }

//Else Condition
                let year = 2004;
                if(year <= 2003){
                    console.log("Kaif is thin");
                }
                else if(year >= 2005){
                    console.log("Saif is fat");
                }
                else{
                    console.log("Aneesh is medium");
                }

            //2 Qs.
                let Color = "blue";
                if(Color === "red"){
                    console.log("Stop! Light colour is Red.");
                }
                else if(Color === "yellow"){
                    console.log("Slow Down! Light colour is Yellow.");
                }
                else if(Color === "green"){
                    console.log("Go! Light colour is Green.");
                }
                else{
                    console.log("traffic light is broken");
                }

                let rang = "green";
                if(rang === "red"){
                    console.log("Stop! Light colour is Red.");
                }
                else if(rang === "yellow"){
                    console.log("Slow Down! Light colour is Yellow.");
                }
                else if(rang === "green"){
                    console.log("Go! Light colour is Green.");
                }
                else{
                    console.log("traffic light is broken");
                }

//Practice Question
                let Size = "XL";
                if(Size === "XL"){
                    console.log("if size is 'XL',price is Rs.250");
                }
                else if(Size === "L"){
                    console.log("if size is 'L',price is Rs.200");
                }
                else if(Size === "M"){
                    console.log("if size is 'M',price is Rs.100");
                }
                else{
                    console.log("if size is 'S',price is Rs.50");
                }

            //2 Qs.
                let Sizes = "L";
                if(Sizes >= "XL"){
                    console.log("if size is 'XL',price is Rs.250");
                }
                else if(Sizes === "L"){
                    console.log("if size is 'L',price is Rs.200");
                }
                else if(Sizes === "M"){
                    console.log("if size is 'M',price is Rs.100");
                }
                else{
                    console.log("if size is 'S',price is Rs.50");
                }

            //3 Qs.
                let size = "M";
                if(size === "XL"){
                    console.log("if size is 'XL',price is Rs.250");
                }
                else if(size === "L"){
                    console.log("if size is 'L',price is Rs.200");
                }
                else if(size === "M"){
                    console.log("if size is 'M',price is Rs.100");
                }
                else{
                    console.log("if size is 'S',price is Rs.50");
                }

            //4 Qs.
                let sizes = "S";
                if(sizes === "XL"){
                    console.log("if size is 'XL',price is Rs.250");
                }
                else if(sizes === "L"){
                    console.log("if size is 'L',price is Rs.200");
                }
                else if(sizes === "M"){
                    console.log("if size is 'M',price is Rs.100");
                }
                else{
                    console.log("if size is 'S',price is Rs.50");
                }


