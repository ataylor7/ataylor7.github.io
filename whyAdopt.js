
var picButton = document.querySelector("#catPicButton");
picButton.addEventListener("click", newCatPic);


var factButton = document.querySelector("#catFactButton");
factButton.addEventListener("click", newCatFact);

function newCatPic(){
    fetch('https://api.thecatapi.com/v1/images/search').then(response => response.json())
    .then((data) => {
        let catUrl = data[0].url
        $(".catPic").html(`<img style='height: 300px; width: 400px;' src=${catUrl}>`);
    })
}

function newCatFact(){
    fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1').then(response => response.text())
    .then((data) => {
        let catFact = JSON.parse(data).text
        $(".catFact").html(`<p>${catFact}</p>`);
    })
}

newCatPic()
newCatFact()


