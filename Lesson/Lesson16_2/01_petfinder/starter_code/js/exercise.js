function selectPet(petType){
    let thePet = petData[petType];

    document.querySelector(".petDisplayName").innerHTML = thePet.displayName;

    let petSpecs = "";
    petSpecs += `<dt>Size</dt><dd>${thePet.size}</dd>`;
    petSpecs += `<dt>Weight</dt><dd>${thePet.weight}</dd>`;
    petSpecs += `<dt>Space Required</dt><dd>${thePet.spaceRequired}</dd>`;

    if (thePet.trainability === true) {
        petSpecs += `<dt>Trainable</dt><dd><img src ="img/200px-Gnome-emblem-default.svg.png" alt="yes" class="checkmark"></dd>`
    } else {
        petSpecs += `<dt>Trainable</dt><dd><img src ="img/200px-Gnome-emblem-unreadable.svg.png" alt="no" class="checkmark"></dd>`
    };

    if (thePet.fitsOnLap === true) {
        petSpecs += `<dt>Fits On Lap</dt><dd><img src ="img/200px-Gnome-emblem-default.svg.png" alt="yes" class="checkmark"></dd>`
    } else {
        petSpecs += `<dt>Fits On Lap</dt><dd><img src ="img/200px-Gnome-emblem-unreadable.svg.png" alt="no" class="checkmark"></dd>`
    };

    petSpecs += `<dt>Foods</dt><dd><ul>`;
        thePet.foods.forEach(n => {
            petSpecs += `<li>${n}</li>`
        });
    petSpecs += `</ul></dd>`;
    
    document.querySelector(".petsDataSpecs").innerHTML = petSpecs;
    

    let babyThumb = "";
        thePet.images.forEach(n => {
            babyThumb += `<a href="${n.img}"><img src="${n.thumb}" alt="${n.alt}" class="photoThumb"></a>`
        });
    document.querySelector(".thumbHaus").innerHTML = babyThumb;


    document.querySelector(".photoHaus").innerHTML = `<img class="photoLarge" alt="${thePet.images[0].alt}" src="${thePet.images[0].img}">`;

    function changeBig (e) {
        e.preventDefault();
        console.log('hello');

        document.querySelector(".photoHaus .photoLarge").setAttribute("src", this.getAttribute("href"));
        document.querySelector(".photoHaus .photoLarge").setAttribute("alt", this.querySelector("img").getAttribute("alt"));
    };

    let allThumbs = document.querySelectorAll(".thumbHaus > a");
    
    allThumbs.forEach(n => {
        n.addEventListener('click', changeBig);
    });

    let idealSpecs = "";
        thePet.idealOwner.forEach(n => {
            idealSpecs += `<li>${n}</li>`;
        });
    document.querySelector(".idealFor").innerHTML = idealSpecs;

    let adoptionSpecs = "";
        thePet.adoption.forEach(n => {
            adoptionSpecs += `<li><a href="${n.url}" target="_blank">${n.name}</a></li>`
        });
    document.querySelector(".adoptionGroups").innerHTML = adoptionSpecs;
}



document.addEventListener('DOMContentLoaded', function(event) {

    selectPet("dog");

    document.querySelector("#petType").addEventListener("change", function () {
        let chosenPet = document.querySelector("#petType").value;
        selectPet(chosenPet);
    });
});






