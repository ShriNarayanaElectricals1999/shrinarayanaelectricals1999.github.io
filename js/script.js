
document.addEventListener("DOMContentLoaded", function() {
    const galleryGrid = document.querySelector('.gallery-grid');
    
    // Automatically loops, identifies, and builds assets from Panel1.jpg through Panel19.jpg
    for (let i = 1; i <= 19; i++) {
        const itemWrapper = document.createElement('div');
        itemWrapper.className = 'gallery-item';
        
        itemWrapper.innerHTML = `
            <img src="images/Panel${i}.jpg" alt="Shri Narayana Electricals Panel System ${i}" onerror="this.parentElement.style.display='none';">
            <p>Industrial Panel Build ${i}</p>
        `;
        
        galleryGrid.appendChild(itemWrapper);
    }
});
