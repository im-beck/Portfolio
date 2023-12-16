const breedListUrl = "https://dog.ceo/api/breeds/list/all";
const imageUrlBase = "https://dog.ceo/api/breed/";

function fetchAndPopulateBreeds() {
    fetch(breedListUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const breedsSelect = document.getElementById("breeds");

            breedsSelect.innerHTML = "";

            for (const breed in data.message) {
                const option = document.createElement("option");
                option.value = breed;
                option.text = breed;
                breedsSelect.appendChild(option);
            }
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
}

function fetchAndDisplayBreedImages(selectedBreed) {
    const imageUrl = `${imageUrlBase}${selectedBreed}/images`;

    fetch(imageUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const imageNumInput = document.getElementById("image-num");
            const imageContainer = document.getElementById("image-container");

            imageContainer.innerHTML = "";

            const images = data.message;
            const numImages = Math.min(imageNumInput.value, images.length);

            for (let i = 0; i < numImages; i++) {
                const randomIndex = Math.floor(Math.random() * images.length);
                const img = document.createElement("img");
                img.src = images[randomIndex];
                img.alt = `Dog ${i + 1}`;
                imageContainer.appendChild(img);
            }
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
}

document.getElementById("btn-load").addEventListener("click", fetchAndPopulateBreeds);

const breedsSelect = document.getElementById("breeds");
breedsSelect.addEventListener("change", () => {
    const selectedBreed = breedsSelect.value;
    fetchAndDisplayBreedImages(selectedBreed);
});

fetchAndPopulateBreeds();

