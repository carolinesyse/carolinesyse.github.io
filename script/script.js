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