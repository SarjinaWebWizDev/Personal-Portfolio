document.addEventListener('DOMContentLoaded', function () {
    var typed = new Typed('#element', {
        strings: ['Web Developer', 'Computer Engg. Student', 'Frontend Developer'],
        typeSpeed: 30,
    });

    document.addEventListener('DOMContentLoaded', function () {
        var inputs = document.querySelectorAll('.contact-inputs');
        inputs.forEach(function (input) {
            if (window.getComputedStyle(input).display === 'none') {
                input.style.display = 'block';
            }
        });
    });

    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    function animateSkillBars() {
        document.querySelectorAll('.bar span').forEach(span => {
            span.style.width = span.getAttribute('data-width');
        });
    }
// Adding event listeners to project buttons
document.querySelectorAll('.projects .btn').forEach((button, index) => {
    button.addEventListener('click', function () {
        var urls = [
            'https://keen-starlight-18ee9c.netlify.app/',
            'https://stately-chaja-87df92.netlify.app/',
            'https://spontaneous-mandazi-2c61b1.netlify.app/',
'https://sarjinawebwizdev.github.io/Personal-Portfolio/',
            'https://precious-cucurucho-9fdd85.netlify.app/',
            'https://cerulean-scone-5d69e5.netlify.app/'
            
            
            
            // Add more URLs corresponding to your projects
        ];
        window.open(urls[index], '_blank');
    });
});
});