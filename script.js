document.addEventListener('mousemove', function(e) {
    const fish = document.querySelector('.fish');
    const fishWidth = fish.offsetWidth;
    const fishHeight = fish.offsetHeight;
    const x = e.clientX - fishWidth / 2;
    const y = e.clientY - fishHeight / 2;

    fish.style.transform = `translate(${x}px, ${y}px)`;
});