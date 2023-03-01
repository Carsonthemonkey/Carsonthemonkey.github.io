document.addEventListener('DOMContentLoaded', domLoadedHandler);



function domLoadedHandler(){
    let imageGrid = document.querySelectorAll(".image-grid .animated-gif");

    for(let image of imageGrid){
        image.addEventListener('mouseover', animateGif);
        image.addEventListener('mouseout', stopGif);
    }
}

function animateGif(){
    let sourceLen = this.src.length;
    this.src = (this.src).substring(0, sourceLen - 4) + ".gif";
}

function stopGif(){
    let sourceLen = this.src.length;
    this.src = (this.src).substring(0, sourceLen - 4) + ".png";
}

