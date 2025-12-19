// Jungle Reveal Effect - Click to reveal figures
document.addEventListener('DOMContentLoaded', function() {
    const clickCatchers = document.querySelectorAll('.jungle-reveal-click-catcher');
    
    clickCatchers.forEach(function(catcher) {
        catcher.addEventListener('click', function() {
            const reveal = this.closest('.jungle-reveal');
            if (reveal) {
                reveal.classList.add('revealed');
            }
        });
    });
});
