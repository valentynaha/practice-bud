const lamp = document.getElementById('lamp'); 
lamp.addEventListener('click', function() {
    const currentFill = lamp.getAttribute('fill');
    if(currentFill === 'black') {
        lamp.setAttribute('fill', 'yellow')
    } else {
        lamp.setAttribute('fill', 'black')
    }
});