let allImages = document.querySelectorAll(".image");
let index = 0;

if(screen.width >= 540){
    let progressBoxes = document.querySelectorAll(".events-progress-box");
    for (let i = 0; i < progressBoxes.length; i++) {
        progressBoxes[i].addEventListener("click", ()=>{
            clearInterval(myInterval)
            allButChosen(i);
        });
    }
    function allButChosen(i){
        progressBoxes[i].setAttribute("id", "pink")
        progressBoxes.forEach((val, index) => {
            if (index !== i){
                val.removeAttribute("id", "pink")
            }
        });
        getImgs(i);

    }
      
    /* change img every 3 sec untill one of the little boxes are pressed */
    let myInterval = setInterval(() => {
        usingInterval();
    }, 3000);

    function usingInterval(){
        if(index === 2){
            index = 0;
        }else{
            index++
        }
        allButChosen(index)
    }
    
    function getImgs(index){
        if(index === 0){
            allImages.forEach((image, index) => {
                image.classList.remove("hide")
                if (index !== 0 && index !== 1){
                    image.classList.add("hide")
                }
            });
        }else if(index === 1){
            allImages.forEach((image, index) => {
                image.classList.remove("hide")
                if (index !== 2 && index !== 3){
                    image.classList.add("hide")
                }
            });
        }else{
            allImages.forEach((image, index) => {
                image.classList.remove("hide")
                if (index !== 4 && index !== 5){
                    image.classList.add("hide")
                }
            });
        }
    }
}else{
    console.log(progressBoxes)
    document.querySelector("h1").innerHTML = "here"
    /*
    for (let i = 0; i < progressBoxes.length; i++) {
        progressBoxes[i].addEventListener("click", ()=>{
            clearInterval(myInterval)
            allButChosen(i);
        });
    }
    function allButChosen(i){
        progressBoxes[i].setAttribute("id", "pink")
        progressBoxes.forEach((val, index) => {
            if (index !== i){
                val.removeAttribute("id", "pink")
            }
        });
        getImgs(i);

    }
      
    /* change img every 3 sec untill one of the little boxes are pressed */
    /*let myInterval = setInterval(() => {
        usingInterval();
    }, 3000);

    function usingInterval(){
        if(index === 2){
            index = 0;
        }else{
            index++
        }
        allButChosen(index)
    }
    
    function getImgs(index){
        if(index === 0){
            allImages.forEach((image, index) => {
                image.classList.remove("hide")
                if (index !== 0 && index !== 1){
                    image.classList.add("hide")
                }
            });
        }else if(index === 1){
            allImages.forEach((image, index) => {
                image.classList.remove("hide")
                if (index !== 2 && index !== 3){
                    image.classList.add("hide")
                }
            });
        }else{
            allImages.forEach((image, index) => {
                image.classList.remove("hide")
                if (index !== 4 && index !== 5){
                    image.classList.add("hide")
                }
            });
        }
    }*/
}