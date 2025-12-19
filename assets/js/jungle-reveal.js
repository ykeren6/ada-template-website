// Jungle Reveal Effect - Click to reveal figures
document.addEventListener('DOMContentLoaded', function() {
    const reveals = document.querySelectorAll('.jungle-reveal');
    
    reveals.forEach(function(reveal) {
        reveal.addEventListener('click', function() {
            this.classList.add('revealed');
        });
    });
});
