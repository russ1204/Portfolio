const speciesData = [
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gavia_immer_%28Common_Loon%29_1APR2017.jpg/1280px-Gavia_immer_%28Common_Loon%29_1APR2017.jpg",
        title: "Common Loon",
        lineage: "Black-headed lineage",
        latin: "Gavia immer",
        english: "Great northern diver",
        description: "Found in coasts and lakes of Canada and the US as far south as Mexico, " +
            "and on the Atlantic coast of Europe"
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Yellow-billed_Loon_Chipp_South_8-12-13_Ryan_Askren.jpg/1280px-Yellow-billed_Loon_Chipp_South_8-12-13_Ryan_Askren.jpg",
        title: "Yellow-billed Loon",
        lineage: "Black-headed lineage",
        latin: "Gavia adamsii",
        english: "White-billed diver",
        description: "Breeds in the north of Russia, Canada, and Alaska, USA."
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Red-throated_Loon_%28Gavia_stellata%29_-_Summer_plumage_breeding_adult2.jpg/960px-Red-throated_Loon_%28Gavia_stellata%29_-_Summer_plumage_breeding_adult2.jpg",
        title: "Red-throated loon",
        lineage: "Black-headed lineage",
        latin: "Gavia stellata",
        english: "Red-throated diver",
        description: "Found in Northern hemisphere generally north of 50°, inland in summer and in coastal areas in winter as far south as Florida and southern China"
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/e/ef/PacificLoon24.jpg",
        title: "Pacific Loon",
        lineage: "Black-throated lineage",
        latin: "Gavia pacifica",
        english: "Pacific diver",
        description: "Found in northern Canada and eastern Siberia, and winters along the Pacific coast of North America"
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Gavia_arctica_EM1B1934_%2848009481846%29.jpg/1280px-Gavia_arctica_EM1B1934_%2848009481846%29.jpg",
        title: "Black-throated loon",
        lineage: "Black-headed lineage",
        latin: "Gavia Arctica",
        english: "Black-throated diver",
        description: "Found in northern Europe and Asia, breeding inland and wintering on Atlantic and Pacific coasts."
    },

];

let currentSlide = 0;

const speciesImage = document.querySelector(".species-img");
const speciesName = document.querySelector(".species-text h3");
const speciesLineage = document.querySelector(".species-text b");
const speciesLatin = document.querySelector(".species-text i");
const speciesEnglish = document.querySelector(".species-text .english");
const description = document.querySelector(".species-text .species-description");
const next = document.querySelector(".next");
const back = document.querySelector(".back");

function updateSlide(index) {
    speciesImage.style.backgroundImage = `url(${speciesData[index].img})`;
    speciesName.textContent = speciesData[index].title;
    speciesLineage.textContent = speciesData[index].lineage;
    speciesLatin.textContent = speciesData[index].latin;
    speciesEnglish.textContent = speciesData[index].english;
    description.textContent = speciesData[index].description;
}

next.addEventListener("click", () => {
    currentSlide++;
    if (currentSlide >= speciesData.length) currentSlide = 0;
    updateSlide(currentSlide);
});

back.addEventListener("click", () => {
    currentSlide--;
    if (currentSlide < 0) currentSlide = speciesData.length - 1;
    updateSlide(currentSlide);
});

updateSlide(currentSlide);
