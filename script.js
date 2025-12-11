// 1. Set the current year in the footer automatically
document.getElementById('year').textContent = new Date().getFullYear();

// 2. The Typewriter Effect Logic
const texts = [
    "Flutter Apps", 
    "iOS Development", 
    "Android Development", 
    "Beautiful UI"
];

let count = 0;       // Which word are we on?
let index = 0;       // Which letter are we on?
let currentText = ""; 
let letter = "";

(function type() {
    // If we reached the end of the list, start over
    if (count === texts.length) {
        count = 0;
    }
    
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    // Update the HTML element
    const target = document.getElementById('typing-text');
    if(target) {
        target.textContent = letter;
    }

    // If word is finished, wait 2 seconds, then start next word
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000); 
    } else {
        // Otherwise type next letter quickly
        setTimeout(type, 100);
    }
}());

// 3. Smooth Scroll for browsers that don't support CSS scroll-behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});