document.addEventListener("DOMContentLoaded", function() {
    const marqueeTrack = document.querySelector('.gallery-marquee-track');
    
    // Configured for your 20 panel images
    const totalPanels = 20; 
    let trackHTML = '';

    // Generate structural items dynamically
    for (let i = 1; i <= totalPanels; i++) {
        trackHTML += `
            <div class="gallery-item">
                <img src="images/panel${i}.jpeg" 
                     alt="Shri Narayana Electricals Panel Control Architecture ${i}" 
                     onerror="this.onerror=null; this.src='images/Panel${i}.jpeg';">
                <p>Panel System Build ${i}</p>
            </div>
        `;
    }

    // Duplicate content track to construct an unbroken, loopable sliding marquee
    marqueeTrack.innerHTML = trackHTML + trackHTML;
});
