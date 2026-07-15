document.addEventListener("DOMContentLoaded", function() {
    const marqueeTrack = document.querySelector('.gallery-marquee-track');
    
    // Configured for 20 images using the exact dual file extension seen on your GitHub
    const totalPanels = 20; 
    let trackHTML = '';

    // Generate structural markup loops for the sliding elements
    for (let i = 1; i <= totalPanels; i++) {
        trackHTML += `
            <div class="gallery-item">
                <img src="images/Panel${i}.jpg.jpeg" alt="Shri Narayana Electricals Panel Control Architecture ${i}" onerror="this.src='https://placehold.co/600x500/0A4D92/FFFFFF?text=Panel+Build+${i}';">
                <p>Panel System Build ${i}</p>
            </div>
        `;
    }

    // Duplicate track layout inner text completely to make a seamless continuous right-to-left marquee loop
    marqueeTrack.innerHTML = trackHTML + trackHTML;
});
