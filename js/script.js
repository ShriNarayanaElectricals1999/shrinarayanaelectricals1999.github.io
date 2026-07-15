document.addEventListener("DOMContentLoaded", function() {
    const marqueeTrack = document.querySelector('.gallery-marquee-track');
    
    // Total number of panel images uploaded in your images folder
    const totalPanels = 19; 
    let trackHTML = '';

    // Generate elements dynamically using the updated extension format (.jpg.jpeg)
    for (let i = 1; i <= totalPanels; i++) {
        trackHTML += `
            <div class="gallery-item">
                <img src="images/Panel${i}.jpg.jpeg" alt="Shri Narayana Electricals Panel Control Architecture ${i}" onerror="this.src='https://placehold.co/600x500/0A4D92/FFFFFF?text=Panel+Build+${i}';">
                <p>Panel System Build ${i}</p>
            </div>
        `;
    }

    // Duplicate track to ensure a seamless continuous sliding marquee without gaps
    marqueeTrack.innerHTML = trackHTML + trackHTML;
});
