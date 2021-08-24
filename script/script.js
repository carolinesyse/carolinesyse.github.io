// Smooth scroll til About-seksjonen
document.querySelectorAll('#nav a[href^="#"]').forEach(trigger => {
    trigger.onclick = function(e) {
        e.preventDefault();
        let hash = this.getAttribute('href');
        let target = document.querySelector(hash);
        let headerOffset = 50;
        let elementPosition = target.offsetTop;
        let offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    };
});

//Jobbefunksjoner

//document.getElementById("work").classList.add("blur");
//document.getElementById("body").classList.add("noScroll");


// Åpne overlay basert på hvilken du klikker på

var clickedItemId;
var currentItemId;
var currentItem;
var overlayElement;

document.querySelectorAll('.workItem').forEach(trigger => {
    trigger.onclick = function(e) {        
        
        clickedItemId = this.id;
        currentItemId = clickedItemId + "_content";

        currentItem = document.getElementById(currentItemId);
        overlayElement = document.getElementById("overlay");

        if(overlayElement.classList.contains("hidden")){

            console.log(currentItem);
            overlayElement.classList.remove("hidden");
            overlayElement.classList.add("visible");
            document.getElementById("work").classList.add("blur");
            document.getElementById("header").classList.add("blur");
            document.getElementById("about").classList.add("blur");
            document.getElementById("body").classList.add("noScroll");
            currentItem.classList.remove("hidden");
            currentItem.classList.add("visible");

        }

    };
});

document.getElementById("overlayBg").onclick = function(e){
    if (e.target !== this){
		return;
	}else{
		closeOverlay();
	}
}

function closeOverlay(){

    overlayElement.classList.add("hidden");
    overlayElement.classList.remove("visible");

    document.getElementById("work").classList.remove("blur");
    document.getElementById("header").classList.remove("blur");
    document.getElementById("about").classList.remove("blur");
    document.getElementById("body").classList.remove("noScroll");

    currentItem.classList.remove("visible");
    currentItem.classList.add("hidden");
}

