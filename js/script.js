document.addEventListener("DOMContentLoaded", function() {
    const galleryGrid = document.querySelector('.gallery-3column-grid');
    
    // Generates Panel1.jpg through Panel19.jpg with automated entrance animation properties
    for (let i = 1; i <= 19; i++) {
        const itemContainer = document.createElement('div');
        itemContainer.className = 'gallery-item animate__animated animate__zoomIn';
        itemContainer.style.animationDelay = `${(i % 5) * 0.1}s`;
        
        itemContainer.innerHTML = `
            <img src="images/Panel${i}.jpg" alt="Shri Narayana Electricals Panel Control Architecture ${i}" onerror="this.src='https://placehold.co/600x500/0A4D92/FFFFFF?text=Panel+Build+${i}';">
            <p>Panel System Build ${i}</p>
        `;
        
        galleryGrid.appendChild(itemContainer);
    }
});
