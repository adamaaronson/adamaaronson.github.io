document.addEventListener('DOMContentLoaded', () => {
    let reveals = document.getElementsByClassName('reveal');

    for (let reveal of reveals) {
        const revealedText = reveal.textContent;
        reveal.classList.add('unrevealed');
        reveal.textContent = 'Click to reveal';
        reveal.addEventListener('click', () => {
            reveal.classList.remove('unrevealed');
            reveal.classList.add('revealed');
            reveal.textContent = revealedText;
        });
    }
});
