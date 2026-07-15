document.addEventListener("DOMContentLoaded", function() {
    const marqueeTrack = document.querySelector('.gallery-marquee-track');
    
    // Configured for your 20 clean lowercase panel images
    const totalPanels = 20; 
    let trackHTML = '';

    // Generate structural items matching your updated filenames exactly
    for (let i = 1; i <= totalPanels; i++) {
        trackHTML += `
            <div class="gallery-item">
                <img src="images/panel${i}.jpeg" alt="Shri Narayana Electricals Panel Control Architecture ${i}" onerror="this.src='https://placehold.co/600x500/0A4D92/FFFFFF?text=Panel+Build+${i}';">
                <p>Panel System Build ${i}</p>
            </div>
        `;
    }

    // Duplicate content track to construct an unbroken, loopable sliding marquee
    marqueeTrack.innerHTML = trackHTML + trackHTML;
});
