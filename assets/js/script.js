let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav ul li a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top =window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav ul li a[href*=' + id + ' ]' ).classList.add
                (active)
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function() {
    const typingTextElement = document.querySelector('.typing-text');
    const words = ['Web Developer', 'Backend Developer', 'Web Designer', 'Software Engineer', 'Software Developer'];
    let wordIndex = 0;
    let charIndex = 0;
    let typing = true;

    function type() {
        const currentWord = words[wordIndex];
        if (typing) {
            typingTextElement.textContent = currentWord.substring(0, charIndex++);
            if (charIndex > currentWord.length) {
                typing = false;
                setTimeout(() => typing = true, 2000);
            }
        } else {
            typingTextElement.textContent = currentWord.substring(0, charIndex--);
            if (charIndex < 0) {
                typing = true;
                wordIndex = (wordIndex + 1) % words.length;
            }
        }
        setTimeout(type, typing ? 100 : 50);
    }

    type();
});