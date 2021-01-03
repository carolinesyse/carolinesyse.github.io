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

document.querySelectorAll('.workItem').forEach(trigger => {
    trigger.onclick = function(e) {
        //console.log(this.id);

        let clickedItemId = this.id;
        let currentItemId = clickedItemId + "_content";
        let currentItem = document.getElementById(currentItemId);

        let overlayElement = document.getElementById("overlay");

        if(overlayElement.classList.contains("hidden")){
            overlayElement.classList.remove("hidden");
            overlayElement.classList.add("visible");
            document.getElementById("work").classList.add("blur");
            document.getElementById("header").classList.add("blur");
            document.getElementById("body").classList.add("noScroll");
            currentItem.classList.remove("hidden");
            currentItem.classList.add("visible");
        }

        //console.log(currentItemId);

    };
});