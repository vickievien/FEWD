function selectPet(petType){

    // Get the specific pet data set
    let thePet = petData[petType]
    console.log(petData);

    // Set the title
    document.querySelector(".petDisplayName").innerHTML = thePet.displayName;

    
    // Empty the specification data
    let petSpecs = "";
    
    // Add the space required, size, weight
    petSpecs += `<dt>Size</dt><dd>${thePet.size}</dd>`;
    petSpecs += `<dt>Weight</dt><dd>${thePet.weight}</dd>`;
    petSpecs += `<dt>Space Required</dt><dd>${thePet.spaceRequired}</dd>`;
    
    // Add logic to add the trainability and lap size images
    
    if (thePet.trainability === true) {
        petSpecs += `<dt>Trainability</dt><dd><img src='img/200px-Gnome-emblem-default.svg.png' alt='Yes' class='checkmark'></dd>`;
    } else {
        petSpecs += `<dt>Trainability</dt><dd><img src='img/200px-Gnome-emblem-unreadable.svg.png' alt='Yes' class='checkmark'></dd>`;
    }

    if (thePet.fitsOnLap === true) {
        petSpecs += `<dt>Fit On Lap</dt><dd><img src='img/200px-Gnome-emblem-default.svg.png' alt='Yes' class='checkmark'></dd>`;
    } else {
        petSpecs += `<dt>Fit On Lap</dt><dd><img src='img/200px-Gnome-emblem-unreadable.svg.png' alt='Yes' class='checkmark'></dd>`;
    }

    // Add the foods (may require loop)
    petSpecs += '<dt>Foods</dt><dd><ul>';

    for(let i=0; i<thePet.foods.length; i++) {
        petSpecs += `<li>${thePet.foods[i]}</li>`
    }
    petSpecs += '</ul></dd>';

    document.querySelector('.petsDataSpecs').innerHTML = petSpecs;
    
    
    // Update the images
    
        
        document.querySelector(".photoLarge").setAttribute("src", thePet.images[0]);

        document.querySelector(".photoLarge").setAttribute("alt", thePet.images[0]);

        let babyThumb = "";

        document.querySelector(".thumbHaus").innerHTML = babyThumb;

        let i=0;
        babyThumb +=
        `<a href="${thePet.images.img[i]}">
            <img class="photoThumb" alt="${thePet.images.alt[i]}" src="${thePet.images.thumb[i]}"</a>`

        // Apply the click event to thumbnails (note - this will likely need to be applied to the a and not the img direclty)

        let petPicLarge = document.querySelector('.photoLarge');

        let petPicThumb = document.querySelectorAll('.thumbHaus a');  
    
        function changeToBig () {


        }


        petPicThumb[i].addEventListener('click', changeToBig)

    // Empty the ideal for

    // Insert the ideal for


    // Empty the Adoption Groups

    // Add the adoption groups


}// end selectPet



document.addEventListener('DOMContentLoaded', function(event) {

    // Initial run
    selectPet("dog");
    //Update whenever a new value is picked
    document.querySelector("#petType").addEventListener("change",function(){
        //Get what was selected
        let selectedPet = document.querySelector('#petType').value;
        
        // Call select pet with the selection
        selectPet(selectedPet);
    });
});