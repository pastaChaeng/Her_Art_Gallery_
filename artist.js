window.onload = function() {
    var artworksSection = document.getElementById('artworks');

    // Assuming artworks is an array of image URLs
    var artworks = ['artwork1.jpg', 'artwork2.jpg', 'artwork3.jpg'];

    artworks.forEach(function(artwork) {
        var img = document.createElement('img');
        img.src = artwork;
        img.style.width = '200px';
        img.style.height = '200px';
        img.style.margin = '10px';
        artworksSection.appendChild(img);
    });
};


document.getElementById('darkModeToggle').addEventListener('change', function() {
    document.body.classList.toggle('dark');
  });
  