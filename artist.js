document.getElementById('darkModeToggle').addEventListener('change', function () {
    document.body.classList.toggle('dark-theme');
});

function fetchArtworks() {
    const artworks = [
        { title: 'Artwork 1', image: 'https://i.pinimg.com/474x/4a/ec/df/4aecdfe4364b1266118af53e02938a79.jpg' },
        { title: 'Artwork 2', image: 'https://i.pinimg.com/736x/c3/9b/cf/c39bcf40ff0b8dc96d18bf04cd2d8c9a.jpg' },
        { title: 'Artwork 3', image: 'https://i.pinimg.com/736x/8c/14/3f/8c143f51f1548f62f1a8bef5dcf4f3e6.jpg' },
        { title: 'Artwork 4', image: 'https://i.pinimg.com/736x/e2/23/35/e223355f60aa3d0f215e3ed0dfb6f5ed.jpg' }
    ];

    return artworks;
}

function renderArtworks() {
    const artworks = fetchArtworks();

    const artworksSection = document.getElementById('artworks');
    artworksSection.innerHTML = '';

    artworks.forEach(artwork => {
        const artworkElement = document.createElement('div');
        artworkElement.classList.add('artwork');

        const imageLink = document.createElement('a');
        imageLink.href = artwork.image; 

        const image = document.createElement('img');
        image.src = artwork.image;
        image.alt = artwork.title;

        imageLink.appendChild(image);
        artworkElement.appendChild(imageLink);

        artworksSection.appendChild(artworkElement);
    });
}

window.addEventListener('load', renderArtworks);

