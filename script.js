// Effetto di fade-in al caricamento
document.addEventListener("DOMContentLoaded", function() {
    const fadeElements = document.querySelectorAll('section, .gallery-item');
    const options = {
        threshold: 0.3
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
                observer.unobserve(entry.target);
            }
        });
    }, options);

    fadeElements.forEach(element => {
        observer.observe(element);
    });
});