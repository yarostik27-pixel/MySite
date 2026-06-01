function openStore(){

    window.open("https://play.google.com", "_blank");

}
    window.open("https://apps.apple.com", "_blank")
function rentCar(car){

    alert("Ви орендували: " + car);

}

function filterCars(){

    const type = document.getElementById("carType").value;

    const cards = document.querySelectorAll(".car-card");

    cards.forEach(card => {

        const category = card.getAttribute("data-category");

        if(type === "all"){

            card.style.display = "block";

        }
        else if(type === category){

            card.style.display = "block";

        }
        else{

            card.style.display = "none";

        }

    });

}