const hatData = [
    {
        name: "Kova tembel",
        img: "https://upload.wikimedia.org/wikipedia/commons/9/9b/PikiWiki_Israel_3243_Ein_Hahoresh.jpg",
        description: "Cloth hat worn by Israeli pioneers and kibbutzniks."
    },
    {
        name: "Mortarboard",
        img: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinusPaulingGraduation1922.jpg",
        description: "Flat, square hat with a tassel, worn as part of academic dress."
    },
    {
        name: "Picture hat",
        img: "https://upload.wikimedia.org/wikipedia/commons/d/d1/1890_Gaiety_Girls.jpg",
        description: "An elaborate women's design with a wide brim, also known as a Gainsborough or garden hat."
    },
    {
        name: "Planter's hat",
        img: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Planter%27sHat.jpg",
        description: "Lightweight straw hat with a wide brim, round crown, and narrow round dent."
    },
    {
        name: "Porkpie",
        img: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Porkpie.jpg",
        description: "Felt hat with a low flat crown and narrow brim."
    },
    {
        name: "Mushroom hat",
        img: "https://upload.wikimedia.org/wikipedia/commons/0/09/DorothyCampbellPortrait1909.jpg",
        description: "Hat with a distinctly downward-facing brim, particularly associated with the Edwardian era."
    },
    {
        name: "Top hat",
        img: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Tophat.jpg",
        description: "Tall, flat-crowned, cylindrical hat worn by men in the 19th and early 20th centuries."
    },
    {
        name: "Trilby",
        img: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Rosenberg_-_Selfportrait.jpg",
        description: "Soft felt men's hat with a deeply indented crown and a narrow, often upturned brim."
    },
    {
        name: "Weimao",
        img: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Veiled_hat_-_Eighteen_Songs_of_a_Nomad_Flute-_The_Story_of_Lady_Wenji.jpg",
        description: "A traditional Chinese wide-brimmed hat with a shoulder-length veil."
    },
    {
        name: "Wideawake",
        img: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Portrait_of_Alfred_Lord_Tennyson_c1860.jpg",
        description: "A broad-brimmed felt \"countryman's hat\" with a low crown."
    },
    {
        name: "Boater",
        img: "https://upload.wikimedia.org/wikipedia/commons/c/c5/BoaterStrawHat_wb.jpg",
        description: "A flat-brimmed and flat-topped straw hat formerly worn by seamen."
    },
    {
        name: "Boonie hat",
        img: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Tigerstripehat.JPG",
        description: "A soft, wide-brimmed cotton hat commonly used by military forces."
    },
    {
        name: "Bowler hat",
        img: "https://upload.wikimedia.org/wikipedia/commons/7/79/Bowler_Hat_sw_%28fcm%29.jpg",
        description: "A hard felt hat with a rounded crown, also known as a Derby."
    },
    {
        name: "Breton",
        img: "https://upload.wikimedia.org/wikipedia/commons/a/a1/StateLibQld_1_132831_Head_and_shoulders_portrait_of_a_young_woman%2C_1900-1910.jpg",
        description: "A woman's hat with a round crown and deep brim turned upwards all the way round."
    },
    {
        name: "Cavalier hat",
        img: "https://upload.wikimedia.org/wikipedia/commons/1/17/Frans_Hals_-_detail_showing_Cavalier_hats.jpg",
        description: "A wide-brimmed hat popular in 17th-century Europe."
    },
    {
        name: "Cloche hat",
        img: "https://upload.wikimedia.org/wikipedia/commons/1/13/Vilmabanky.jpg",
        description: "A bell-shaped woman's hat popular during the Roaring Twenties."
    },
    {
        name: "Conical Asian hat",
        img: "https://upload.wikimedia.org/wikipedia/commons/3/32/Petit_gar%C3%A7on_sur_un_bufle%2C_Vietnam.JPG",
        description: "A conical straw hat associated with East and Southeast Asia."
    },
    {
        name: "Gaitou hat",
        img: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Song_dynasty_Gaitou_Hat_2.jpg",
        description: "A traditional Chinese women's hat, also known as \"mianyi.\""
    },
    {
        name: "Halo hat",
        img: "https://upload.wikimedia.org/wikipedia/commons/7/7d/StateLibQld_1_126531_Margery_Foll_and_Mrs_Foll_%28wife_of_Senator_Foll%29_at_Doomben_Racecourse%2C_Brisbane%2C_1940_cropped.jpg",
        description: "Circular design that frames the face, creating a 'halo' effect."
    },
    {
        name: "Homburg",
        img: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Robert_Ewing_1914.jpg",
        description: "A semi-formal hat with a medium brim and a crown with a crease and no dents."
    },
    {
        name: "Akubra",
        img: "https://upload.wikimedia.org/wikipedia/commons/8/80/Akubra-style_hat.jpg",
        description: "An Australian brand of wide-brimmed bush hat."
    }
];

let currHat = 0;

const hatCards = document.querySelectorAll(".hat-card");


function updateCard(slideIndex, hatIndex) {
    const dataIndex = (hatIndex + hatData.length) % hatData.length;
    const data = hatData[dataIndex];
    const card = hatCards[slideIndex];

    const imgTag = card.querySelector("img");
    const nameTag = card.querySelector("h3");
    const descTag = card.querySelector(".fade p");

    imgTag.src = data.img;
    nameTag.textContent = data.name;
    if (descTag) {
        descTag.textContent = data.description;
    }
}

function updateSlides(currHat) {
    updateCard(0, currHat - 2);
    updateCard(1, currHat - 1);
    updateCard(2, currHat);
    updateCard(3, currHat + 1);
    updateCard(4, currHat + 2);
}

document.querySelector(".next-next-hat").addEventListener("click", () => {
    currHat = (currHat + 2) % hatData.length;
    updateSlides(currHat);
});

document.querySelector(".next-hat").addEventListener("click", () => {
    currHat = (currHat + 1) % hatData.length;
    updateSlides(currHat);
});


document.querySelector(".prev-hat").addEventListener("click", () => {
    currHat = (currHat - 1) % hatData.length;
    updateSlides(currHat);
});

document.querySelector(".prev-prev-hat").addEventListener("click", () => {
    currHat = (currHat - 2) % hatData.length;
    updateSlides(currHat);
});

updateSlides(currHat);
