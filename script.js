document.addEventListener('DOMContentLoaded', domLoadedHandler);



function domLoadedHandler(){
    testImage = new Image()
    testImage.onload = function(){
        console.log("Whisky gif loaded");
    }
    testImage.src = "WhiskyGlass.gif"

    
    let imageGrid = document.querySelectorAll(".image-grid .animated-gif");

    for(let image of imageGrid){
        image.addEventListener('mouseover', animateGif);
        image.addEventListener('mouseout', stopGif);
        image.onload = function(){
            console.log(this.src + "loaded");
        }
        let sourceLen = image.src.length;
        const loadImg = new Image();
        loadImg.src = (image.src).substring(0, sourceLen - 4) + ".gif";
    }
}

function animateGif(){
    console.log("mouseover " + this.className);
    let sourceLen = this.src.length;
    this.src = (this.src).substring(0, sourceLen - 4) + ".gif";
    //console.log((this.src).substring(sourceLen - 4, sourceLen));
}

function stopGif(){
    console.log("mouseout " + this.className)
    let sourceLen = this.src.length;
    this.src = (this.src).substring(0, sourceLen - 4) + ".png";
}

