
const currentYear = new Date().getFullYear();
const lastModified = new Date(document.lastModified);
document.getElementById("currentYear").textContent = currentYear;
document.getElementById("lastModified").textContent = lastModified;

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", function() {
    navMenu.classList.toggle("show");
    this.textContent = navMenu.classList.contains("show") ? "✖" : "☰";
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:"images/aba-nigeria-temple.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Spokane Washington",
        location: "Spokane, Washington, United States",
        dedicated: "1999, August, 21",
        area: 10700,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/spokane-washington/400x250/spokane-washington-temple-1279173-wallpaper.jpg"
    },
    {
        templeName: "Mount Timpanogos Utah",
        location: "American Fork, Utah, United States",
        dedicated: "1996, October, 13",
        area: 107240,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mount-timpanogos-utah/400x250/mount-timpanogos-temple-lds-885508-wallpaper.jpg"
    },
    {
        templeName: "Gila Valley Arizona",
        location: "Central, Arizona, United States",
        dedicated: "2010, May, 23",
        area: 18561,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/the-gila-valley-arizona/400x250/gila-valley-temple-759378-wallpaper.jpg"
    }
];

const menuOptions = {
    home: {
        headingName: "Home",
        description: "All temples",
        id: "home-button"
    },
    old: {
        headingName: "Old",
        description: "Temples built before 1900",
        id: "old-button"
    },
    new: {
        headingName: "New",
        description: "Temples built after 2000",
        id: "new-button"
    },
    large: {
        headingName: "Large",
        description: "Temples larger than 90,000 square feet",
        id: "large-button"
    },
    small: {
        headingName: "Small",
        description: "Temples smaller than 10,000 square feet",
        id: "small-button"
    }
};

function menuOptionSelected(option) {
    const pageHeading = document.getElementById("heading");
    pageHeading.innerHTML = `
        <h2>${menuOptions[option].headingName}</h2>
        <p>${menuOptions[option].description}</p>
    `;
    
    document.querySelectorAll('.selected').forEach(el => 
        el.classList.remove('selected')
    );
    
    const buttonSelected = document.getElementById(menuOptions[option].id);
    buttonSelected.classList.add('selected');

    filterTemples(option);
}

function displayTemples(templesToDisplay) {
    const galleryDiv = document.getElementById("gallery");
    galleryDiv.innerHTML = "";

    templesToDisplay.forEach(temple => {
        const figure = document.createElement("figure");

        const figCaption = document.createElement("figcaption");
        const title = document.createElement("h3");
        title.textContent = temple.templeName;
        const details = document.createElement("p");
        details.innerHTML = `
            <strong>Location:</strong> ${temple.location}<br>
            <strong>Dedicated:</strong> ${temple.dedicated}<br>
            <strong>Size:</strong> ${temple.area} sq ft
        `;
        figCaption.appendChild(title);
        figCaption.appendChild(details);
        
        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.templeName;
        img.loading = "lazy";

        figure.appendChild(figCaption);
        figure.appendChild(img);
        galleryDiv.appendChild(figure);
    });
}

function filterTemples(option) {
    let filteredTemples = temples;

    switch (option) {
        case "old":
            filteredTemples = temples.filter(temple => {
                const year = parseInt(temple.dedicated.split(", ")[0]);
                return year < 1900;
            });
            break;
        case "new":
            filteredTemples = temples.filter(temple => {
                const year = parseInt(temple.dedicated.split(", ")[0]);
                return year > 2000;
            });
            break;
        case "large":
            filteredTemples = temples.filter(temple => temple.area > 90000);
            break;
        case "small":
            filteredTemples = temples.filter(temple => temple.area < 10000);
            break;
    }

    displayTemples(filteredTemples);
}

menuOptionSelected('home');

for (let key in menuOptions) {
    const element = menuOptions[key];
    const menuButton = document.getElementById(element.id);
    menuButton.addEventListener("click", function(e) {
        e.preventDefault();
        menuOptionSelected(key);
    });
}