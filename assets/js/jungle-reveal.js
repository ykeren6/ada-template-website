// Jungle Reveal Effect - Click to reveal figures with lazy loading
document.addEventListener('DOMContentLoaded', function() {
    const clickCatchers = document.querySelectorAll('.jungle-reveal-click-catcher');
    
    clickCatchers.forEach(function(catcher) {
        catcher.addEventListener('click', function() {
            const reveal = this.closest('.jungle-reveal');
            if (reveal) {
                reveal.classList.add('revealed');
                
                // Lazy load iframe if it has data-src
                const iframe = reveal.querySelector('iframe[data-src]');
                if (iframe && !iframe.src) {
                    iframe.src = iframe.getAttribute('data-src');
                }
            }
        });
    });
    
    // Intersection Observer for viewport-based lazy loading
    if ('IntersectionObserver' in window) {
        const lazyIframes = document.querySelectorAll('iframe[data-src]');
        const iframeObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const iframe = entry.target;
                    if (!iframe.src && iframe.hasAttribute('data-src')) {
                        iframe.src = iframe.getAttribute('data-src');
                        iframeObserver.unobserve(iframe);
                    }
                }
            });
        }, {
            rootMargin: '50px' // Start loading when 50px from viewport
        });
        
        lazyIframes.forEach(function(iframe) {
            iframeObserver.observe(iframe);
        });
    }
});
