    let smallImages = document.getElementsByClassName("oldImg");
    for(i=0; i<smallImages.length; i++){
        smallImages[i].src = "spiderman_img.png";
        // console.dir(smallImages[i]);
        console.log(`value of image no. ${i} is changed.`);
    }

// Query Selector
    console.dir(document.querySelector("h2"));      // select first h2 element
    console.dir(document.querySelector('#description'));        // select first id(description) element
    console.dir(document.querySelector(".oldImg"));     // select firs class(oldImg) element
    console.dir(document.querySelectorAll("p"));        // select all paragraph tag

// using properties & method
    let para = document.querySelector('p');
    console.dir(para);
    console.dir(para.innerText);
    console.dir(para.innerHTML);
    console.dir(para.textContent);
    